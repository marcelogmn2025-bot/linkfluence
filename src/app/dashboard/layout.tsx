'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const supabase = createClient();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
        router.refresh();
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
                    <Link href="/dashboard" className={`sidebar-link ${pathname === '/dashboard' ? 'active' : ''}`} style={{ fontSize: '0.9rem', padding: '0.6rem 0.8rem' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                        Post Generator
                    </Link>
                    <Link href="/dashboard/carousel" className={`sidebar-link ${pathname === '/dashboard/carousel' ? 'active' : ''}`} style={{ fontSize: '0.9rem', padding: '0.6rem 0.8rem' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="M7 7h.01" /><path d="M17 7h.01" /><path d="M7 17h.01" /><path d="M17 17h.01" /></svg>
                        Carrossel Maker
                    </Link>
                    <Link href="/dashboard/engagement" className={`sidebar-link ${pathname === '/dashboard/engagement' ? 'active' : ''}`} style={{ fontSize: '0.9rem', padding: '0.6rem 0.8rem' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        Engajamento AI
                    </Link>

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

            {children}
        </div>
    );
}
