'use client';

import { useState } from 'react';

export default function Settings() {
    const [activeTab, setActiveTab] = useState('Account');

    return (
        <main className="main-content" style={{ padding: 0, background: 'var(--background)', display: 'flex', flexDirection: 'column', flex: 1 }}>
            {/* Utilitarian Top Header */}
            <header style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--card-bg)' }}>
                <div>
                    <h1 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--foreground)' }}>Configurações do Sistema</h1>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Gerencie sua conta, integrações de redes sociais e pagamentos em um só lugar.</p>
                </div>
            </header>

            {/* Scrollable Work Area */}
            <div style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>

                    {/* Left Column: Navigation inside Settings */}
                    <div style={{ width: '240px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <button
                            onClick={() => setActiveTab('Account')}
                            style={{ background: activeTab === 'Account' ? 'var(--primary-glow)' : 'transparent', color: activeTab === 'Account' ? 'var(--primary)' : 'var(--text-muted)', border: 'none', padding: '0.75rem 1rem', borderRadius: '8px', textAlign: 'left', fontWeight: activeTab === 'Account' ? 600 : 500, fontSize: '0.9rem', cursor: 'pointer', transition: '0.2s', display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            Minha Conta
                        </button>
                        <button
                            onClick={() => setActiveTab('Integrations')}
                            style={{ background: activeTab === 'Integrations' ? 'var(--primary-glow)' : 'transparent', color: activeTab === 'Integrations' ? 'var(--primary)' : 'var(--text-muted)', border: 'none', padding: '0.75rem 1rem', borderRadius: '8px', textAlign: 'left', fontWeight: activeTab === 'Integrations' ? 600 : 500, fontSize: '0.9rem', cursor: 'pointer', transition: '0.2s', display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="8" x2="8" y1="12" y2="21" /><line x1="16" x2="16" y1="21" y2="12" /><line x1="3" x2="21" y1="12" y2="12" /></svg>
                            Conexões e APIs
                        </button>
                        <button
                            onClick={() => setActiveTab('Team')}
                            style={{ background: activeTab === 'Team' ? 'var(--primary-glow)' : 'transparent', color: activeTab === 'Team' ? 'var(--primary)' : 'var(--text-muted)', border: 'none', padding: '0.75rem 1rem', borderRadius: '8px', textAlign: 'left', fontWeight: activeTab === 'Team' ? 600 : 500, fontSize: '0.9rem', cursor: 'pointer', transition: '0.2s', display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            Limites da Equipe
                        </button>
                        <button
                            onClick={() => setActiveTab('Billing')}
                            style={{ background: activeTab === 'Billing' ? 'var(--primary-glow)' : 'transparent', color: activeTab === 'Billing' ? 'var(--primary)' : 'var(--text-muted)', border: 'none', padding: '0.75rem 1rem', borderRadius: '8px', textAlign: 'left', fontWeight: activeTab === 'Billing' ? 600 : 500, fontSize: '0.9rem', cursor: 'pointer', transition: '0.2s', display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="5" rx="2" ry="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                            Meu Plano e Fatura
                        </button>
                    </div>

                    {/* Right Column: Dynamic View */}
                    <section className="glass-panel" style={{ flex: 1, padding: '2rem', background: 'var(--card-bg)' }}>

                        {activeTab === 'Account' && (
                            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.5rem' }}>Perfil Pessoal</h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Atualize sua foto de perfil e detalhes profissionais para a plataforma.</p>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--foreground)' }}>
                                            U
                                        </div>
                                        <div style={{ display: 'flex', gap: '1rem' }}>
                                            <button className="primary-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Fazer Upload</button>
                                            <button className="secondary-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Remover</button>
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>Nome Completo</label>
                                            <input type="text" className="input-field" defaultValue="Usuário Administrador" />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>E-mail</label>
                                            <input type="email" className="input-field" defaultValue="usuario@empresateste.com" readOnly style={{ opacity: 0.7 }} />
                                        </div>
                                        <div style={{ gridColumn: '1 / -1' }}>
                                            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>URL do Perfil do LinkedIn</label>
                                            <input type="text" className="input-field" placeholder="https://linkedin.com/in/seuperfil" />
                                        </div>
                                    </div>
                                </div>

                                <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)' }} />

                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <button className="primary-btn" style={{ padding: '0.6rem 1.5rem' }}>Salvar Alterações</button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Integrations' && (
                            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.5rem' }}>Conexão com LinkedIn</h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                        Para que a Linkfluence possa agendar posts e coletar Analytics de crescimento automaticamente, precisamos que você vincule seu perfil oficialmente.
                                    </p>

                                    <div style={{ padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: '#0a66c2', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                            </div>
                                            <div>
                                                <p style={{ margin: 0, fontWeight: 600, fontSize: '0.95rem' }}>LinkedIn Auth (Oficial)</p>
                                                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>Status: <span style={{ color: '#ef4444' }}>Não conectado</span></p>
                                            </div>
                                        </div>
                                        <button className="primary-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Conectar Perfil Agora</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {(activeTab === 'Team' || activeTab === 'Billing') && (
                            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 0', color: 'var(--text-muted)', textAlign: 'center' }}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ marginBottom: '1rem', opacity: 0.5 }}><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.5rem' }}>Em Construção</h3>
                                <p style={{ fontSize: '0.85rem', maxWidth: '300px' }}>Você está usando atualmente um Plano Vitalício de Desenvolvedor. Gestão de faturas será ativada aqui em breve.</p>
                            </div>
                        )}

                    </section>

                </div>
            </div>
        </main>
    );
}
