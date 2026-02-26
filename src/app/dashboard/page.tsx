'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Dashboard() {
  const router = useRouter();
  const supabase = createClient();

  // States for the Content DNA form
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Meu Perfil DNA (Padrão)');
  const [thoughts, setThoughts] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedPost, setGeneratedPost] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // States for mapping the DNA
  const [showDnaSetup, setShowDnaSetup] = useState(false);
  const [sampleDnaText, setSampleDnaText] = useState('');
  const [isAnalyzingDna, setIsAnalyzingDna] = useState(false);
  const [dnaResult, setDnaResult] = useState('');

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh();
  };

  const handleAnalyzeDna = async () => {
    if (!sampleDnaText) return;
    setIsAnalyzingDna(true);
    setDnaResult('');

    try {
      const res = await fetch('/api/analyze-dna', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sampleText: sampleDnaText })
      });

      const data = await res.json();

      if (data.error) {
        alert(data.error);
      } else {
        setDnaResult(data.dna);
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar análise.");
    } finally {
      setIsAnalyzingDna(false);
    }
  };

  const handleGeneratePost = async () => {
    if (!topic && !thoughts) return;

    setIsLoading(true);
    setGeneratedPost('');

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, tone, thoughts })
      });

      const data = await res.json();

      if (data.error) {
        alert(data.error);
      } else {
        setGeneratedPost(data.content);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com a IA.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dashboard-layout" style={{ background: 'var(--background)' }}>
      {/* Sidebar - Supergrow Style */}
      <aside className="sidebar" style={{ borderRight: '1px solid var(--border-color)', padding: '1.5rem 1rem', background: 'var(--background)' }}>
        <div style={{ padding: '0 0.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--foreground)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '28px', height: '28px', background: 'var(--primary)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
            </div>
            Linkfluence
          </h2>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', padding: '0.5rem', marginTop: '0.5rem' }}>Ferramentas</p>
          <a href="#" className="sidebar-link active" style={{ fontSize: '0.9rem', padding: '0.6rem 0.8rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
            Post Generator
          </a>
          <a href="#" className="sidebar-link" style={{ fontSize: '0.9rem', padding: '0.6rem 0.8rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M7 7h.01" /><path d="M17 7h.01" /><path d="M7 17h.01" /><path d="M17 17h.01" /></svg>
            Carrossel Maker
          </a>
          <a href="#" className="sidebar-link" style={{ fontSize: '0.9rem', padding: '0.6rem 0.8rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            Ideias & Inspiração
          </a>

          <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', padding: '0.5rem', marginTop: '1.5rem' }}>Gestão</p>
          <a href="#" className="sidebar-link" style={{ fontSize: '0.9rem', padding: '0.6rem 0.8rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
            Agendamentos
          </a>
          <a href="#" className="sidebar-link" style={{ fontSize: '0.9rem', padding: '0.6rem 0.8rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            Minha Equipe
          </a>
        </nav>

        <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          <button onClick={handleLogout} className="sidebar-link" style={{ width: '100%', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '0.9rem', padding: '0.6rem 0.8rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
            Sair da Conta
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content" style={{ padding: 0, background: 'var(--background)', display: 'flex', flexDirection: 'column' }}>

        {/* Utilitarian Top Header */}
        <header style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--card-bg)' }}>
          <div>
            <h1 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--foreground)' }}>Post Generator</h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Crie conteúdo de alta conversão usando seu próprio estilo.</p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button
              className="secondary-btn"
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', background: showDnaSetup ? 'var(--primary-glow)' : 'transparent', borderColor: 'var(--primary)', color: 'var(--primary)' }}
              onClick={() => setShowDnaSetup(!showDnaSetup)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              Configurar Content DNA
            </button>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.85rem' }}>
              U
            </div>
          </div>
        </header>

        {/* Scrollable Work Area */}
        <div style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* DNA Setup Expandable Panel */}
            {showDnaSetup && (
              <section className="glass-panel animate-fade-in" style={{ padding: '1.5rem', background: 'rgba(11, 165, 236, 0.04)', borderColor: 'rgba(11, 165, 236, 0.3)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary)' }}>Sintonizar I.A. com a sua Voz</h2>
                  <button onClick={() => setShowDnaSetup(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.85rem' }}>Fechar ✖</button>
                </div>

                <p style={{ marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  Cole abaixo um de seus melhores posts antigos. Nossa engine fará engenharia reversa para criar a sua &quot;Receita de Estilo&quot; e salvará no banco de dados para os seus próximos posts.
                </p>

                <textarea
                  value={sampleDnaText}
                  onChange={(e) => setSampleDnaText(e.target.value)}
                  className="input-field"
                  style={{ minHeight: '100px', fontSize: '0.875rem' }}
                  placeholder="Ex: Em 2018, eu quase fali a minha primeira agência..."
                />

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                  <button
                    onClick={handleAnalyzeDna}
                    disabled={isAnalyzingDna || !sampleDnaText}
                    className="primary-btn"
                    style={{ opacity: (isAnalyzingDna || !sampleDnaText) ? 0.7 : 1, fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                  >
                    {isAnalyzingDna ? 'Decodificando...' : 'Salvar Meu Perfil'}
                  </button>
                </div>

                {dnaResult && (
                  <div className="animate-fade-in" style={{ marginTop: '1rem', padding: '1rem', background: 'var(--card-bg)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Perfil Salvo no Banco:</h4>
                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '0.85rem', color: 'var(--foreground)', lineHeight: '1.6' }}>{dnaResult}</p>
                  </div>
                )}
              </section>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>

              {/* Generator Form (Left Column) */}
              <section className="glass-panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--foreground)' }}>O que vamos criar?</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>Assunto ou Inspiração</label>
                    <input
                      type="text"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="input-field"
                      style={{ fontSize: '0.875rem', padding: '0.6rem 0.8rem' }}
                      placeholder="Ex: O desafio de escalar times remotos"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>Tom de Voz do Post</label>
                    <select
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="input-field"
                      style={{ appearance: 'none', background: 'var(--card-bg)', fontSize: '0.875rem', padding: '0.6rem 0.8rem', cursor: 'pointer' }}
                    >
                      <option>Meu Perfil DNA (Padrão)</option>
                      <option>Direto ao ponto (Lista curta)</option>
                      <option>Storytelling Pessoal (Emocional)</option>
                      <option>Autoridade Técnica (Dados e Fatos)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>Rascunho de Ideias (Opcional)</label>
                    <textarea
                      value={thoughts}
                      onChange={(e) => setThoughts(e.target.value)}
                      className="input-field"
                      style={{ minHeight: '120px', fontSize: '0.875rem', padding: '0.6rem 0.8rem' }}
                      placeholder="Jogue seus tópicos bagunçados aqui. A IA vai lapidar a copy..."
                    />
                  </div>

                  <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '0.5rem 0' }} />

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                    <button
                      onClick={() => { setTopic(''); setThoughts(''); setGeneratedPost(''); }}
                      className="secondary-btn"
                      style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                    >
                      Limpar
                    </button>
                    <button
                      onClick={handleGeneratePost}
                      disabled={isLoading || (!topic && !thoughts)}
                      className="primary-btn"
                      style={{ opacity: (isLoading || (!topic && !thoughts)) ? 0.7 : 1, width: '100%', fontSize: '0.9rem', padding: '0.6rem 1rem' }}
                    >
                      {isLoading ? 'I.A. Escrevendo...' : 'Gerar Post com IA'}
                      {!isLoading && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>}
                    </button>
                  </div>
                </div>
              </section>

              {/* Preview Form (Right Column) */}
              <section className="glass-panel" style={{ padding: 0, height: '100%', minHeight: '500px', display: 'flex', flexDirection: 'column', background: 'var(--background)' }}>
                <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)', background: 'var(--card-bg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--foreground)' }}>Preview do LinkedIn</h3>
                  {generatedPost && (
                    <button
                      className="secondary-btn"
                      style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', transition: '0.3s' }}
                      onClick={() => {
                        navigator.clipboard.writeText(generatedPost);
                        setIsCopied(true);
                        setTimeout(() => setIsCopied(false), 2000);
                      }}
                    >
                      {isCopied ? '✔ Copiado!' : 'Copiar Texto'}
                    </button>
                  )}
                </div>

                <div style={{ padding: '1.5rem', flex: 1, backgroundColor: 'var(--card-bg)' }}>
                  {!generatedPost && !isLoading && (
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center' }}>
                      <p>Seu post aparecrá aqui.<br />Preencha os dados e clique em Gerar.</p>
                    </div>
                  )}

                  {isLoading && (
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>
                      <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
                        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                        <line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                      </svg>
                      A engine está processando...
                    </div>
                  )}

                  {generatedPost && !isLoading && (
                    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>

                      {/* Fake LinkedIn Header Profile */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--border-color)' }}></div>
                        <div>
                          <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--foreground)', margin: 0 }}>Você (Autor)</p>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>Especialista | Agora mesmo</p>
                        </div>
                      </div>

                      <div style={{ whiteSpace: 'pre-wrap', fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--foreground)' }}>
                        {generatedPost}
                      </div>

                      <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                        <button className="primary-btn" style={{ flex: 1, padding: '0.5rem', fontSize: '0.85rem' }}>Agendar Post</button>
                        <button className="secondary-btn" style={{ flex: 1, padding: '0.5rem', fontSize: '0.85rem' }}>Aprovação da Equipe</button>
                      </div>
                    </div>
                  )}
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
