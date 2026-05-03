import React from 'react';

export default function ClientProfileNutritionPlans() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-black tracking-tight text-theme-text-main">Active Nutrition Plan</h2>
                    <p className="text-sm font-medium text-theme-text-muted mt-1">Lean Bulking Phase - 2,800 Calories</p>
                </div>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">restaurant_menu</span>
                    Edit Macros
                </button>
            </div>

            {/* Macros Overview */}
            <div className="flex gap-4 mb-2">
                <div className="flex-1 bg-theme-bg-card border border-theme-border rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-xs uppercase font-bold text-theme-text-muted mb-1">Calories</span>
                    <span className="text-2xl font-black text-theme-text-main">2,800</span>
                    <span className="text-[10px] text-theme-text-muted font-medium mt-1">kcal/day</span>
                </div>
                <div className="flex-1 bg-theme-bg-card border border-theme-border rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-xs uppercase font-bold text-theme-text-muted mb-1">Protein</span>
                    <span className="text-2xl font-black text-blue-500">180g</span>
                    <span className="text-[10px] text-theme-text-muted font-medium mt-1">26%</span>
                </div>
                <div className="flex-1 bg-theme-bg-card border border-theme-border rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-xs uppercase font-bold text-theme-text-muted mb-1">Carbs</span>
                    <span className="text-2xl font-black text-orange-500">350g</span>
                    <span className="text-[10px] text-theme-text-muted font-medium mt-1">50%</span>
                </div>
                <div className="flex-1 bg-theme-bg-card border border-theme-border rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-xs uppercase font-bold text-theme-text-muted mb-1">Fats</span>
                    <span className="text-2xl font-black text-yellow-500">75g</span>
                    <span className="text-[10px] text-theme-text-muted font-medium mt-1">24%</span>
                </div>
            </div>

            <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border overflow-hidden">
                <div className="p-4 border-b border-theme-border bg-theme-bg-main">
                    <h3 className="font-bold text-theme-text-main">Daily Meal Breakdown</h3>
                </div>
                <div className="divide-y divide-theme-border">
                    <div className="p-4 flex items-start gap-4 hover:bg-theme-bg-main transition-colors">
                        <div className="bg-orange-100 text-orange-600 p-2 rounded-lg mt-1">
                            <span className="material-symbols-outlined">wb_twilight</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="font-bold text-theme-text-main text-sm">Breakfast (8:00 AM)</h4>
                                <span className="text-xs font-bold text-theme-text-muted bg-theme-bg-main px-2 py-1 rounded">650 kcal</span>
                            </div>
                            <p className="text-sm text-theme-text-main font-medium">Oatmeal with whey protein, peanut butter, and sliced banana. 1 cup black coffee.</p>
                        </div>
                    </div>
                    <div className="p-4 flex items-start gap-4 hover:bg-theme-bg-main transition-colors">
                        <div className="bg-yellow-100 text-yellow-600 p-2 rounded-lg mt-1">
                            <span className="material-symbols-outlined">light_mode</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="font-bold text-theme-text-main text-sm">Lunch (1:00 PM)</h4>
                                <span className="text-xs font-bold text-theme-text-muted bg-theme-bg-main px-2 py-1 rounded">850 kcal</span>
                            </div>
                            <p className="text-sm text-theme-text-main font-medium">Grilled chicken breast (200g), sweet potato (1 medium), and roasted asparagus.</p>
                        </div>
                    </div>
                    <div className="p-4 flex items-start gap-4 hover:bg-theme-bg-main transition-colors">
                        <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mt-1">
                            <span className="material-symbols-outlined">fitness_center</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="font-bold text-theme-text-main text-sm">Pre-Workout (4:30 PM)</h4>
                                <span className="text-xs font-bold text-theme-text-muted bg-theme-bg-main px-2 py-1 rounded">350 kcal</span>
                            </div>
                            <p className="text-sm text-theme-text-main font-medium">Rice cakes with honey and Greek yogurt.</p>
                        </div>
                    </div>
                    <div className="p-4 flex items-start gap-4 hover:bg-theme-bg-main transition-colors">
                        <div className="bg-slate-200 text-slate-700 p-2 rounded-lg mt-1">
                            <span className="material-symbols-outlined">nightlight</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="font-bold text-theme-text-main text-sm">Dinner (8:30 PM)</h4>
                                <span className="text-xs font-bold text-theme-text-muted bg-theme-bg-main px-2 py-1 rounded">950 kcal</span>
                            </div>
                            <p className="text-sm text-theme-text-main font-medium">Salmon fillet, quinoa, and a large mixed green salad with olive oil dressing.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-3 mt-4">
                <button className="text-theme-primary-main hover:bg-theme-bg-main font-bold text-sm px-4 py-2 border border-theme-primary-main/30 rounded-lg transition-colors">Print Plan</button>
                <button className="text-theme-text-main hover:bg-theme-bg-main font-bold text-sm px-4 py-2 border border-theme-border rounded-lg transition-colors">Download PDF</button>
            </div>
        </div>
    );
}
