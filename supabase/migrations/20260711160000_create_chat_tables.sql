
-- Create chat_conversations table
CREATE TABLE IF NOT EXISTS chat_conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  user_name TEXT,
  company_name TEXT,
  email TEXT,
  phone TEXT,
  country TEXT,
  ip_address TEXT,
  is_resolved BOOLEAN DEFAULT FALSE
);

-- Create chat_messages table
CREATE TABLE IF NOT EXISTS chat_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID REFERENCES chat_conversations(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'agent')),
  text TEXT NOT NULL,
  file_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Allow public insert (we'll secure later, but for now let's allow insert for now
CREATE POLICY "Allow public insert on chat_conversations" ON chat_conversations FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Allow public insert on chat_messages" ON chat_messages FOR INSERT TO public WITH CHECK (true);
