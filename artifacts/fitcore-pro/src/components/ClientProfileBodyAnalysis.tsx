import { useQueryClient } from '@tanstack/react-query';
import {
    useListMemberBodyAnalysis,
    useCreateMemberBodyAnalysis,
    getListMemberBodyAnalysisQueryKey,
} from '@workspace/api-client-react';

function fmtDate(d?: Date | string | null) {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function ClientProfileBodyAnalysis({ memberId }: { memberId: string }) {
    const qc = useQueryClient();
    const { data: scans = [] } = useListMemberBodyAnalysis(memberId);
    const latest = scans[0];
    const previous = scans[1];
    const createScan = useCreateMemberBodyAnalysis({
        mutation: {
            onSuccess: () =>
                qc.invalidateQueries({ queryKey: getListMemberBodyAnalysisQueryKey(memberId) }),
        },
    });

    const handleNewScan = () => {
        const weight = Number(window.prompt('Enter weight (kg):', latest ? String(latest.weightKg) : '70')) || 0;
        const fat = Number(window.prompt('Enter body fat (%):', latest ? String(latest.bodyFatPct) : '15')) || 0;
        const muscle = Number(window.prompt('Enter muscle mass (kg):', latest?.muscleKg ? String(latest.muscleKg) : '35')) || 0;
        if (!weight || !fat) return;
        createScan.mutate({
            id: memberId,
            data: { weightKg: weight, bodyFatPct: fat, muscleKg: muscle, bmi: null, notes: null },
        });
    };

    const delta = (curr?: number | null, prev?: number | null) => {
        if (curr == null || prev == null) return null;
        const d = curr - prev;
        return d;
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-black tracking-tight text-theme-text-main">AI Body Composition</h2>
                <div className="text-sm font-medium text-theme-text-muted">Last Scan: <span className="font-bold text-theme-text-main mt-1">{fmtDate(latest?.recordedAt)}</span></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border p-6 flex flex-col items-center justify-center min-h-[300px]">
                    <span className="material-symbols-outlined text-6xl text-theme-primary-main mb-4 opacity-50">accessibility_new</span>
                    <h3 className="font-bold text-theme-text-main text-center mb-2">3D Body Scan Modeling</h3>
                    <p className="text-sm text-theme-text-muted text-center max-w-xs">Track body composition over time with periodic scans.</p>
                    <button
                        onClick={handleNewScan}
                        disabled={createScan.isPending}
                        className="mt-6 bg-theme-primary-main/10 text-theme-primary-main hover:bg-theme-primary-main hover:text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors border border-theme-primary-main/20 disabled:opacity-50"
                    >
                        {createScan.isPending ? 'Recording…' : 'Record New Scan'}
                    </button>
                </div>

                <div className="space-y-4">
                    <MetricCard label="Weight" value={latest?.weightKg} unit="kg" deltaValue={delta(latest?.weightKg, previous?.weightKg)} betterDirection="down" />
                    <MetricCard label="Body Fat" value={latest?.bodyFatPct} unit="%" deltaValue={delta(latest?.bodyFatPct, previous?.bodyFatPct)} betterDirection="down" />
                    <MetricCard label="Skeletal Muscle Mass" value={latest?.muscleKg ?? null} unit="kg" deltaValue={delta(latest?.muscleKg ?? null, previous?.muscleKg ?? null)} betterDirection="up" />
                </div>
            </div>

            <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border overflow-hidden">
                <div className="p-4 border-b border-theme-border bg-theme-bg-main">
                    <h3 className="font-bold text-theme-text-main text-sm">Scan History ({scans.length})</h3>
                </div>
                <table className="w-full text-left text-sm">
                    <thead className="text-theme-text-muted font-bold text-[10px] uppercase tracking-wider">
                        <tr><th className="px-4 py-3">Date</th><th className="px-4 py-3">Weight</th><th className="px-4 py-3">Body Fat</th><th className="px-4 py-3">Muscle</th><th className="px-4 py-3">BMI</th></tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        {scans.length === 0 && (<tr><td colSpan={5} className="px-4 py-8 text-center text-theme-text-muted">No scans yet.</td></tr>)}
                        {scans.map((s) => (
                            <tr key={s.id}><td className="px-4 py-3 font-bold">{fmtDate(s.recordedAt)}</td><td className="px-4 py-3">{s.weightKg} kg</td><td className="px-4 py-3">{s.bodyFatPct}%</td><td className="px-4 py-3">{s.muscleKg ?? '—'} kg</td><td className="px-4 py-3">{s.bmi ?? '—'}</td></tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function MetricCard({ label, value, unit, deltaValue, betterDirection }: { label: string; value?: number | null; unit: string; deltaValue: number | null; betterDirection: 'up' | 'down' }) {
    let deltaUI = null;
    if (deltaValue != null) {
        const isUp = deltaValue > 0;
        const isGood = (isUp && betterDirection === 'up') || (!isUp && betterDirection === 'down');
        deltaUI = (
            <span className={`text-xs font-bold ${isGood ? 'text-green-600 bg-green-50 border-green-100' : 'text-rose-600 bg-rose-50 border-rose-100'} px-2 py-1 rounded border flex items-center gap-1`}>
                <span className="material-symbols-outlined text-[14px]">{isUp ? 'arrow_upward' : 'arrow_downward'}</span>
                {Math.abs(deltaValue).toFixed(1)} {unit}
            </span>
        );
    }
    return (
        <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border p-5">
            <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-theme-text-muted text-sm uppercase tracking-wider">{label}</span>
                {deltaUI}
            </div>
            <div className="flex items-end gap-2">
                <span className="text-3xl font-black text-theme-text-main">{value ?? '—'}</span>
                <span className="text-theme-text-muted font-bold mb-1">{unit}</span>
            </div>
        </div>
    );
}
