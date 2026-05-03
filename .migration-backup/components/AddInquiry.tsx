import React from 'react';

export default function AddInquiry({ onNavigate }: { onNavigate: (path: string) => void }) {
    return (
        <div className="flex-1 overflow-x-hidden p-2 md:p-6 pb-24 h-full overflow-y-auto w-full max-w-[1920px] mx-auto custom-scrollbar">
            {/* Breadcrumb & Title */}
            <div className="mb-6 mt-2">
                <nav className="flex text-sm text-theme-text-muted mb-2">
                    <ol className="flex items-center space-x-2">
                        <li>
                            <button onClick={() => onNavigate('inquiries')} className="hover:text-theme-text-main transition-colors">Inquiries</button>
                        </li>
                        <li><span className="mx-1">/</span></li>
                        <li className="font-medium text-theme-text-main">Add New</li>
                    </ol>
                </nav>
                <h1 className="text-2xl font-bold text-theme-text-main">Add New Inquiry</h1>
            </div>

            {/* Form Container */}
            <div className="bg-theme-bg-card rounded-lg border border-theme-border p-6 shadow-sm max-w-4xl">
                <form onSubmit={(e) => { e.preventDefault(); onNavigate('inquiries'); }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-theme-text-main">
                        {/* Left Column */}
                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium mb-1">Full Name<span className="text-red-500">*</span></label>
                                <input className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main sm:text-sm text-theme-text-main" placeholder="Enter full name" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Phone Number<span className="text-red-500">*</span></label>
                                <input className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main sm:text-sm text-theme-text-main" placeholder="Enter phone number" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Alternate Phone</label>
                                <input className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main sm:text-sm text-theme-text-main" placeholder="Enter alternate phone" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email Address<span className="text-red-500">*</span></label>
                                <input className="w-full px-3 py-2 border border-red-300 text-red-900 focus:ring-1 focus:ring-red-500 focus:border-red-500 rounded-md shadow-sm sm:text-sm" placeholder="Enter email address" type="email" />
                                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">error</span>
                                    Invalid email format
                                </p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Gender<span className="text-red-500">*</span></label>
                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center cursor-pointer">
                                        <input defaultChecked className="h-4 w-4 text-theme-primary-main focus:ring-theme-primary-main border-theme-border bg-theme-bg-main" name="gender" type="radio" />
                                        <span className="ml-2 text-sm text-theme-text-main">Male</span>
                                    </label>
                                    <label className="flex items-center cursor-pointer">
                                        <input className="h-4 w-4 text-theme-primary-main focus:ring-theme-primary-main border-theme-border bg-theme-bg-main" name="gender" type="radio" />
                                        <span className="ml-2 text-sm text-theme-text-main">Female</span>
                                    </label>
                                    <label className="flex items-center cursor-pointer">
                                        <input className="h-4 w-4 text-theme-primary-main focus:ring-theme-primary-main border-theme-border bg-theme-bg-main" name="gender" type="radio" />
                                        <span className="ml-2 text-sm text-theme-text-main">Other</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Age</label>
                                <div className="relative">
                                    <input className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main sm:text-sm text-theme-text-main" placeholder="Enter age" type="number" />
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-5">
                            <div className="relative">
                                <label className="block text-sm font-medium mb-1">Interest/Package Type<span className="text-red-500">*</span></label>
                                <select defaultValue="" className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main sm:text-sm appearance-none cursor-pointer">
                                    <option value="" disabled>Select interest/package</option>
                                    <option value="gym">Gym Membership</option>
                                    <option value="pt">PT</option>
                                    <option value="group">Group Class</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-2 text-theme-text-muted">
                                    <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium mb-1">Source<span className="text-red-500">*</span></label>
                                <select defaultValue="" className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main sm:text-sm appearance-none cursor-pointer">
                                    <option value="" disabled>Select source</option>
                                    <option value="walkin">Walk-in</option>
                                    <option value="referral">Referral</option>
                                    <option value="social">Social Media</option>
                                    <option value="online">Online</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-2 text-theme-text-muted">
                                    <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium mb-1">Assigned Staff<span className="text-red-500">*</span></label>
                                <select defaultValue="" className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main sm:text-sm appearance-none cursor-pointer">
                                    <option value="" disabled>Select staff</option>
                                    <option value="john">John Doe</option>
                                    <option value="jane">Jane Smith</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 top-6 flex items-center px-2 text-theme-text-muted">
                                    <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Follow-up Date<span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <input className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main sm:text-sm text-theme-text-main" type="date" />
                                </div>
                            </div>
                        </div>

                        {/* Full Width Column for Remarks */}
                        <div className="md:col-span-2 mt-2">
                            <label className="block text-sm font-medium mb-1">Remarks</label>
                            <textarea className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main sm:text-sm text-theme-text-main resize-y min-h-[80px]" placeholder="Enter any additional remarks" rows={3}></textarea>
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="mt-6 flex items-center justify-end gap-3 border-t border-theme-border pt-6">
                        <button
                            type="button"
                            onClick={() => onNavigate('inquiries')}
                            className="px-6 py-2 border border-theme-primary-main rounded-full text-sm font-medium text-theme-primary-main bg-transparent hover:bg-theme-bg-main transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary-main"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-theme-primary-main hover:bg-theme-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary-main"
                        >
                            Save Inquiry
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
