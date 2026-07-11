import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { submitRFQ } from '../lib/data';

interface Props {
  productName?: string;
  category?: string;
  compact?: boolean;
}

export default function InquiryForm({ productName, category, compact }: Props) {
  const [form, setForm] = useState({
    company_name: '', contact_name: '', email: '', phone: '', country: 'India',
    category: category || '', product: productName || '', quantity: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitRFQ(form);
      setStatus('success');
      setForm({ company_name: '', contact_name: '', email: '', phone: '', country: 'India', category: category || '', product: productName || '', quantity: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lux bg-green-500/10 p-8 text-center">
        <CheckCircle className="mx-auto mb-3 h-12 w-12 text-green-400" />
        <h3 className="font-heading text-lg font-bold text-white">Inquiry Submitted!</h3>
        <p className="mt-2 font-sub text-sm text-white/60">Our team will contact you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="mt-4 rounded-full bg-white/10 px-5 py-2 font-sub text-xs text-white transition hover:bg-white/20">Submit Another</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      {!compact && <h3 className="font-heading text-xl font-bold text-white">Request a Quote</h3>}
      <div className={compact ? '' : 'grid grid-cols-2 gap-3'}>
        <input required value={form.contact_name} onChange={(e) => set('contact_name', e.target.value)} placeholder="Your Name *" className="rounded-xl bg-white/5 px-4 py-2.5 font-sub text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition focus:ring-gold" />
        <input required type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="Email *" className="rounded-xl bg-white/5 px-4 py-2.5 font-sub text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition focus:ring-gold" />
        <input value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="Phone" className="rounded-xl bg-white/5 px-4 py-2.5 font-sub text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition focus:ring-gold" />
        <input value={form.company_name} onChange={(e) => set('company_name', e.target.value)} placeholder="Company" className="rounded-xl bg-white/5 px-4 py-2.5 font-sub text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition focus:ring-gold" />
        <input value={form.product} onChange={(e) => set('product', e.target.value)} placeholder="Product" className="rounded-xl bg-white/5 px-4 py-2.5 font-sub text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition focus:ring-gold" />
        <input value={form.quantity} onChange={(e) => set('quantity', e.target.value)} placeholder="Quantity" className="rounded-xl bg-white/5 px-4 py-2.5 font-sub text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition focus:ring-gold" />
      </div>
      <textarea value={form.message} onChange={(e) => set('message', e.target.value)} placeholder="Message" rows={compact ? 2 : 3} className="w-full rounded-xl bg-white/5 px-4 py-2.5 font-sub text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition focus:ring-gold" />
      <button type="submit" disabled={status === 'loading'} className="btn-gold flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-sub text-sm">
        {status === 'loading' ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Send className="h-4 w-4" /> Submit Inquiry</>}
      </button>
      {status === 'error' && <p className="text-center font-sub text-xs text-red-400">Something went wrong. Please try again.</p>}
    </form>
  );
}
