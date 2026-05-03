import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useListMemberNutritionPlans,
    useCreateMemberNutritionPlan,
    getListMemberNutritionPlansQueryKey,
} from '@workspace/api-client-react';

const TEMPLATE_MEALS = [
    { name: 'Breakfast', time: '7:30 AM', kcal: 500, description: 'Oats with banana, peanut butter and 3 egg whites' },
    { name: 'Mid-Morning', time: '11:00 AM', kcal: 250, description: 'Greek yogurt with mixed berries' },
    { name: 'Lunch', time: '1:30 PM', kcal: 700, description: 'Grilled chicken, brown rice, mixed vegetables' },
    { name: 'Pre-Workout', time: '5:00 PM', kcal: 200, description: 'Apple with almond butter and black coffee' },
    { name: 'Dinner', time: '8:30 PM', kcal: 600, description: 'Grilled fish, quinoa, sautéed greens' },
];

export default function ClientProfileNutritionPlans({ memberId }: { memberId: string }) {
    const qc = useQueryClient();
    const { data: plans = [] } = useListMemberNutritionPlans(memberId);
    const create = useCreateMemberNutritionPlan({
        mutation: { onSuccess: () => qc.invalidateQueries({ queryKey: getListMemberNutritionPlansQueryKey(memberId) }) },
    });
    const [showAdd, setShowAdd] = useState(false);
    const [form, setForm] = useState({ name: '', calories: '2250', protein: '180g', carbs: '220g', fats: '70g' });
    const active = plans.find((p) => p.active) ?? plans[0];

    const submit = () => {
        create.mutate(
            {
                id: memberId,
                data: {
                    name: form.name,
                    calories: Number(form.calories),
                    active: true,
                    macros: { protein: form.protein, carbs: form.carbs, fats: form.fats },
                    meals: TEMPLATE_MEALS,
                },
            },
            { onSuccess: () => { setShowAdd(false); setForm({ name: '', calories: '2250', protein: '180g', carbs: '220g', fats: '70g' }); } },
        );
    };

    const AddButton = (
        <button onClick={() => setShowAdd(true)} className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-4 py-2 rounded-lg text-sm font-semibold">
            + New Plan
        </button>
    );

    const AddModal = showAdd ? (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowAdd(false)}>
            <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-3" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-lg font-bold">New Nutrition Plan</h2>
                <p className="text-xs text-theme-text-muted">A 5-meal template will be created. Refine meals & macros later.</p>
                <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Plan name (e.g. Lean Bulk)" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Daily calories" type="number" value={form.calories} onChange={(e) => setForm({ ...form, calories: e.target.value })} />
                <div className="grid grid-cols-3 gap-2">
                    <input className="px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Protein" value={form.protein} onChange={(e) => setForm({ ...form, protein: e.target.value })} />
                    <input className="px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Carbs" value={form.carbs} onChange={(e) => setForm({ ...form, carbs: e.target.value })} />
                    <input className="px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Fats" value={form.fats} onChange={(e) => setForm({ ...form, fats: e.target.value })} />
                </div>
                <div className="flex gap-2 justify-end pt-2">
                    <button className="px-4 py-2 text-sm" onClick={() => setShowAdd(false)}>Cancel</button>
                    <button disabled={create.isPending || !form.name} onClick={submit} className="bg-theme-primary-main text-white px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-50">
                        {create.isPending ? 'Saving…' : 'Create Plan'}
                    </button>
                </div>
            </div>
        </div>
    ) : null;

    if (!active) {
        return (
            <div className="space-y-4">
                {AddModal}
                <div className="flex justify-end">{AddButton}</div>
                <div className="bg-theme-bg-card rounded-xl border border-theme-border p-12 text-center">
                    <span className="material-symbols-outlined text-5xl text-theme-text-muted opacity-40 mb-4">restaurant</span>
                    <h2 className="text-xl font-black text-theme-text-main mb-2">No Active Nutrition Plan</h2>
                    <p className="text-sm text-theme-text-muted">Click "+ New Plan" to assign a meal program.</p>
                </div>
            </div>
        );
    }

    const protein = active.macros?.protein ?? '0g';
    const carbs = active.macros?.carbs ?? '0g';
    const fats = active.macros?.fats ?? '0g';

    return (
        <div className="space-y-6">
            {AddModal}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-black tracking-tight text-theme-text-main">{active.name}</h2>
                    <p className="text-sm font-medium text-theme-text-muted mt-1">{active.calories} Calories</p>
                </div>
                {AddButton}
            </div>

            <div className="flex gap-4 mb-2">
                <Macro label="Calories" value={`${active.calories ?? 0}`} sub="kcal/day" color="text-theme-text-main" />
                <Macro label="Protein" value={protein} sub="" color="text-blue-500" />
                <Macro label="Carbs" value={carbs} sub="" color="text-orange-500" />
                <Macro label="Fats" value={fats} sub="" color="text-yellow-500" />
            </div>

            <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border overflow-hidden">
                <div className="p-4 border-b border-theme-border bg-theme-bg-main">
                    <h3 className="font-bold text-theme-text-main">Daily Meal Breakdown</h3>
                </div>
                <div className="divide-y divide-theme-border">
                    {active.meals.length === 0 && <div className="p-8 text-center text-theme-text-muted text-sm">No meals defined.</div>}
                    {active.meals.map((meal, i) => (
                        <div key={i} className="p-4 flex items-start gap-4 hover:bg-theme-bg-main transition-colors">
                            <div className="bg-orange-100 text-orange-600 p-2 rounded-lg mt-1">
                                <span className="material-symbols-outlined">restaurant_menu</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="font-bold text-theme-text-main text-sm">{meal.name} {meal.time ? `(${meal.time})` : ''}</h4>
                                    {meal.kcal != null && <span className="text-xs font-bold text-theme-text-muted bg-theme-bg-main px-2 py-1 rounded">{meal.kcal} kcal</span>}
                                </div>
                                <p className="text-sm text-theme-text-main font-medium">{meal.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Macro({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
    return (
        <div className="flex-1 bg-theme-bg-card border border-theme-border rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
            <span className="text-xs uppercase font-bold text-theme-text-muted mb-1">{label}</span>
            <span className={`text-2xl font-black ${color}`}>{value}</span>
            <span className="text-[10px] text-theme-text-muted font-medium mt-1">{sub}</span>
        </div>
    );
}
