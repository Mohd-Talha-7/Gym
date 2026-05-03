import { useState } from 'react';
import { useGetMember } from '@workspace/api-client-react';
import ClientProfileOverview from './ClientProfileOverview';
import ClientProfileBills from './ClientProfileBills';
import ClientProfileWorkoutPlans from './ClientProfileWorkoutPlans';
import ClientProfileNutritionPlans from './ClientProfileNutritionPlans';
import ClientProfileBodyAnalysis from './ClientProfileBodyAnalysis';
import ClientProfileAttendance from './ClientProfileAttendance';
import ClientProfileNotes from './ClientProfileNotes';
import ClientProfileDocuments from './ClientProfileDocuments';

function fmtDate(d?: Date | string | null) {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function ClientProfile({ onNavigate, memberId }: { onNavigate: (path: string) => void; memberId: string }) {
    const [activeTab, setActiveTab] = useState('overview');
    const { data: member, isLoading } = useGetMember(memberId);

    if (isLoading) {
        return <div className="flex-1 p-8 text-theme-text-muted">Loading member…</div>;
    }
    if (!member) {
        return (
            <div className="flex-1 p-8">
                <button onClick={() => onNavigate('members')} className="text-theme-primary-main font-bold">← Back to Members</button>
                <p className="mt-4 text-theme-text-muted">Member not found.</p>
            </div>
        );
    }

    const isActive = member.status === 'active';

    return (
        <div className="flex-1 overflow-x-hidden p-2 md:p-6 pb-24 h-full overflow-y-auto w-full max-w-[1920px] mx-auto custom-scrollbar">
            <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-theme-text-muted mt-2">
                <button onClick={() => onNavigate('members')} className="hover:text-theme-primary-main transition-colors">Clients</button>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-theme-text-main">{member.name}</span>
            </div>

            {/* Hero */}
            <section className="bg-theme-bg-card rounded-xl p-8 mb-6 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm border border-theme-border">
                <div className="relative shrink-0">
                    <img className="w-32 h-32 rounded-full object-cover border-4 border-theme-bg-main shadow-sm" alt={member.name} src={member.avatarUrl} />
                    <div className={`absolute bottom-1 right-1 ${isActive ? 'bg-green-100 text-green-700' : 'bg-rose-100 text-rose-700'} p-1 rounded-full border-2 border-theme-bg-card flex items-center justify-center shadow-sm`}>
                        <span className="material-symbols-outlined text-[14px] font-bold">{isActive ? 'check_circle' : 'cancel'}</span>
                    </div>
                </div>

                <div className="flex-grow text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                        <h1 className="text-3xl font-black tracking-tight text-theme-text-main">{member.name}</h1>
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <span className={`${isActive ? 'bg-green-100 text-green-700 border-green-200' : 'bg-rose-100 text-rose-700 border-rose-200'} px-3 py-1 rounded-full text-xs font-bold border capitalize`}>{member.status}</span>
                            {member.balanceDue > 0 && (
                                <span className="bg-amber-100 text-amber-700 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold">DUE ₹{(member.balanceDue / 100).toLocaleString('en-IN')}</span>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-y-4 gap-x-6 mt-6 text-sm text-theme-text-muted font-medium">
                        <div className="flex items-center gap-2 justify-center md:justify-start bg-theme-bg-main p-2 rounded-lg border border-theme-border/50">
                            <span className="material-symbols-outlined text-theme-text-muted text-[18px]">id_card</span>
                            <span className="text-theme-text-main font-bold">{member.id}</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start bg-theme-bg-main p-2 rounded-lg border border-theme-border/50">
                            <span className="material-symbols-outlined text-theme-text-muted text-[18px]">call</span>
                            <span className="text-theme-text-main font-bold">{member.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start bg-theme-bg-main p-2 rounded-lg border border-theme-border/50">
                            <span className="material-symbols-outlined text-theme-text-muted text-[18px]">mail</span>
                            <span className="text-theme-text-main font-bold truncate">{member.email ?? '—'}</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start bg-theme-bg-main p-2 rounded-lg border border-theme-border/50">
                            <span className="material-symbols-outlined text-theme-text-muted text-[18px]">card_membership</span>
                            <span className="text-theme-text-main font-bold">{member.plan}</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start bg-theme-bg-main p-2 rounded-lg border border-theme-border/50 xl:col-span-1">
                            <span className="material-symbols-outlined text-theme-text-muted text-[18px]">event_busy</span>
                            <span className="text-theme-text-main font-bold">{fmtDate(member.expiryDate)}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tab Bar */}
            <div className="flex border-b border-theme-border mb-8 overflow-x-auto custom-scrollbar">
                {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'bills', label: 'Bills' },
                    { id: 'workout_plans', label: 'Workout Plans' },
                    { id: 'nutrition_plans', label: 'Nutrition Plans' },
                    { id: 'body_analysis', label: 'AI Body Analysis' },
                    { id: 'attendance', label: 'Attendance' },
                    { id: 'documents', label: 'Documents' },
                    { id: 'notes', label: 'Notes' },
                ].map((t) => (
                    <button key={t.id} onClick={() => setActiveTab(t.id)} className={`px-6 py-4 text-sm whitespace-nowrap transition-colors ${activeTab === t.id ? 'font-bold border-b-[3px] border-theme-primary-main text-theme-primary-main bg-theme-primary-light' : 'font-medium text-theme-text-muted hover:text-theme-text-main hover:bg-theme-bg-main'}`}>{t.label}</button>
                ))}
            </div>

            {activeTab === 'overview' && <ClientProfileOverview memberId={memberId} />}
            {activeTab === 'bills' && <ClientProfileBills memberId={memberId} />}
            {activeTab === 'workout_plans' && <ClientProfileWorkoutPlans memberId={memberId} />}
            {activeTab === 'nutrition_plans' && <ClientProfileNutritionPlans memberId={memberId} />}
            {activeTab === 'body_analysis' && <ClientProfileBodyAnalysis memberId={memberId} />}
            {activeTab === 'attendance' && <ClientProfileAttendance memberId={memberId} />}
            {activeTab === 'documents' && <ClientProfileDocuments memberId={memberId} />}
            {activeTab === 'notes' && <ClientProfileNotes memberId={memberId} />}
        </div>
    );
}
