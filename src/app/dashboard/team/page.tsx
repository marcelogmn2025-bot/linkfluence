'use client';

import { useState } from 'react';

// Mock data representing content awaiting team approval
const PENDING_APPROVALS = [
    { id: 101, author: 'Carolina Marques', role: 'Head de Marketing', date: 'Hoje', time: '10:45', type: 'Carrossel', topic: 'Como estruturamos nossa máquina de vendas em 2026', status: 'Awaiting', contentPreview: 'No ano passado, nossa equipe de vendas bateu cabeça. Tentamos todas as ferramentas do mercado, mas o problema não era software. Era processo. Aqui estão os 5 pilares que...' },
    { id: 102, author: 'Felipe Costa', role: 'Engenheiro de Software', date: 'Ontem', time: '16:20', type: 'Post', topic: 'O futuro do desenvolvimento Front-end', status: 'Revisions Requested', contentPreview: 'Acredito que os frameworks Javascript estão chegando a um ponto de saturação. Tenho visto muitas empresas voltando para abordagens mais simples...' },
];

export default function TeamApprovals() {
    const [activeTab, setActiveTab] = useState('Pending');
    const [selectedPost, setSelectedPost] = useState<number | null>(null);

    return (
        <main className="main-content" style={{ padding: 0, background: 'var(--background)', display: 'flex', flexDirection: 'column', flex: 1 }}>
            {/* Utilitarian Top Header */}
            <header style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--card-bg)' }}>
                <div>
                    <h1 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--foreground)' }}>Aprovações da Equipe (Employee Advocacy)</h1>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Revise, edite e aprove os conteúdos criados pelo seu time antes que cheguem ao LinkedIn.</p>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <button className="secondary-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" /></svg>
                        Convidar Membro
                    </button>
                </div>
            </header>

            {/* Scrollable Work Area */}
            <div style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>

                    {/* Left Column: List of items */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '450px' }}>
                        <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                            <button
                                onClick={() => setActiveTab('Pending')}
                                style={{ background: 'none', border: 'none', borderBottom: activeTab === 'Pending' ? '2px solid var(--primary)' : '2px solid transparent', color: activeTab === 'Pending' ? 'var(--primary)' : 'var(--text-muted)', padding: '0.5rem 0', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', transition: '0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                            >
                                Caixa de Entrada
                                <span style={{ background: 'var(--primary)', color: 'white', fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: '10px' }}>2</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('Approved')}
                                style={{ background: 'none', border: 'none', borderBottom: activeTab === 'Approved' ? '2px solid var(--primary)' : '2px solid transparent', color: activeTab === 'Approved' ? 'var(--primary)' : 'var(--text-muted)', padding: '0.5rem 0', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', transition: '0.2s' }}
                            >
                                Histórico (Aprovados)
                            </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {PENDING_APPROVALS.map((post) => (
                                <div
                                    key={post.id}
                                    onClick={() => setSelectedPost(post.id)}
                                    style={{
                                        padding: '1.25rem',
                                        background: 'var(--card-bg)',
                                        border: selectedPost === post.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {selectedPost === post.id && (
                                        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--primary)' }}></div>
                                    )}

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem', color: 'var(--foreground)' }}>
                                                {post.author.charAt(0)}
                                            </div>
                                            <div>
                                                <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600, color: 'var(--foreground)' }}>{post.author}</p>
                                                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>{post.role}</p>
                                            </div>
                                        </div>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>{post.date}</span>
                                    </div>

                                    <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.4rem' }}>{post.topic}</h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        {post.contentPreview}
                                    </p>

                                    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', background: 'rgba(11, 165, 236, 0.1)', color: 'var(--primary)', borderRadius: '4px', fontWeight: 600 }}>{post.type}</span>
                                        <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', background: post.status === 'Awaiting' ? 'rgba(234, 179, 8, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: post.status === 'Awaiting' ? '#eab308' : '#ef4444', borderRadius: '4px', fontWeight: 600 }}>
                                            {post.status === 'Awaiting' ? 'Aguardando Aprovação' : 'Ajustes Pedidos'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Review Workspace */}
                    <section className="glass-panel" style={{ flex: 2, padding: 0, minHeight: '600px', display: 'flex', flexDirection: 'column', background: 'var(--background)' }}>
                        {!selectedPost ? (
                            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ marginBottom: '1rem', opacity: 0.5 }}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
                                <p style={{ fontSize: '0.9rem' }}>Selecione um rascunho na lista para avaliá-lo.</p>
                            </div>
                        ) : (
                            <>
                                {/* Review Header */}
                                <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-color)', background: 'var(--card-bg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.9rem', color: 'white' }}>
                                            C
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--foreground)', margin: 0 }}>Carolina Marques</p>
                                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>Enviado para revisão Hoje às 10:45</p>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <button className="secondary-btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', color: '#ef4444', borderColor: '#ef4444' }}>Recusar</button>
                                        <button className="primary-btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', background: '#22c55e', color: 'white' }}>Aprovar e Agendar</button>
                                    </div>
                                </div>

                                {/* Editor Area */}
                                <div style={{ display: 'flex', flex: 1 }}>
                                    {/* Text Editor */}
                                    <div style={{ flex: 1, padding: '1.5rem', borderRight: '1px solid var(--border-color)' }}>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Edição em Tempo Real</label>
                                        <textarea
                                            className="input-field"
                                            style={{ width: '100%', height: '80%', minHeight: '300px', fontSize: '0.9rem', background: 'transparent', border: 'none', resize: 'none', padding: 0 }}
                                            defaultValue={'No ano passado, nossa equipe de vendas bateu cabeça. Tentamos todas as ferramentas do mercado, mas o problema não era software. Era processo. Aqui estão os 5 pilares que...\n\n(Contexto completo pendente de aprovação gerado via IA)'}
                                        />
                                    </div>

                                    {/* Feedback Chat */}
                                    <div style={{ width: '280px', background: 'var(--card-bg)', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                                            <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--foreground)', margin: 0 }}>Feedback ao Autor</h4>
                                        </div>

                                        <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto' }}>
                                            <div style={{ background: 'var(--background)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                                                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.2rem' }}>Você</p>
                                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Carolina, esse gancho ficou excelente! Só ajusta o segundo parágrafo para não expor os números daquele trimestre.</p>
                                            </div>
                                        </div>

                                        <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)' }}>
                                            <textarea
                                                className="input-field"
                                                placeholder="Deixe um comentário..."
                                                style={{ width: '100%', minHeight: '60px', fontSize: '0.8rem', marginBottom: '0.5rem' }}
                                            />
                                            <button className="primary-btn" style={{ width: '100%', fontSize: '0.8rem', padding: '0.4rem' }}>Enviar Nota</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </section>

                </div>
            </div>
        </main>
    );
}
