import React from 'react';

export default function SportsBill() {
    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto w-full custom-scrollbar">
            {/* Page Title Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-theme-primary-main rounded-2xl text-white flex items-center justify-center shadow-lg shadow-theme-primary-main/20">
                        <span className="material-symbols-outlined text-3xl">sports_tennis</span>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-on-surface">Sports Bill</h2>
                        <p className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest mt-1">New Transaction #SB-2024-089</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 bg-theme-primary-light border border-theme-primary-main/20 rounded-xl">
                    <span className="material-symbols-outlined text-theme-primary-main text-xl">stars</span>
                    <div className="text-right">
                        <p className="text-[10px] font-bold text-theme-primary-main uppercase tracking-tighter">Reward Points Balance</p>
                        <p className="text-sm font-black text-theme-primary-main">0.00 <span className="font-normal opacity-70">* Rs. 1 =</span> Rs. 0</p>
                    </div>
                </div>
            </div>

            {/* Main Bill Form Card */}
            <div className="bg-surface-container-lowest rounded-md shadow-sm border border-theme-border overflow-hidden p-6 md:p-8">
                <div className="mb-6 flex justify-between items-end border-b border-theme-border pb-4">
                    <h3 className="text-lg font-bold text-on-surface">Invoice Details</h3>
                    <span className="text-[11px] font-medium text-theme-primary-main italic">Edit client detail — only admin can edit</span>
                </div>
                <form className="space-y-8">
                    {/* Top Row: Full Width Sport Type */}
                    <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Sport Type</label>
                        <select className="w-full h-11 px-4 rounded-md bg-surface-container-low border border-theme-border focus:ring-2 focus:ring-theme-primary-main/20 text-sm font-medium transition-all text-on-surface outline-none">
                            <option>Cricket</option>
                            <option>Football</option>
                            <option>Swimming</option>
                            <option defaultValue="Badminton">Badminton</option>
                            <option>Tennis</option>
                            <option>Basketball</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Two-Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {/* Left Column: Client Info */}
                        <div className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Invoice ID</label>
                                    <input className="w-full h-10 px-4 rounded-md bg-surface border border-theme-border text-sm font-medium text-on-surface-variant outline-none" readOnly type="text" value="FC-SP-9281" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Invoice Date</label>
                                    <input className="w-full h-10 px-4 rounded-md bg-white border border-theme-border text-sm font-medium outline-none focus:ring-1 focus:ring-theme-primary-main" type="date" defaultValue="2024-05-20" />
                                </div>
                            </div>
                            <div className="space-y-1.5 relative">
                                <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Client Name</label>
                                <div className="relative">
                                    <input className="w-full h-10 px-10 rounded-md bg-white border border-theme-border text-sm font-medium outline-none focus:ring-1 focus:ring-theme-primary-main" placeholder="Search member..." type="text" />
                                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant/40 text-lg">search</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Member ID</label>
                                    <input className="w-full h-10 px-4 rounded-md bg-white border border-theme-border text-sm font-medium outline-none focus:ring-1 focus:ring-theme-primary-main" placeholder="FC-2021" type="text" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Contact Number</label>
                                    <input className="w-full h-10 px-4 rounded-md bg-white border border-theme-border text-sm font-medium outline-none focus:ring-1 focus:ring-theme-primary-main" placeholder="+91 98765 43210" type="text" />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">E-mail Address</label>
                                <input className="w-full h-10 px-4 rounded-md bg-white border border-theme-border text-sm font-medium outline-none focus:ring-1 focus:ring-theme-primary-main" placeholder="client@example.com" type="email" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Client Source</label>
                                    <select className="w-full h-10 px-4 rounded-md bg-white border border-theme-border text-sm font-medium outline-none focus:ring-1 focus:ring-theme-primary-main">
                                        <option>Instagram</option>
                                        <option>Word of Mouth</option>
                                        <option>Walk-in</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Joining Date</label>
                                    <input className="w-full h-10 px-4 rounded-md bg-white border border-theme-border text-sm font-medium outline-none focus:ring-1 focus:ring-theme-primary-main" type="date" />
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Package & Billing */}
                        <div className="space-y-5 bg-surface-container-low/30 p-6 rounded-md border border-theme-border">
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Package</label>
                                <select className="w-full h-10 px-4 rounded-md bg-surface-container-lowest border border-theme-border shadow-sm text-sm font-medium outline-none focus:ring-1 focus:ring-theme-primary-main">
                                    <option>Professional Training - 12 Months</option>
                                    <option>Standard Coaching - 3 Months</option>
                                    <option>Intensive Boot Camp - 1 Month</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Number of Sessions</label>
                                    <input className="w-full h-10 px-4 rounded-md bg-surface border border-theme-border text-sm font-medium text-on-surface-variant outline-none" readOnly type="number" value="48" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Trainer/Coach</label>
                                    <select className="w-full h-10 px-4 rounded-md bg-surface-container-lowest border border-theme-border shadow-sm text-sm font-medium outline-none focus:ring-1 focus:ring-theme-primary-main">
                                        <option>Coach Rahul Verma</option>
                                        <option>Coach Sarah Smith</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Start Date</label>
                                    <input className="w-full h-10 px-4 rounded-md bg-surface-container-lowest border border-theme-border shadow-sm text-sm font-medium outline-none focus:ring-1 focus:ring-theme-primary-main" type="date" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">End Date</label>
                                    <input className="w-full h-10 px-4 rounded-md bg-surface border border-theme-border text-sm font-medium outline-none text-on-surface-variant" readOnly type="date" />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Price (Rs.)</label>
                                    <input className="w-full h-10 px-4 rounded-md bg-surface-container-lowest border border-theme-border shadow-sm text-sm font-medium outline-none focus:ring-1 focus:ring-theme-primary-main" type="text" defaultValue="25000" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Tax</label>
                                    <select className="w-full h-10 px-4 rounded-md bg-surface-container-lowest border border-theme-border shadow-sm text-sm font-medium outline-none focus:ring-1 focus:ring-theme-primary-main" defaultValue="18% GST (Exc)">
                                        <option>None</option>
                                        <option>5% GST</option>
                                        <option value="18% GST (Exc)">18% GST (Exc)</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Discount</label>
                                    <input className="w-full h-10 px-4 rounded-md bg-surface-container-lowest border border-theme-border shadow-sm text-sm font-medium outline-none focus:ring-1 focus:ring-theme-primary-main" placeholder="0.00" type="text" />
                                </div>
                            </div>
                            <div className="pt-4 border-t border-theme-border mt-2 flex justify-between items-center">
                                <div className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Amount Payable</div>
                                <div className="text-3xl font-black text-theme-primary-main">Rs. 29,500.00</div>
                            </div>
                        </div>
                    </div>

                    {/* Mode of Payment */}
                    <div className="space-y-6 pt-6 text-on-surface">
                        <h4 className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.2em] border-b border-theme-border pb-2">Payment Settlement</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase">Payment Mode 1</label>
                                    <select className="w-full h-10 px-4 rounded-md bg-white border border-theme-border text-sm font-medium outline-none focus:ring-1 focus:ring-theme-primary-main" defaultValue="UPI / QR Code">
                                        <option>Cash</option>
                                        <option value="UPI / QR Code">UPI / QR Code</option>
                                        <option>Credit Card</option>
                                        <option>Bank Transfer</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase">Amount Paid (1)</label>
                                    <input className="w-full h-10 px-4 rounded-md bg-white border border-theme-border text-sm font-medium outline-none focus:ring-1 focus:ring-theme-primary-main" type="text" defaultValue="29500" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase opacity-40">Payment Mode 2 (Optional)</label>
                                    <select className="w-full h-10 px-4 rounded-md bg-surface border border-theme-border text-sm font-medium opacity-40 outline-none" disabled>
                                        <option>None</option>
                                        <option>Cash</option>
                                        <option>Card</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-on-surface-variant uppercase opacity-40">Amount Paid (2)</label>
                                    <input className="w-full h-10 px-4 rounded-md bg-surface border border-theme-border text-sm font-medium opacity-40 outline-none" disabled placeholder="0.00" type="text" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-end p-4 bg-surface-container-low rounded-md striped-pattern border border-theme-border">
                                <label className="text-[11px] font-bold text-on-surface-variant uppercase mb-1">Balance Due</label>
                                <div className="text-2xl font-bold text-on-surface">Rs. 0.00</div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info (Collapsible Mock) */}
                    <div className="border border-theme-border rounded-md">
                        <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-surface-container-low transition-colors" type="button">
                            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Additional Information &amp; Remarks</span>
                            <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
                        </button>
                    </div>

                    {/* Notification Toggles */}
                    <div className="flex flex-wrap gap-8 py-4 px-6 bg-surface-container-low/50 rounded-md border border-theme-border">
                        <div className="flex items-center gap-3">
                            <input defaultChecked className="w-4 h-4 rounded text-theme-primary-main focus:ring-theme-primary-main border-outline-variant/40" type="checkbox" />
                            <span className="text-xs font-semibold text-on-surface flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-sm text-theme-primary-main">sms</span> Send Text
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <input defaultChecked className="w-4 h-4 rounded text-theme-primary-main focus:ring-theme-primary-main border-outline-variant/40" type="checkbox" />
                            <span className="text-xs font-semibold text-on-surface flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-sm text-theme-primary-main">mail</span> Send Email
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <input defaultChecked className="w-4 h-4 rounded text-theme-primary-main focus:ring-theme-primary-main border-outline-variant/40" type="checkbox" />
                            <span className="text-xs font-semibold text-on-surface flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-sm text-theme-primary-main">chat</span> Send WhatsApp
                            </span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-end gap-4 pt-6">
                        <button className="px-8 py-3 rounded-md bg-white border border-theme-border text-xs font-bold uppercase tracking-widest text-on-surface hover:bg-surface-container-low transition-all" type="button">
                            Preview PDF
                        </button>
                        <button className="px-10 py-3 rounded-md bg-theme-primary-main text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-theme-primary-main/30 hover:bg-theme-primary-hover transition-all flex items-center gap-2" type="submit">
                            <span className="material-symbols-outlined text-lg">check_circle</span>
                            Submit Bill
                        </button>
                    </div>

                </form>
            </div>

            {/* Footer Meta */}
            <div className="mt-8 mb-4 flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-[0.2em] text-center">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">verified_user</span> Secure Encryption Active
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">history</span> Auto-save enabled
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">print</span> Thermal Printer Ready
                </div>
            </div>

            {/* Floating Helper (Action Button) - kept from original but adapted to be sticky inside container if needed */}
        </div>
    );
}
