import React from 'react';

export default function ClientProfileAttendance() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-xl font-black tracking-tight text-theme-text-main">Attendance Record</h2>
                <div className="flex gap-2">
                    <select className="bg-theme-bg-card border border-theme-border text-theme-text-main text-sm rounded-lg focus:ring-theme-primary-main focus:border-theme-primary-main block p-2 font-medium">
                        <option>This Month</option>
                        <option>Last Month</option>
                        <option>Last 3 Months</option>
                        <option>This Year</option>
                    </select>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-theme-bg-card p-4 rounded-xl border border-theme-border shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-theme-text-muted mb-1 block">Total Visits</span>
                    <span className="text-2xl font-black text-theme-primary-main leading-tight">142</span>
                </div>
                <div className="bg-theme-bg-card p-4 rounded-xl border border-theme-border shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-theme-text-muted mb-1 block">Visits this Month</span>
                    <span className="text-2xl font-black text-theme-text-main leading-tight">18</span>
                </div>
                <div className="bg-theme-bg-card p-4 rounded-xl border border-theme-border shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-theme-text-muted mb-1 block">Avg. Duration</span>
                    <span className="text-2xl font-black text-theme-text-main leading-tight">75m</span>
                </div>
                <div className="bg-theme-bg-card p-4 rounded-xl border border-theme-border shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-theme-text-muted mb-1 block">Preferred Time</span>
                    <span className="text-xl font-black text-theme-text-main leading-tight mt-1">Evening</span>
                </div>
            </div>

            {/* Attendance Table */}
            <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border overflow-hidden mt-6">
                <table className="w-full text-left text-sm border-collapse whitespace-nowrap">
                    <thead className="bg-theme-bg-main text-theme-text-muted font-bold text-[10px] uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Check-in Time</th>
                            <th className="px-6 py-4">Check-out Time</th>
                            <th className="px-6 py-4">Duration</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        <tr className="hover:bg-theme-bg-main transition-colors">
                            <td className="px-6 py-4 font-bold text-theme-text-main">Oct 26, 2024</td>
                            <td className="px-6 py-4 text-theme-text-muted font-medium">18:30 PM</td>
                            <td className="px-6 py-4 text-theme-text-muted font-medium">19:55 PM</td>
                            <td className="px-6 py-4 font-medium text-theme-text-main">85 mins</td>
                            <td className="px-6 py-4">
                                <span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded text-xs">Present</span>
                            </td>
                        </tr>
                        <tr className="hover:bg-theme-bg-main transition-colors">
                            <td className="px-6 py-4 font-bold text-theme-text-main">Oct 25, 2024</td>
                            <td className="px-6 py-4 text-theme-text-muted font-medium">18:45 PM</td>
                            <td className="px-6 py-4 text-theme-text-muted font-medium">19:50 PM</td>
                            <td className="px-6 py-4 font-medium text-theme-text-main">65 mins</td>
                            <td className="px-6 py-4">
                                <span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded text-xs">Present</span>
                            </td>
                        </tr>
                        <tr className="hover:bg-theme-bg-main transition-colors bg-theme-bg-main/50 text-red-800">
                            <td className="px-6 py-4 font-bold text-theme-text-main">Oct 24, 2024</td>
                            <td className="px-6 py-4 text-theme-text-muted font-medium">-</td>
                            <td className="px-6 py-4 text-theme-text-muted font-medium">-</td>
                            <td className="px-6 py-4 font-medium text-theme-text-muted">-</td>
                            <td className="px-6 py-4">
                                <span className="bg-red-100 text-red-700 font-bold px-2 py-1 rounded text-xs">Absent</span>
                            </td>
                        </tr>
                        <tr className="hover:bg-theme-bg-main transition-colors">
                            <td className="px-6 py-4 font-bold text-theme-text-main">Oct 23, 2024</td>
                            <td className="px-6 py-4 text-theme-text-muted font-medium">18:15 PM</td>
                            <td className="px-6 py-4 text-theme-text-muted font-medium">19:30 PM</td>
                            <td className="px-6 py-4 font-medium text-theme-text-main">75 mins</td>
                            <td className="px-6 py-4">
                                <span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded text-xs">Present</span>
                            </td>
                        </tr>
                        <tr className="hover:bg-theme-bg-main transition-colors">
                            <td className="px-6 py-4 font-bold text-theme-text-main">Oct 22, 2024</td>
                            <td className="px-6 py-4 text-theme-text-muted font-medium">18:20 PM</td>
                            <td className="px-6 py-4 text-theme-text-muted font-medium">19:40 PM</td>
                            <td className="px-6 py-4 font-medium text-theme-text-main">80 mins</td>
                            <td className="px-6 py-4">
                                <span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded text-xs">Present</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center mt-4">
                <button className="text-theme-text-main hover:bg-theme-bg-main font-bold text-sm px-6 py-2 border border-theme-border rounded-lg transition-colors">Load More Records</button>
            </div>
        </div>
    );
}
