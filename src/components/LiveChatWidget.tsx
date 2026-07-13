
import { FormEvent, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare, Send, X, Minus, Upload, Loader2, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

type ChatMessage = {
  id: string;
  role: 'agent' | 'user';
  text: string;
  fileUrl?: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: 'welcome',
    role: 'agent',
    text: '👋 Welcome to OPCIEAS!\n\nHello! I\'m the OPCIEAS AI Assistant. I can help you with our products, government tender furniture, export services, quotations, and company information.',
  },
];

const quickQuestions = [
  'Get Product Catalogue',
  'Request Quote',
  'Government Tender',
  'Export Inquiry',
  'Product Information',
  'Contact Sales',
];

// OPCIEAS Knowledge Base for Predefined Responses
const opcieasKnowledge = {
  about: `OPCIEAS is a leading manufacturer of premium furniture solutions, specializing in Office Furniture, Educational Furniture, Hostel Furniture, Hotel Furniture, Hospital Furniture, Steel Furniture, Industrial Storage, Warehouse Racks, Auditorium Chairs, Cinema Seats, Stadium Chairs, Stainless Steel Wire Racks, Bathroom Storage, and more. We are committed to quality, innovation, and customer satisfaction.`,
  products: `We manufacture a wide range of furniture categories including:
• Office Furniture
• Educational Furniture
• School Furniture
• Hostel Furniture
• Hotel Furniture
• Hospital Furniture
• Industrial Storage
• Steel Furniture
• Library Furniture
• Warehouse Racks
• Auditorium Chairs
• Play Equipment
• Commercial Furniture
• Cinema Seats
• Stadium Chairs
• Stainless Steel Wire Racks
• Bathroom Storage`,
  governmentTender: `Yes! We specialize in supplying furniture for government tenders. We have extensive experience in government projects and can meet all your requirements. Please fill out the inquiry form for more details.`,
  export: `Yes, we export our furniture products internationally! We have a dedicated export department to handle global orders. Please fill out the export inquiry form for more details.`,
  catalogue: `You can download our product catalogue here: /opcieas-catalogue.html. Alternatively, you can request a quote and our team will share the latest catalogue with you.`,
  quotation: `To request a quotation, please fill out our inquiry form with your requirements, quantity, and contact details. Our sales team will get back to you shortly with a detailed quote.`,
  certifications: `OPCIEAS maintains high-quality standards and holds various industry certifications. For specific details about our certifications, please contact our sales team or visit our company page.`,
  factoryLocation: `Our manufacturing facility is located in India. For the exact address and directions, please contact us or visit our contact page.`,
  industries: `We serve multiple industries including Corporate Offices, Educational Institutions, Hostels, Hotels, Hospitals, Industrial Facilities, Warehouses, Auditoriums, Cinemas, Stadiums, and more.`,
  contactSales: `You can contact our sales team through the inquiry form, or reach us via phone/email. Our team is available 24/7 to assist you.`,
  fallback: `I couldn't find the exact information. Please leave your contact details, and our sales team will get back to you shortly.`,
};

function getAIResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  if (message.includes('about') || message.includes('tell me') || message.includes('company')) {
    return opcieasKnowledge.about;
  }
  if (message.includes('product') || message.includes('manufactur')) {
    return opcieasKnowledge.products;
  }
  if (message.includes('tender') || message.includes('government')) {
    return opcieasKnowledge.governmentTender;
  }
  if (message.includes('export') || message.includes('international')) {
    return opcieasKnowledge.export;
  }
  if (message.includes('catalogue') || message.includes('catalog')) {
    return opcieasKnowledge.catalogue;
  }
  if (message.includes('quote') || message.includes('quotation') || message.includes('price')) {
    return opcieasKnowledge.quotation;
  }
  if (message.includes('certification') || message.includes('certificate')) {
    return opcieasKnowledge.certifications;
  }
  if (message.includes('factory') || message.includes('location') || message.includes('address')) {
    return opcieasKnowledge.factoryLocation;
  }
  if (message.includes('industry') || message.includes('serve')) {
    return opcieasKnowledge.industries;
  }
  if (message.includes('contact') || message.includes('sales') || message.includes('phone') || message.includes('email')) {
    return opcieasKnowledge.contactSales;
  }
  if (message.includes('quote') || message.includes('quotation') || message.includes('bulk') || message.includes('tender') || message.includes('export') || message.includes('dealer')) {
    return 'Great! I can help you with that. Please fill out the inquiry form below with your details.';
  }

  return opcieasKnowledge.fallback;
}

