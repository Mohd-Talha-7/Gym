import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useListMemberNotes,
    useCreateMemberNote,
    getListMemberNotesQueryKey,
} from '@workspace/api-client-react';

function timeAgo(d: Date | string) {
    const diff = (Date.now() - new Date(d).getTime()) / 1000;
    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
}

export default function ClientProfileNotes({ memberId }: { memberId: string }) {
    const qc = useQueryClient();
    const [draft, setDraft] = useState('');
    const { data: notes = [] } = useListMemberNotes(memberId);
    const createNote = useCreateMemberNote({
        mutation: {
            onSuccess: () => {
                qc.invalidateQueries({ queryKey: getListMemberNotesQueryKey(memberId) });
                setDraft('');
            },
        },
    });

    const handleSubmit = () => {
        const body = draft.trim();
        if (!body) return;
        createNote.mutate({ id: memberId, data: { body, author: 'Staff' } });
    };

    return (
        <div className="grid grid-cols-1 gap-6 pb-32">
            <div className="relative pl-12 space-y-6 py-4">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-theme-border/50"></div>

                {notes.length === 0 && (
                    <div className="text-theme-text-muted py-8">No notes yet. Add the first one below.</div>
                )}

                {notes.map((n) => (
                    <div className="relative" key={n.id}>
                        <div className="absolute -left-12 top-0 w-8 h-8 rounded-full border-2 border-theme-bg-card shadow-sm overflow-hidden z-10 bg-theme-primary-main flex items-center justify-center text-white text-xs font-bold">
                            {n.author.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="bg-theme-bg-card p-5 rounded-xl border-l-4 border-l-theme-primary-main shadow-sm">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[11px] text-theme-text-muted font-medium">{timeAgo(n.createdAt)}</span>
                            </div>
                            <p className="text-sm text-theme-text-main font-medium leading-relaxed whitespace-pre-wrap">{n.body}</p>
                            <p className="text-xs text-theme-text-muted mt-3">
                                <span className="font-bold text-theme-text-main">{n.author}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="fixed bottom-0 left-0 right-0 md:left-64 bg-theme-bg-card border-t border-theme-border p-4 z-40 shadow-lg">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1 w-full">
                        <textarea
                            value={draft}
                            onChange={(e) => setDraft(e.target.value)}
                            className="w-full bg-theme-bg-main border-none rounded-xl text-sm focus:ring-2 focus:ring-theme-primary-main/20 py-3 px-4 resize-none text-theme-text-main"
                            placeholder="Write a note..."
                            rows={1}
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={!draft.trim() || createNote.isPending}
                        className="bg-theme-primary-main text-white px-8 py-3 rounded-xl text-sm font-bold shadow-md hover:opacity-90 disabled:opacity-50 transition-all whitespace-nowrap"
                    >
                        {createNote.isPending ? 'Saving…' : 'Add Note'}
                    </button>
                </div>
            </footer>
        </div>
    );
}
