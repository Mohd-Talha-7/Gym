import { useEffect, useState } from 'react';
import {
    useGetSettings,
    useUpdateSettings,
} from '@workspace/api-client-react';

const THEMES = [
    { id: 'default', name: 'Skyline Glass', primary: '#1CA1F1' },
    { id: 'verdant', name: 'Verdant Core', primary: '#16A34A' },
    { id: 'purple', name: 'Amethyst Glow', primary: '#A855F7' },
    { id: 'yellow', name: 'Amber Dawn', primary: '#EAB308' },
    { id: 'dark', name: 'Obsidian Night', primary: '#3B82F6' },
];

export default function SettingsPanel({ tab }: { tab: string }) {
    const { data: settings, isLoading } = useGetSettings();
    const update = useUpdateSettings();

    const [form, setForm] = useState({
        gymName: '', address: '', phone: '', email: '', gst: '',
        invoicePrefix: '', taxPercent: 18, theme: 'default', currency: 'INR', logoUrl: '',
    });
    const [savedAt, setSavedAt] = useState<string | null>(null);

    useEffect(() => {
        if (settings) setForm(settings);
    }, [settings]);

    const save = async (overrides?: Partial<typeof form>) => {
        const payload = { ...form, ...overrides };
        await update.mutateAsync({ data: payload });
        setSavedAt(new Date().toLocaleTimeString());
    };

    if (isLoading) return <div className="p-8 text-on-surface-variant">Loading settings…</div>;

    if (tab === 'Theme') {
        return (
            <div className="bg-theme-bg-card rounded-[20px] p-6 shadow-sm border border-theme-border">
                <h3 className="text-lg font-semibold text-theme-text-main mb-2">Theme Customization</h3>
                <p className="text-xs text-on-surface-variant mb-6">Selected theme persists across sessions.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {THEMES.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => { setForm({ ...form, theme: t.id }); save({ theme: t.id }); }}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${form.theme === t.id ? 'border-theme-primary-main shadow-md' : 'border-theme-border hover:border-theme-primary-main/40'}`}
                        >
                            <div className="w-12 h-12 rounded-full mb-3" style={{ background: t.primary }} />
                            <p className="font-bold text-on-surface text-sm">{t.name}</p>
                            <p className="text-[11px] text-on-surface-variant uppercase tracking-wider mt-1">{t.id}</p>
                            {form.theme === t.id && (
                                <p className="text-[11px] text-theme-primary-main font-bold mt-2">✓ Active</p>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-12 gap-6 pb-20">
            <div className="col-span-12 lg:col-span-8 space-y-6">
                <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm ring-1 ring-black/5">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant mb-6">Gym Branding</h3>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Gym Name</label>
                            <input className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" value={form.gymName} onChange={(e) => setForm({ ...form, gymName: e.target.value })} />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Logo URL</label>
                            <input className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" placeholder="https://…" value={form.logoUrl} onChange={(e) => setForm({ ...form, logoUrl: e.target.value })} />
                        </div>
                    </div>
                </section>
                <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm ring-1 ring-black/5">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant mb-6">Branch Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Address</label>
                            <textarea className="w-full p-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" rows={2} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
                        </div>
                        <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Phone</label>
                            <input className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                        </div>
                        <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Email</label>
                            <input className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                        </div>
                        <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">GST</label>
                            <input className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" value={form.gst} onChange={(e) => setForm({ ...form, gst: e.target.value })} />
                        </div>
                    </div>
                </section>
                <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm ring-1 ring-black/5">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant mb-6">Billing Configuration</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Invoice Prefix</label>
                            <input className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" value={form.invoicePrefix} onChange={(e) => setForm({ ...form, invoicePrefix: e.target.value })} />
                        </div>
                        <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Default Tax Rate (%)</label>
                            <input type="number" className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" value={form.taxPercent} onChange={(e) => setForm({ ...form, taxPercent: Number(e.target.value) })} />
                        </div>
                    </div>
                </section>
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-6">
                <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm ring-1 ring-black/5">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant mb-6">Localization</h3>
                    <div>
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Currency</label>
                        <select className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" value={form.currency} onChange={(e) => setForm({ ...form, currency: e.target.value })}>
                            <option value="INR">INR (₹) - Indian Rupee</option>
                            <option value="USD">USD ($) - US Dollar</option>
                            <option value="EUR">EUR (€) - Euro</option>
                        </select>
                    </div>
                </section>
            </div>
            <div className="col-span-12 mt-6 flex justify-between items-center p-6 bg-surface-container-lowest rounded-xl border border-primary/10 shadow-lg">
                <div>
                    <p className="text-sm font-bold text-on-surface">Save changes to apply gym-wide</p>
                    {savedAt && <p className="text-xs text-on-surface-variant">Last saved at {savedAt}</p>}
                    {update.isError && <p className="text-xs text-red-600 mt-1">Save failed — try again.</p>}
                </div>
                <button
                    onClick={() => save()}
                    disabled={update.isPending}
                    className="px-8 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-primary to-primary-container rounded-lg shadow-md disabled:opacity-50"
                >
                    {update.isPending ? 'Saving…' : 'Save Settings'}
                </button>
            </div>
        </div>
    );
}
