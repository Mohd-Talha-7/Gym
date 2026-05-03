import { useListMemberWorkoutPlans } from '@workspace/api-client-react';

export default function ClientProfileWorkoutPlans({ memberId }: { memberId: string }) {
    const { data: plans = [] } = useListMemberWorkoutPlans(memberId);
    const active = plans.find((p) => p.active) ?? plans[0];

    if (!active) {
        return (
            <div className="bg-theme-bg-card rounded-xl border border-theme-border p-12 text-center">
                <span className="material-symbols-outlined text-5xl text-theme-text-muted opacity-40 mb-4">fitness_center</span>
                <h2 className="text-xl font-black text-theme-text-main mb-2">No Active Workout Plan</h2>
                <p className="text-sm text-theme-text-muted">Assign a workout plan to this member to track their training.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-black tracking-tight text-theme-text-main">{active.name}</h2>
                    <p className="text-sm font-medium text-theme-text-muted mt-1">Weeks {active.weeks}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {active.days.map((day, idx) => (
                    <div key={idx} className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border overflow-hidden flex flex-col">
                        <div className="bg-theme-primary-main/10 p-4 border-b border-theme-primary-main/20">
                            <span className="font-black text-theme-primary-main">{day.day}</span>
                        </div>
                        <div className="p-4 flex-1">
                            <ul className="space-y-3">
                                {day.exercises.map((ex, i) => (
                                    <li key={i} className="flex justify-between items-center text-sm">
                                        <span className="font-bold text-theme-text-main">{ex.name}</span>
                                        <span className="text-theme-text-muted font-medium bg-theme-bg-main px-2 py-1 rounded">{ex.setsReps}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {active.trainerNote && (
                <div className="bg-blue-50/50 border border-blue-200 p-4 rounded-xl flex items-start gap-3 mt-6">
                    <span className="material-symbols-outlined text-blue-600 mt-0.5">info</span>
                    <div>
                        <h4 className="font-bold text-theme-text-main text-sm">Trainer Note</h4>
                        <p className="text-sm text-theme-text-muted mt-1 leading-relaxed">{active.trainerNote}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
