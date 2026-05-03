import React from 'react';

export default function ClientProfileBodyAnalysis() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-black tracking-tight text-theme-text-main">AI Body Composition</h2>
                <div className="text-sm font-medium text-theme-text-muted">Last Scan: <span className="font-bold text-theme-text-main mt-1">Oct 26, 2024</span></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Visual Report Card Placeholder */}
                <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border p-6 flex flex-col items-center justify-center min-h-[300px]">
                    <span className="material-symbols-outlined text-6xl text-theme-primary-main mb-4 opacity-50">accessibility_new</span>
                    <h3 className="font-bold text-theme-text-main text-center mb-2">3D Body Scan Modeling</h3>
                    <p className="text-sm text-theme-text-muted text-center max-w-xs">The 3D modeling visualizer requires the native application module to render full anatomy grids.</p>
                    <button className="mt-6 bg-theme-primary-main/10 text-theme-primary-main hover:bg-theme-primary-main hover:text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors border border-theme-primary-main/20">
                        Request New Scan
                    </button>
                </div>

                {/* Key Metrics */}
                <div className="space-y-4">
                    <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border p-5">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-theme-text-muted text-sm uppercase tracking-wider">Weight</span>
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">arrow_downward</span> 2.1 kg
                            </span>
                        </div>
                        <div className="flex items-end gap-2">
                            <span className="text-3xl font-black text-theme-text-main">74.5</span>
                            <span className="text-theme-text-muted font-bold mb-1">kg</span>
                        </div>
                    </div>

                    <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border p-5">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-theme-text-muted text-sm uppercase tracking-wider">Body Fat</span>
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">arrow_downward</span> 1.5%
                            </span>
                        </div>
                        <div className="flex items-end gap-2 mb-3">
                            <span className="text-3xl font-black text-theme-text-main">14.2</span>
                            <span className="text-theme-text-muted font-bold mb-1">%</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full bg-theme-bg-main rounded-full h-2 overflow-hidden border border-theme-border">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '14.2%' }}></div>
                        </div>
                        <div className="flex justify-between text-[10px] font-bold text-theme-text-muted mt-1 px-1">
                            <span>0% </span>
                            <span>Target: 12%</span>
                        </div>
                    </div>

                    <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border p-5">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-theme-text-muted text-sm uppercase tracking-wider">Skeletal Muscle Mass</span>
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">arrow_upward</span> 1.1 kg
                            </span>
                        </div>
                        <div className="flex items-end gap-2">
                            <span className="text-3xl font-black text-theme-text-main">36.8</span>
                            <span className="text-theme-text-muted font-bold mb-1">kg</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Stats Table */}
            <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border overflow-hidden">
                <div className="p-4 border-b border-theme-border bg-theme-bg-main">
                    <h3 className="font-bold text-theme-text-main text-sm">Detailed Measurements</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y md:divide-y-0 divide-theme-border border-b border-theme-border">
                    <div className="p-4 flex flex-col border-b md:border-b-0 border-theme-border">
                        <span className="text-xs font-bold text-theme-text-muted uppercase mb-1">Visceral Fat</span>
                        <span className="text-lg font-black text-theme-text-main">7</span>
                    </div>
                    <div className="p-4 flex flex-col border-b md:border-b-0 border-theme-border">
                        <span className="text-xs font-bold text-theme-text-muted uppercase mb-1">BMI</span>
                        <span className="text-lg font-black text-theme-text-main">24.3</span>
                    </div>
                    <div className="p-4 flex flex-col">
                        <span className="text-xs font-bold text-theme-text-muted uppercase mb-1">BMR</span>
                        <span className="text-lg font-black text-theme-text-main">1785 kcal</span>
                    </div>
                    <div className="p-4 flex flex-col">
                        <span className="text-xs font-bold text-theme-text-muted uppercase mb-1">Water Content</span>
                        <span className="text-lg font-black text-theme-text-main">62%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
