import React from 'react';

export default function POSPortal() {
    return (
        <div className="flex-1 flex overflow-hidden h-full">
            {/* Left Panel: Catalog (60%) */}
            <section className="w-[60%] flex flex-col p-6 space-y-6 overflow-hidden h-full">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold tracking-tight text-on-surface">Product Catalog</h2>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 rounded-full bg-theme-primary-main text-white text-[11px] font-semibold uppercase tracking-wider">All</button>
                        <button className="px-3 py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant text-[11px] font-semibold uppercase tracking-wider border border-transparent hover:border-theme-primary-main/30">Supplements</button>
                        <button className="px-3 py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant text-[11px] font-semibold uppercase tracking-wider border border-transparent hover:border-theme-primary-main/30">Drinks</button>
                        <button className="px-3 py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant text-[11px] font-semibold uppercase tracking-wider border border-transparent hover:border-theme-primary-main/30">Merchandise</button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative mb-2">
                    <input className="w-full h-11 bg-surface-container-lowest border border-theme-border rounded-xl px-10 text-sm focus:ring-2 focus:ring-theme-primary-main/20 outline-none" placeholder="Search product or scan barcode..." type="text" />
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">search</span>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">barcode_scanner</span>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pb-6">
                        {/* Product Card 1 */}
                        <div className="group bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-theme-primary-main/30 active:scale-95">
                            <div className="aspect-square rounded-lg bg-surface mb-3 overflow-hidden flex items-center justify-center">
                                <img alt="Whey Protein" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=400&h=400" />
                            </div>
                            <div className="space-y-1">
                                <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-bold uppercase tracking-wider">Supplement</span>
                                <h3 className="font-semibold text-sm truncate text-on-surface">Gold Standard Whey 2kg</h3>
                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-theme-primary-main font-bold text-base">$64.99</span>
                                    <span className="text-[11px] text-on-surface-variant">Stock: 24</span>
                                </div>
                            </div>
                        </div>

                        {/* Product Card 2 */}
                        <div className="group bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-theme-primary-main/30 active:scale-95">
                            <div className="aspect-square rounded-lg bg-surface mb-3 overflow-hidden flex items-center justify-center">
                                <img alt="Energy Drink" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400&h=400" />
                            </div>
                            <div className="space-y-1">
                                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-wider">Drink</span>
                                <h3 className="font-semibold text-sm truncate text-on-surface">Pre-Workout Spark</h3>
                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-theme-primary-main font-bold text-base">$4.50</span>
                                    <span className="text-[11px] text-on-surface-variant">Stock: 142</span>
                                </div>
                            </div>
                        </div>

                        {/* Product Card 3 */}
                        <div className="group bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-theme-primary-main/30 active:scale-95">
                            <div className="aspect-square rounded-lg bg-surface mb-3 overflow-hidden flex items-center justify-center bg-gray-100">
                                <img alt="T-Shirt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400&h=400" />
                            </div>
                            <div className="space-y-1">
                                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-wider">Merchandise</span>
                                <h3 className="font-semibold text-sm truncate text-on-surface">FitCore Performance Tee</h3>
                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-theme-primary-main font-bold text-base">$28.00</span>
                                    <span className="text-[11px] text-on-surface-variant">Stock: 8</span>
                                </div>
                            </div>
                        </div>

                        {/* Product Card 4 */}
                        <div className="group bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-theme-primary-main/30 active:scale-95">
                            <div className="aspect-square rounded-lg bg-surface mb-3 overflow-hidden flex items-center justify-center">
                                <img alt="Yoga Mat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=400&h=400" />
                            </div>
                            <div className="space-y-1">
                                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-wider">Merchandise</span>
                                <h3 className="font-semibold text-sm truncate text-on-surface">Pro-Grip Yoga Mat</h3>
                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-theme-primary-main font-bold text-base">$45.00</span>
                                    <span className="text-[11px] text-on-surface-variant">Stock: 12</span>
                                </div>
                            </div>
                        </div>

                        {/* Product Card 5 */}
                        <div className="group bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-theme-primary-main/30 active:scale-95">
                            <div className="aspect-square rounded-lg bg-surface mb-3 overflow-hidden flex items-center justify-center">
                                <img alt="Gym Bag" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400&h=400" />
                            </div>
                            <div className="space-y-1">
                                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-wider">Merchandise</span>
                                <h3 className="font-semibold text-sm truncate text-on-surface">Hybrid Duffel 40L</h3>
                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-theme-primary-main font-bold text-base">$55.00</span>
                                    <span className="text-[11px] text-red-500 font-medium">Stock: 2</span>
                                </div>
                            </div>
                        </div>

                        {/* Product Card 6 */}
                        <div className="group bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-theme-primary-main/30 active:scale-95">
                            <div className="aspect-square rounded-lg bg-surface mb-3 overflow-hidden flex items-center justify-center">
                                <img alt="Water Bottle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=400&h=400" />
                            </div>
                            <div className="space-y-1">
                                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-wider">Drink</span>
                                <h3 className="font-semibold text-sm truncate text-on-surface">Hydro-Steel 750ml</h3>
                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-theme-primary-main font-bold text-base">$19.99</span>
                                    <span className="text-[11px] text-on-surface-variant">Stock: 38</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Right Panel: Checkout Summary (40%) */}
            <section className="w-[40%] bg-surface-container-low flex flex-col overflow-hidden border-l border-theme-border">
                <div className="p-6 pb-2">
                    <h2 className="text-xl font-bold tracking-tight text-on-surface mb-4">Current Order</h2>

                    {/* Link Member */}
                    <div className="relative mb-6">
                        <input className="w-full h-11 bg-surface-container-lowest border border-theme-border rounded-xl px-11 text-sm focus:ring-2 focus:ring-theme-primary-main/20 outline-none text-on-surface" placeholder="Link to Member (Name or ID)..." type="text" />
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">person_search</span>
                    </div>

                    {/* Line Items Table Header */}
                    <div className="grid grid-cols-12 gap-2 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold px-2 mb-2">
                        <div className="col-span-6">Item</div>
                        <div className="col-span-3 text-center">Qty</div>
                        <div className="col-span-3 text-right">Price</div>
                    </div>
                </div>

                {/* Scrollable Line Items */}
                <div className="flex-1 overflow-y-auto custom-scrollbar px-6 space-y-3">
                    {/* Item 1 */}
                    <div className="bg-surface-container-lowest p-3 rounded-xl flex items-center gap-3 group transition-colors hover:bg-white border border-theme-border shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-surface overflow-hidden flex-shrink-0 flex items-center justify-center">
                            <img alt="Protein" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=100&h=100" />
                        </div>
                        <div className="flex-1 grid grid-cols-12 items-center gap-2">
                            <div className="col-span-6">
                                <p className="text-xs font-semibold text-on-surface truncate">Gold Standard Whey</p>
                                <p className="text-[10px] text-on-surface-variant">$64.99 / unit</p>
                            </div>
                            <div className="col-span-3 flex items-center justify-center gap-2">
                                <button className="w-6 h-6 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-slate-200 transition-colors text-on-surface">
                                    <span className="material-symbols-outlined text-[14px]">remove</span>
                                </button>
                                <span className="text-xs font-bold w-4 text-center text-on-surface">1</span>
                                <button className="w-6 h-6 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-slate-200 transition-colors text-on-surface">
                                    <span className="material-symbols-outlined text-[14px]">add</span>
                                </button>
                            </div>
                            <div className="col-span-3 text-right flex items-center justify-end gap-2">
                                <span className="text-xs font-bold text-on-surface">$64.99</span>
                                <button className="text-on-surface-variant hover:text-red-500 transition-colors">
                                    <span className="material-symbols-outlined text-[16px]">close</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-surface-container-lowest p-3 rounded-xl flex items-center gap-3 group transition-colors hover:bg-white border border-theme-border shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-surface overflow-hidden flex-shrink-0 flex items-center justify-center">
                            <img alt="Drink" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=100&h=100" />
                        </div>
                        <div className="flex-1 grid grid-cols-12 items-center gap-2">
                            <div className="col-span-6">
                                <p className="text-xs font-semibold text-on-surface truncate">Pre-Workout Spark</p>
                                <p className="text-[10px] text-on-surface-variant">$4.50 / unit</p>
                            </div>
                            <div className="col-span-3 flex items-center justify-center gap-2">
                                <button className="w-6 h-6 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-slate-200 transition-colors text-on-surface">
                                    <span className="material-symbols-outlined text-[14px]">remove</span>
                                </button>
                                <span className="text-xs font-bold w-4 text-center text-on-surface">2</span>
                                <button className="w-6 h-6 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-slate-200 transition-colors text-on-surface">
                                    <span className="material-symbols-outlined text-[14px]">add</span>
                                </button>
                            </div>
                            <div className="col-span-3 text-right flex items-center justify-end gap-2">
                                <span className="text-xs font-bold text-on-surface">$9.00</span>
                                <button className="text-on-surface-variant hover:text-red-500 transition-colors">
                                    <span className="material-symbols-outlined text-[16px]">close</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Summary Footer */}
                <div className="bg-surface-container-lowest p-6 border-t border-theme-border shadow-2xl z-10">
                    <div className="space-y-2 mb-6">
                        <div className="flex justify-between text-xs font-medium text-on-surface-variant">
                            <span>Subtotal</span>
                            <span>$73.99</span>
                        </div>
                        <div className="flex justify-between text-xs font-medium text-on-surface-variant">
                            <span>GST (5%)</span>
                            <span>$3.70</span>
                        </div>
                        <div className="flex justify-between items-end pt-2 border-t border-dashed border-theme-border">
                            <span className="text-sm font-bold text-on-surface">Total</span>
                            <span className="text-2xl font-black text-theme-primary-main tracking-tight">$77.69</span>
                        </div>
                    </div>

                    {/* Payment Details */}
                    <div className="space-y-4 text-on-surface">
                        <div className="grid grid-cols-4 gap-2">
                            <button className="flex flex-col items-center justify-center py-2 rounded-xl border border-theme-primary-main/30 bg-theme-primary-light text-theme-primary-main transition-all">
                                <span className="material-symbols-outlined text-[18px]">payments</span>
                                <span className="text-[9px] font-bold uppercase mt-1">Cash</span>
                            </button>
                            <button className="flex flex-col items-center justify-center py-2 rounded-xl border border-theme-border hover:bg-slate-50 transition-all text-on-surface-variant">
                                <span className="material-symbols-outlined text-[18px]">credit_card</span>
                                <span className="text-[9px] font-bold uppercase mt-1">Card</span>
                            </button>
                            <button className="flex flex-col items-center justify-center py-2 rounded-xl border border-theme-border hover:bg-slate-50 transition-all text-on-surface-variant">
                                <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                                <span className="text-[9px] font-bold uppercase mt-1">UPI</span>
                            </button>
                            <button className="flex flex-col items-center justify-center py-2 rounded-xl border border-theme-border hover:bg-slate-50 transition-all text-on-surface-variant">
                                <span className="material-symbols-outlined text-[18px]">language</span>
                                <span className="text-[9px] font-bold uppercase mt-1">Online</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1.5 block">Amount Received</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-on-surface-variant font-bold">$</span>
                                    <input className="w-full h-10 bg-surface border border-theme-border rounded-xl pl-6 text-sm font-bold focus:ring-2 focus:ring-theme-primary-main/20 outline-none" type="number" defaultValue="100.00" />
                                </div>
                            </div>
                            <div>
                                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1.5 block">Change Due</label>
                                <div className="w-full h-10 bg-theme-primary-light rounded-xl flex items-center px-4">
                                    <span className="text-sm font-bold text-theme-primary-main">$22.31</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-2">
                            <button className="h-12 rounded-xl border border-theme-border text-on-surface-variant text-sm font-bold hover:bg-slate-50 transition-all">Clear Order</button>
                            <button className="h-12 rounded-xl bg-theme-primary-main text-white text-sm font-bold shadow-lg hover:bg-theme-primary-hover active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                Complete Sale
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
