import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useListMemberWorkoutPlans,
    useCreateMemberWorkoutPlan,
    getListMemberWorkoutPlansQueryKey,
} from '@workspace/api-client-react';

const TEMPLATE_DAYS = [
    { day: 'Monday — Push', exercises: [{ name: 'Bench Press', setsReps: '4 × 8' }, { name: 'Overhead Press', setsReps: '3 × 10' }, { name: 'Tricep Dips', setsReps: '3 × 12' }] },
    { day: 'Tuesday — Pull', exercises: [{ name: 'Deadlift', setsReps: '4 × 6' }, { name: 'Pull-Ups', setsReps: '3 × 10' }, { name: 'Barbell Row', setsReps: '3 × 8' }] },
    { day: 'Wednesday — Legs', exercises: [{ name: 'Squat', setsReps: '4 × 8' }, { name: 'Leg Press', setsReps: '3 × 12' }, { name: 'Calf Raises', setsReps: '4 × 15' }] },
    { day: 'Friday — Upper Body', exercises: [{ name: 'Incline Press', setsReps: '4 × 10' }, { name: 'Lat Pulldown', setsReps: '3 × 12' }, { name: 'Bicep Curls', setsReps: '3 × 12' }] },
];

export default function ClientProfileWorkoutPlans({ memberId }: { memberId: string }) {
    const qc = useQueryClient();
    const { data: plans = [] } = useListMemberWorkoutPlans(memberId);
    const create = useCreateMemberWorkoutPlan({
        mutation: { onSuccess: () => qc.invalidateQueries({ queryKey: getListMemberWorkoutPlansQueryKey(memberId) }) },
    });
    const [showAdd, setShowAdd] = useState(false);
    const [form, setForm] = useState({ name: '', weeks: '1-4', trainerNote: '' });
    const active = plans.find((p) => p.active) ?? plans[0];

    const submit = () => {
        create.mutate(
            { id: memberId, data: { name: form.name, weeks: form.weeks, active: true, trainerNote: form.trainerNote, days: TEMPLATE_DAYS } },
            { onSuccess: () => { setShowAdd(false); setForm({ name: '', weeks: '1-4', trainerNote: '' }); } },
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
                <h2 className="text-lg font-bold">New Workout Plan</h2>
                <p className="text-xs text-theme-text-muted">A 4-day push/pull/legs/upper template will be created. You can refine exercises later.</p>
                <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Plan name (e.g. Hypertrophy Phase 1)" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Weeks (e.g. 1-4)" value={form.weeks} onChange={(e) => setForm({ ...form, weeks: e.target.value })} />
                <textarea className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Trainer note" value={form.trainerNote} onChange={(e) => setForm({ ...form, trainerNote: e.target.value })} />
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
                    <span className="material-symbols-outlined text-5xl text-theme-text-muted opacity-40 mb-4">fitness_center</span>
                    <h2 className="text-xl font-black text-theme-text-main mb-2">No Active Workout Plan</h2>
                    <p className="text-sm text-theme-text-muted">Click "+ New Plan" to assign a workout program.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {AddModal}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-black tracking-tight text-theme-text-main">{active.name}</h2>
                    <p className="text-sm font-medium text-theme-text-muted mt-1">Weeks {active.weeks}</p>
                </div>
                {AddButton}
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
