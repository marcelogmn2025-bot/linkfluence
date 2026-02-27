'use client';

import { useState } from 'react';

// Mock data representing a week of scheduled content
const MOCK_CALENDAR_DATA = [
    { id: 1, date: '12 Nov 2026', time: '09:00', type: 'Post', topic: 'Liderança Remota na Prática', status: 'Scheduled' },
    { id: 2, date: '14 Nov 2026', time: '11:30', type: 'Carrossel', topic: '5 Passos para onboarding ideal', status: 'Draft' },
    { id: 3, date: '15 Nov 2026', time: '14:00', type: 'Post', topic: 'Opinião: Por que IA não substitui humanos', status: 'Scheduled' },
    { id: 4, date: '18 Nov 2026', time: '08:45', type: 'Carrossel', topic: 'Métricas de Vaidade vs Dinheiro Real', status: 'Reviewing' },
];

export default function Schedule() {
    const [activeTab, setActiveTab] = useState('Calendar');

    return (
        <main className="main-content" style={{ padding: 0, background: 'var(--background)', display: 'flex', flexDirection: 'column', flex: 1 }}>
            {/* Utilitarian Top Header */}
            <header style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--card-bg)' }}>
                <div>
                    <h1 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--foreground)' }}>Calendário de Agendamentos</h1>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Organize sua timeline, defina o ritmo de publicações e não deixe a audiência esfriar.</p>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <button className="primary-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                        Agendar Nova Publicação
                    </button>
                </div>
            </header>

            {/* Scrollable Work Area */}
            <div style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Simple Tab Control */}
                    <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                        <button
                            onClick={() => setActiveTab('Calendar')}
                            style={{ background: 'none', border: 'none', borderBottom: activeTab === 'Calendar' ? '2px solid var(--primary)' : '2px solid transparent', color: activeTab === 'Calendar' ? 'var(--primary)' : 'var(--text-muted)', padding: '0.5rem 0', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', transition: '0.2s' }}
                        >
                            Visão Mensal (Grid)
                        </button>
                        <button
                            onClick={() => setActiveTab('Queue')}
                            style={{ background: 'none', border: 'none', borderBottom: activeTab === 'Queue' ? '2px solid var(--primary)' : '2px solid transparent', color: activeTab === 'Queue' ? 'var(--primary)' : 'var(--text-muted)', padding: '0.5rem 0', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', transition: '0.2s' }}
                        >
                            Fila de Posts (Lista)
                        </button>
                    </div>

                    <section className="glass-panel" style={{ padding: '1.5rem', minHeight: '400px', background: 'var(--card-bg)' }}>

                        {activeTab === 'Queue' ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 1fr 1fr', padding: '0.75rem 1rem', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                                    <span>Data / Hora</span>
                                    <span>Assunto</span>
                                    <span>Formato</span>
                                    <span>Status</span>
                                </div>

                                {MOCK_CALENDAR_DATA.map((item) => (
                                    <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 1fr 1fr', padding: '1rem', background: 'var(--background)', border: '1px solid var(--border-color)', borderRadius: '8px', alignItems: 'center' }}>
                                        <div>
                                            <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--foreground)' }}>{item.date}</span>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.time}</span>
                                        </div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--foreground)', fontWeight: 500 }}>
                                            {item.topic}
                                        </div>
                                        <div>
                                            <span style={{ display: 'inline-block', padding: '0.2rem 0.5rem', background: 'var(--border-color)', borderRadius: '4px', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                                                {item.type}
                                            </span>
                                        </div>
                                        <div>
                                            <span style={{
                                                display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600,
                                                background: item.status === 'Scheduled' ? 'rgba(34, 197, 94, 0.1)' : item.status === 'Draft' ? 'rgba(234, 179, 8, 0.1)' : 'rgba(11, 165, 236, 0.1)',
                                                color: item.status === 'Scheduled' ? '#22c55e' : item.status === 'Draft' ? '#eab308' : 'var(--primary)'
                                            }}>
                                                {item.status === 'Scheduled' && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }}></span>}
                                                {item.status === 'Draft' && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#eab308' }}></span>}
                                                {item.status === 'Reviewing' && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></span>}
                                                {item.status === 'Scheduled' ? 'Agendado' : item.status === 'Draft' ? 'Rascunho' : 'Em Revisão'}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', padding: '4rem 0' }}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ marginBottom: '1rem', opacity: 0.5 }}><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Sua Visualização de Grade Mensal aparecerá aqui.</p>
                                <p style={{ fontSize: '0.8rem', textAlign: 'center', maxWidth: '400px' }}>Você precisará vincular oficialmente sua conta do LinkedIn através da página de Configurações para ativar as liberações automáticas via API.</p>

                                <button className="secondary-btn" style={{ marginTop: '1.5rem', padding: '0.5rem 1.5rem', fontSize: '0.85rem' }}>
                                    Conectar Conta do LinkedIn
                                </button>
                            </div>
                        )}
                    </section>

                </div>
            </div>
        </main>
    );
}
