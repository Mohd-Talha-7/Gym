import { useListSportsPackages } from '@workspace/api-client-react';
import { formatINR } from '@/lib/format';

export default function SportsPackages() {
    const { data: packages = [], isLoading } = useListSportsPackages();

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-20">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Sports Packages</h1>
                    <p className="text-sm text-theme-text-muted">Define coaching packages for each sport.</p>
                </div>
                <button className="bg-theme-primary-main text-white px-5 py-2.5 rounded-xl text-sm font-semibold">+ New Package</button>
            </div>

            {isLoading && <div className="text-center py-12 text-theme-text-muted">Loading packages…</div>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {packages.map((p) => (
                    <div key={p.id} className="bg-theme-bg-card border border-theme-border rounded-2xl p-5 shadow-sm">
                        <div className="text-[10px] uppercase tracking-wide text-theme-text-muted mb-1">{p.sport}</div>
                        <h3 className="text-lg font-bold text-theme-text-main mb-3">{p.name}</h3>
                        <div className="space-y-2 text-sm text-theme-text-muted mb-4">
                            <div className="flex justify-between"><span>Sessions</span><span className="text-theme-text-main font-semibold">{p.sessions}</span></div>
                            <div className="flex justify-between"><span>Duration</span><span className="text-theme-text-main font-semibold">{p.durationDays} days</span></div>
                            <div className="flex justify-between"><span>Price</span><span className="text-theme-primary-main font-bold">{formatINR(p.price)}</span></div>
                        </div>
                        <button className="w-full text-sm font-semibold text-theme-primary-main hover:underline">Edit Package</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
