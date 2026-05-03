import React from 'react';

export default function ClientProfileWorkoutPlans() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-black tracking-tight text-theme-text-main">Active Workout Plan</h2>
                    <p className="text-sm font-medium text-theme-text-muted mt-1">Intermediate Hypertrophy Program (Weeks 1-4)</p>
                </div>
                <button className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary-main flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Assign New Plan
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Day 1 */}
                <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border overflow-hidden flex flex-col">
                    <div className="bg-theme-primary-main/10 p-4 border-b border-theme-primary-main/20 flex items-center justify-between">
                        <span className="font-black text-theme-primary-main">Day 1: Push (Chest, Shoulders, Triceps)</span>
                    </div>
                    <div className="p-4 flex-1">
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center text-sm">
                                <span className="font-bold text-theme-text-main">Bench Press</span>
                                <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">4 x 8-10</span>
                            </li>
                            <li className="flex justify-between items-center text-sm">
                                <span className="font-bold text-theme-text-main">Incline Dumbbell Press</span>
                                <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">3 x 10-12</span>
                            </li>
                            <li className="flex justify-between items-center text-sm">
                                <span className="font-bold text-theme-text-main">Overhead Press</span>
                                <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">3 x 8-10</span>
                            </li>
                            <li className="flex justify-between items-center text-sm">
                                <span className="font-bold text-theme-text-main">Lateral Raises</span>
                                <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">4 x 15</span>
                            </li>
                            <li className="flex justify-between items-center text-sm">
                                <span className="font-bold text-theme-text-main">Tricep Pushdowns</span>
                                <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">3 x 12-15</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Day 2 */}
                <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border overflow-hidden flex flex-col">
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-theme-border flex items-center justify-between">
                        <span className="font-black text-theme-text-main">Day 2: Pull (Back, Biceps, Rear Delts)</span>
                    </div>
                    <div className="p-4 flex-1">
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center text-sm">
                                <span className="font-bold text-theme-text-main">Barbell Rows</span>
                                <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">4 x 8-10</span>
                            </li>
                            <li className="flex justify-between items-center text-sm">
                                <span className="font-bold text-theme-text-main">Lat Pulldowns</span>
                                <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">3 x 10-12</span>
                            </li>
                            <li className="flex justify-between items-center text-sm">
                                <span className="font-bold text-theme-text-main">Face Pulls</span>
                                <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">3 x 15</span>
                            </li>
                            <li className="flex justify-between items-center text-sm">
                                <span className="font-bold text-theme-text-main">Barbell Curls</span>
                                <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">3 x 10-12</span>
                            </li>
                            <li className="flex justify-between items-center text-sm">
                                <span className="font-bold text-theme-text-main">Hammer Curls</span>
                                <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">3 x 12-15</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Day 3 */}
                <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border overflow-hidden flex flex-col">
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-theme-border flex items-center justify-between">
                        <span className="font-black text-theme-text-main">Day 3: Legs & Core</span>
                    </div>
                    <div className="p-4 flex-1">
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center text-sm">
                                <span className="font-bold text-theme-text-main">Squats</span>
                                <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">4 x 8-10</span>
                            </li>
                            <li className="flex justify-between items-center text-sm">
                                <span className="font-bold text-theme-text-main">Romanian Deadlifts</span>
                                <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">3 x 10-12</span>
                            </li>
                            <li className="flex justify-between items-center text-sm">
                                <span className="font-bold text-theme-text-main">Leg Press</span>
                                <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">3 x 12-15</span>
                            </li>
                            <li className="flex justify-between items-center text-sm">
                                <span className="font-bold text-theme-text-main">Calf Raises</span>
                                <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">4 x 15-20</span>
                            </li>
                            <li className="flex justify-between items-center text-sm">
                                <span className="font-bold text-theme-text-main">Planks</span>
                                <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">3 x 60s</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Note Section */}
            <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 p-4 rounded-xl flex items-start gap-3 mt-6">
                <span className="material-symbols-outlined text-blue-600 mt-0.5">info</span>
                <div>
                    <h4 className="font-bold text-theme-text-main text-sm">Trainer Note</h4>
                    <p className="text-sm text-theme-text-muted mt-1 leading-relaxed">Client is progressing very well on deadlifts. Next week, let's bump up the starting weight by 5% and observe form. Focus heavily on keeping the back straight and hips engaged.</p>
                </div>
            </div>
        </div>
    );
}