export default function LiveChatWidget() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [agentTyping, setAgentTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
  });
  const [uploadingFile, setUploadingFile] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const saveConversation = async () => {
    if (!conversationId) {
      const { data, error } = await supabase.from('chat_conversations').insert([{}]).select('id').single();
      if (!error && data) {
        setConversationId(data.id);
        return data.id;
      }
      return null;
    }
    return conversationId;
  };

  const saveMessage = async (message: ChatMessage) => {
    const convId = await saveConversation();
    if (convId) {
      await supabase.from('chat_messages').insert([
        {
          conversation_id: convId,
          role: message.role,
          text: message.text,
          file_url: message.fileUrl,
        },
      ]);
    }
  };

  const handleSend = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setAgentTyping(true);

    await saveMessage(userMessage);

    // Check if we need to show lead form
    const keywords = ['quote', 'quotation', 'bulk', 'tender', 'export', 'dealer'];
    const needsLeadForm = keywords.some((k) => trimmed.toLowerCase().includes(k));

    window.setTimeout(async () => {
      const aiResponse = getAIResponse(trimmed);
      const agentMessage: ChatMessage = {
        id: `agent-${Date.now()}`,
        role: 'agent',
        text: aiResponse,
      };
      setMessages((prev) => [...prev, agentMessage]);
      await saveMessage(agentMessage);

      if (needsLeadForm) {
        setShowLeadForm(true);
      }

      setAgentTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = async (question: string) => {
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setAgentTyping(true);

    await saveMessage(userMessage);

    window.setTimeout(async () => {
      const aiResponse = getAIResponse(question);
      const agentMessage: ChatMessage = {
        id: `agent-${Date.now()}`,
        role: 'agent',
        text: aiResponse,
      };
      setMessages((prev) => [...prev, agentMessage]);
      await saveMessage(agentMessage);

      // Check if we need to show lead form
      const keywords = ['quote', 'quotation', 'bulk', 'tender', 'export', 'dealer'];
      const needsLeadForm = keywords.some((k) => question.toLowerCase().includes(k));
      if (needsLeadForm) {
        setShowLeadForm(true);
      }

      setAgentTyping(false);
    }, 1000);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingFile(true);
    try {
      // Upload to Supabase Storage (we'll use a bucket called 'chat-attachments')
      const fileName = `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage
        .from('chat-attachments')
        .upload(fileName, file);

      if (!error && data) {
        const { data: urlData } = supabase.storage
          .from('chat-attachments')
          .getPublicUrl(data.path);

        const userMessage: ChatMessage = {
          id: `user-${Date.now()}`,
          role: 'user',
          text: `Uploaded file: ${file.name}`,
          fileUrl: urlData.publicUrl,
        };
        setMessages((prev) => [...prev, userMessage]);
        await saveMessage(userMessage);
      }
    } catch {
      // If storage not set up, just add a message
      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: 'user',
        text: `Uploaded file: ${file.name}`,
      };
      setMessages((prev) => [...prev, userMessage]);
      await saveMessage(userMessage);
    }
    setUploadingFile(false);
  };

  const handleLeadSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const convId = await saveConversation();
    if (convId) {
      await supabase
        .from('chat_conversations')
        .update({
          user_name: leadForm.name,
          company_name: leadForm.companyName,
          email: leadForm.email,
          phone: leadForm.phone,
          country: leadForm.country,
        })
        .eq('id', convId);
    }
    setLeadSubmitted(true);
  };

  return (
    <>
      <AnimatePresence>
        {minimized && !open && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            type="button"
            onClick={() => setOpen(true)}
            className="fixed bottom-20 right-4 z-[910] flex min-h-[64px] w-[min(92vw,360px)] items-center justify-between gap-3 rounded-3xl border border-white/10 bg-[#081526]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#D4AF37] via-[#E8C766] to-[#B8932B] text-navy shadow-[0_10px_30px_rgba(212,175,55,0.35)]">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">Live Chat</p>
                <p className="text-xs text-white/70">Tap to continue your conversation.</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMinimized(false)}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {!open && (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            setMinimized(false);
          }}
          className="fixed bottom-20 right-6 z-[910] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#E8C766] text-navy shadow-[0_18px_40px_rgba(212,175,55,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(212,175,55,0.45)]"
          aria-label="Open live chat"
        >
          <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#E8C766]/20" />
          <MessageSquare className="relative h-7 w-7" />
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-20 right-4 z-[910] w-[min(92vw,420px)] rounded-[28px] border border-white/10 bg-[#091828]/95 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white">AI Live Chat</p>
                <p className="text-xs text-white/60">Powered by OPCIEAS</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setMinimized(true);
                  }}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
                  aria-label="Minimize chat"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setMinimized(false);
                  }}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex max-h-[58vh] flex-col gap-4 overflow-hidden rounded-[24px] border border-white/10 bg-[#0D172D]/95 p-4 shadow-inner">
              <div className="flex flex-col gap-3 overflow-y-auto pr-1" style={{ maxHeight: 'calc(58vh - 120px)' }}>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`rounded-3xl px-4 py-3 text-sm shadow-[0_10px_30px_rgba(0,0,0,0.18)] ${
                      message.role === 'agent'
                        ? 'self-start bg-white/10 text-white'
                        : 'self-end bg-gradient-to-br from-[#D4AF37]/15 to-[#E8C766]/15 text-white'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                    {message.fileUrl && (
                      <a
                        href={message.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-xs text-[#D4AF37]"
                      >
                        📎 View Attachment
                      </a>
                    )}
                  </div>
                ))}
                {agentTyping && (
                  <div className="self-start rounded-3xl bg-white/10 px-4 py-3 text-sm text-white/80">
                    Typing...
                  </div>
                )}

                {/* Quick Questions */}
                {messages.length === 1 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {quickQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuickQuestion(q)}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10 transition"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                {/* Lead Form */}
                {showLeadForm && !leadSubmitted && (
                  <div className="self-start rounded-3xl bg-white/10 px-4 py-3 text-sm text-white">
                    <h4 className="font-semibold mb-2">Please fill in your details:</h4>
                    <form onSubmit={handleLeadSubmit} className="space-y-2">
                      <input
                        required
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        placeholder="Name *"
                        className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition focus:ring-[#D4AF37]"
                      />
                      <input
                        value={leadForm.companyName}
                        onChange={(e) => setLeadForm({ ...leadForm, companyName: e.target.value })}
                        placeholder="Company Name"
                        className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition focus:ring-[#D4AF37]"
                      />
                      <input
                        required
                        type="email"
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        placeholder="Email *"
                        className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition focus:ring-[#D4AF37]"
                      />
                      <input
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        placeholder="Phone Number"
                        className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition focus:ring-[#D4AF37]"
                      />
                      <input
                        value={leadForm.country}
                        onChange={(e) => setLeadForm({ ...leadForm, country: e.target.value })}
                        placeholder="Country"
                        className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition focus:ring-[#D4AF37]"
                      />
                      <button
                        type="submit"
                        className="w-full rounded-full bg-gradient-to-br from-[#D4AF37] to-[#E8C766] px-4 py-2 text-sm font-semibold text-navy hover:brightness-110 transition"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                )}

                {leadSubmitted && (
                  <div className="self-start rounded-3xl bg-green-500/10 px-4 py-3 text-sm text-white flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    Thank you! Our sales team will contact you shortly.
                  </div>
                )}

                <div ref={scrollRef} />
              </div>

              <form onSubmit={handleSend} className="mt-2 flex items-center gap-3 rounded-3xl bg-[#0F1C35]/90 p-3">
                <label className="cursor-pointer">
                  <input type="file" className="hidden" accept=".pdf,.png,.jpg,.jpeg,.dwg,.dxf" onChange={handleFileUpload} disabled={uploadingFile} />
                  <div className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
                    {uploadingFile ? <Loader2 className="h-4 w-4 text-white/70 animate-spin" /> : <Upload className="h-4 w-4 text-white/70" />}
                  </div>
                </label>
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-3xl border border-white/10 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-[#D4AF37] to-[#E8C766] text-navy transition hover:brightness-110"
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
