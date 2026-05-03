import React from 'react';

export default function ClientProfileNotes() {
    return (
        <div className="grid grid-cols-1 gap-6 pb-32">
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-4 bg-theme-bg-main p-4 rounded-xl">
                <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider px-1">Note Type</label>
                    <select className="bg-theme-bg-card border-none text-xs rounded-lg focus:ring-1 focus:ring-brand-magenta/30 pr-8 text-theme-text-main shadow-sm">
                        <option>All Types</option>
                        <option>Achievement</option>
                        <option>Warning</option>
                        <option>Follow-up</option>
                        <option>General</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider px-1">Staff Member</label>
                    <select className="bg-theme-bg-card border-none text-xs rounded-lg focus:ring-1 focus:ring-brand-magenta/30 pr-8 text-theme-text-main shadow-sm">
                        <option>All Staff</option>
                        <option>Meena Patel</option>
                        <option>Rahul Verma</option>
                        <option>Sarah Miller</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider px-1">Date Range</label>
                    <div className="bg-theme-bg-card flex items-center px-3 py-1.5 rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-sm text-theme-text-muted mr-2">calendar_month</span>
                        <span className="text-xs text-theme-text-main font-medium">Last 30 Days</span>
                    </div>
                </div>
                <button className="mt-auto mb-1 p-2 bg-theme-bg-card border border-theme-border text-theme-text-main rounded-lg hover:bg-theme-bg-main shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">tune</span>
                </button>
            </div>

            {/* Timeline and Notes */}
            <div className="relative pl-12 space-y-8 py-4">
                {/* Vertical Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-theme-border/50"></div>

                {/* Entry 1: Achievement */}
                <div className="relative">
                    <div className="absolute -left-12 top-0 w-8 h-8 rounded-full border-2 border-theme-bg-card shadow-sm overflow-hidden z-10">
                        <img alt="Meena Patel" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmU1KCCjpvWn8vcG9BS7W4UyEDpzzLzoWsAMSzjXC15gW7Qh4GsCgvQ1BENRTSiWKjvYVNFizVxm-S81UY1Q2QVFdalogxrmdzYvWO-uUOejp0hQmxS4mA9vNj2dI8OzxsjlX2Zk16eZQou5OXgPLpR9tG_SxXs9uEjMsD1WvhAVtJ_NQdYoJOUowh45Y4v5mvyK6HiPD4hxquaPfXZIHjnIYf8rcPNv7chhS3coI5_UA8ixtgaAFFvTlMxMJWPAgZUSPeErxSwQ" />
                    </div>
                    <div className="bg-theme-bg-card p-5 rounded-xl border-l-4 border-l-brand-green shadow-sm relative group">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-bold text-brand-green uppercase bg-green-100 px-2 py-0.5 rounded">Achievement</span>
                                    <span className="text-[11px] text-theme-text-muted font-medium">2 hours ago</span>
                                </div>
                                <p className="text-sm text-theme-text-main font-medium leading-relaxed">"Rajiv completed his first 5k run today with great form."</p>
                                <p className="text-xs text-theme-text-muted mt-3 flex items-center gap-1.5">
                                    <span className="font-bold text-theme-text-main">Meena Patel</span> • Personal Trainer
                                </p>
                            </div>
                            <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-theme-text-muted hover:text-brand-magenta">
                                <span className="material-symbols-outlined text-[18px]">push_pin</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Entry 2: Warning */}
                <div className="relative">
                    <div className="absolute -left-12 top-0 w-8 h-8 rounded-full border-2 border-theme-bg-card shadow-sm overflow-hidden z-10">
                        <img alt="Rahul Verma" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyz4deO-gI8Vbp_Jm3xYcmmj3QdAPXTXX4enGYG2_FOrHGb-8v-WB_vq4nha7O6czJ956EBFaKzyeSJeNmfE82M8vEn-Sf8O-59CkJrjpDnoxY5rjHdaknx8wfZXhG0s4aP1rWcOXp1xejDmDOr0viixT22VPH9byv9Leafe6k4dja0ozTodP86ZQaRBQ7GfYpptAWgRWz4bvbSQkk72lrY3VAsvYdh9DW0LJz2VnYAEONL3zoaU_kHUYOqtgYDJm8gCDMQOfipg" />
                    </div>
                    <div className="bg-theme-bg-card p-5 rounded-xl border-l-4 border-l-red-500 shadow-sm relative group">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-bold text-red-600 uppercase bg-red-100 px-2 py-0.5 rounded">Warning</span>
                                    <span className="text-[11px] text-theme-text-muted font-medium">Yesterday</span>
                                </div>
                                <p className="text-sm text-theme-text-main font-medium leading-relaxed">"Member complained about locker room cleanliness. Discussed with facility team."</p>
                                <p className="text-xs text-theme-text-muted mt-3 flex items-center gap-1.5">
                                    <span className="font-bold text-theme-text-main">Rahul Verma</span> • Operations Lead
                                </p>
                            </div>
                            <button className="opacity-100 p-1.5 text-brand-magenta" title="Pinned by Admin">
                                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>push_pin</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Entry 3: Follow-up */}
                <div className="relative">
                    <div className="absolute -left-12 top-0 w-8 h-8 rounded-full border-2 border-theme-bg-card shadow-sm overflow-hidden z-10">
                        <img alt="Sarah Miller" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZYt2wCase2PE9YBAGY3oxXUkXc4JJQn7o3cwTOF7NXErKfHS3_JaYXQ-kgwPGC3JEH3mBIdUiwq6gOKl5GICN7wdeZQpnF9HO1xpSn3IYqQLAKdciYS3chvAv26MA8OUf3yb8OoWt6prm-XxrSeSt8YndtW8alUxqmimMqmutbpfiwJje0jfPS-X6RcsK9qvhK2HTnqfC5SvhLpVhrMTuEgJEnsmP2hqj2XNGyUiKVZqQxffOVtOAHixdr0_aWzS7BuKRV3Mrfw" />
                    </div>
                    <div className="bg-theme-bg-card p-5 rounded-xl border-l-4 border-l-theme-primary-main shadow-sm relative group">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-bold text-theme-primary-main uppercase bg-theme-primary-main/10 px-2 py-0.5 rounded">Follow-up</span>
                                    <span className="text-[11px] text-theme-text-muted font-medium">2 days ago</span>
                                </div>
                                <p className="text-sm text-theme-text-main font-medium leading-relaxed">"Followed up on PT renewal. Member is considering the 12-session pack."</p>
                                <p className="text-xs text-theme-text-muted mt-3 flex items-center gap-1.5">
                                    <span className="font-bold text-theme-text-main">Sarah Miller</span> • Sales Consultant
                                </p>
                            </div>
                            <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-theme-text-muted hover:text-brand-magenta">
                                <span className="material-symbols-outlined text-[18px]">push_pin</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Entry 4: General */}
                <div className="relative">
                    <div className="absolute -left-12 top-0 w-8 h-8 rounded-full border-2 border-theme-bg-card shadow-sm overflow-hidden z-10">
                        <img alt="Priya Sharma" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ1W-i07WHjrLmxYjP-2XL9W65qPWA0AMIskVfIXB85QRjlKxlC6RXccA80XavP5TIIltVLHkosSIGK0pnA1H0T6pmA93h69VH31DBPvoQbid4Alo9EqLXhuRraO31iD8ie2BA9v-SKIfj_yRVVzHEhUVToD_CDQd__Iq0Cc1ri666a8ZpzSqqZapcfGXcyq0EWidgZN5HddpnGMAdFaf_mkoaQplr7zT05Q4TOLQc2CAOAH-jHVVz2ejfCKtR_YzUKaAzbW-DWg" />
                    </div>
                    <div className="bg-theme-bg-card p-5 rounded-xl border-l-4 border-l-slate-400 shadow-sm relative group">
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase bg-slate-100 px-2 py-0.5 rounded">General</span>
                                    <span className="text-[11px] text-theme-text-muted font-medium">3 days ago</span>
                                </div>
                                <p className="text-sm text-theme-text-main font-medium leading-relaxed">"Joined early morning yoga session. High engagement."</p>
                                <p className="text-xs text-theme-text-muted mt-3 flex items-center gap-1.5">
                                    <span className="font-bold text-theme-text-main">Priya Sharma</span> • Yoga Instructor
                                </p>
                            </div>
                            <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-theme-text-muted hover:text-brand-magenta">
                                <span className="material-symbols-outlined text-[18px]">push_pin</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Note Composer Fixed Bottom */}
            <footer className="fixed bottom-0 left-0 right-0 md:left-64 bg-theme-bg-card border-t border-theme-border p-4 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1 w-full">
                        <textarea className="w-full bg-theme-bg-main border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-magenta/20 py-3 px-4 resize-none text-theme-text-main" placeholder="Write a note..." rows={1}></textarea>
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="relative border border-theme-border rounded-xl">
                            <select className="bg-transparent border-none text-xs rounded-xl focus:ring-2 focus:ring-brand-magenta/20 pr-10 py-3 font-semibold uppercase tracking-wider text-theme-text-muted">
                                <option>General</option>
                                <option>Follow-up</option>
                                <option>Warning</option>
                                <option>Achievement</option>
                            </select>
                        </div>
                        <button className="bg-brand-magenta text-white px-8 py-3 rounded-xl text-sm font-bold shadow-md hover:opacity-90 transition-all whitespace-nowrap">
                            Add Note
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
