create table public.content_dna (
  user_id uuid references auth.users not null primary key,
  dna_profile text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Turn on security
alter table public.content_dna enable row level security;

-- Policies so users can only access their own data
create policy "Users can select own DNA" on content_dna
  for select using (auth.uid() = user_id);

create policy "Users can insert own DNA" on content_dna
  for insert with check (auth.uid() = user_id);

create policy "Users can update own DNA" on content_dna
  for update using (auth.uid() = user_id);
