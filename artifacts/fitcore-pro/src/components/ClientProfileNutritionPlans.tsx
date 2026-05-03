import { useListMemberNutritionPlans } from '@workspace/api-client-react';

export default function ClientProfileNutritionPlans({ memberId }: { memberId: string }) {
    const { data: plans = [] } = useListMemberNutritionPlans(memberId);
    const active = plans.find((p) => p.active) ?? plans[0];

    if (!active) {
        return (
            <div className="bg-theme-bg-card rounded-xl border border-theme-border p-12 text-center">
                <span className="material-symbols-outlined text-5xl text-theme-text-muted opacity-40 mb-4">restaurant</span>
                <h2 className="text-xl font-black text-theme-text-main mb-2">No Active Nutrition Plan</h2>
                <p className="text-sm text-theme-text-muted">Assign a nutrition plan to track meals and macros.</p>
            </div>
        );
    }

    const protein = active.macros?.protein ?? '0g';
    const carbs = active.macros?.carbs ?? '0g';
    const fats = active.macros?.fats ?? '0g';

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-black tracking-tight text-theme-text-main">{active.name}</h2>
                    <p className="text-sm font-medium text-theme-text-muted mt-1">{active.calories} Calories</p>
                </div>
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
