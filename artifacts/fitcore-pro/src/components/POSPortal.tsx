import { useMemo, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useListPosProducts,
    useCreatePosSale,
    useCreatePosProduct,
    getListPosSalesQueryKey,
    getListPosProductsQueryKey,
} from '@workspace/api-client-react';
import { formatINR } from '@/lib/format';

export default function POSPortal() {
    const qc = useQueryClient();
    const { data: products = [], isLoading } = useListPosProducts();
    const createSale = useCreatePosSale({
        mutation: {
            onSuccess: () => {
                qc.invalidateQueries({ queryKey: getListPosSalesQueryKey() });
                qc.invalidateQueries({ queryKey: getListPosProductsQueryKey() });
            },
        },
    });
    const createProduct = useCreatePosProduct({
        mutation: { onSuccess: () => qc.invalidateQueries({ queryKey: getListPosProductsQueryKey() }) },
    });
    const [cart, setCart] = useState<Record<string, number>>({});
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [paymentMode, setPaymentMode] = useState('UPI');
    const [showAdd, setShowAdd] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: '', category: 'Supplement', price: '', stock: '' });

    const categories = useMemo(() => ['All', ...Array.from(new Set(products.map((p) => p.category)))], [products]);

    const filtered = products.filter((p) => {
        if (category !== 'All' && p.category !== category) return false;
        if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
    });

    const cartItems = products
        .filter((p) => cart[p.id] > 0)
        .map((p) => ({ ...p, quantity: cart[p.id] }));
    const subtotal = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + tax;

    const addToCart = (id: string) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
    const removeFromCart = (id: string) => setCart((c) => {
        const n = (c[id] ?? 0) - 1;
        if (n <= 0) { const { [id]: _, ...rest } = c; return rest; }
        return { ...c, [id]: n };
    });

    const checkout = () => {
        if (cartItems.length === 0) return;
        createSale.mutate(
            { data: { items: cartItems.map((i) => ({ productId: i.id, quantity: i.quantity })), paymentMode } },
            { onSuccess: () => setCart({}) },
        );
    };

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 pb-12">
            <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Point of Sale</h1>
                    <button
                        onClick={() => setShowAdd(true)}
                        className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-4 py-2 rounded-lg text-sm font-semibold"
                    >
                        + New Product
                    </button>
                </div>

                {showAdd && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowAdd(false)}>
                        <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-3" onClick={(e) => e.stopPropagation()}>
                            <h2 className="text-lg font-bold">Add Product</h2>
                            <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Product name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
                            <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}>
                                <option>Supplement</option><option>Apparel</option><option>Equipment</option><option>Beverage</option><option>Snack</option>
                            </select>
                            <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Price (₹)" type="number" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                            <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Stock quantity" type="number" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} />
                            <div className="flex gap-2 justify-end pt-2">
                                <button className="px-4 py-2 text-sm" onClick={() => setShowAdd(false)}>Cancel</button>
                                <button
                                    disabled={createProduct.isPending || !newProduct.name || !newProduct.price}
                                    className="bg-theme-primary-main text-white px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-50"
                                    onClick={() => {
                                        createProduct.mutate(
                                            { data: { name: newProduct.name, category: newProduct.category, price: Math.round(Number(newProduct.price) * 100), stock: Number(newProduct.stock || 0) } },
                                            { onSuccess: () => { setShowAdd(false); setNewProduct({ name: '', category: 'Supplement', price: '', stock: '' }); } },
                                        );
                                    }}
                                >
                                    {createProduct.isPending ? 'Saving…' : 'Save Product'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="bg-theme-bg-card border border-theme-border rounded-2xl p-4 shadow-sm flex gap-3">
                    <input
                        className="flex-1 px-3 py-2 bg-theme-bg-main rounded-lg text-sm"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="px-3 py-2 bg-theme-bg-main rounded-lg text-sm"
                    >
                        {categories.map((c) => <option key={c}>{c}</option>)}
                    </select>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {isLoading && <div className="col-span-full text-center py-8 text-theme-text-muted">Loading products…</div>}
                    {filtered.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => addToCart(p.id)}
                            className="bg-theme-bg-card border border-theme-border rounded-xl p-4 hover:border-theme-primary-main text-left transition-colors"
                        >
                            <div className="text-[10px] uppercase tracking-wide text-theme-text-muted mb-1">{p.category}</div>
                            <div className="font-semibold text-theme-text-main mb-2">{p.name}</div>
                            <div className="flex items-center justify-between">
                                <span className="text-theme-primary-main font-bold">{formatINR(p.price)}</span>
                                <span className="text-xs text-theme-text-muted">Stock: {p.stock}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <aside className="bg-theme-bg-card border border-theme-border rounded-2xl p-5 shadow-sm h-fit sticky top-4">
                <h2 className="text-lg font-bold text-theme-text-main mb-4">Cart</h2>
                {cartItems.length === 0 && (
                    <p className="text-sm text-theme-text-muted">Click a product to add it to the cart.</p>
                )}
                <div className="space-y-3 mb-4">
                    {cartItems.map((i) => (
                        <div key={i.id} className="flex items-center justify-between text-sm">
                            <div>
                                <div className="font-medium">{i.name}</div>
                                <div className="text-xs text-theme-text-muted">{formatINR(i.price)} × {i.quantity}</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => removeFromCart(i.id)} className="w-6 h-6 rounded bg-theme-bg-main text-theme-text-muted">−</button>
                                <span className="w-6 text-center">{i.quantity}</span>
                                <button onClick={() => addToCart(i.id)} className="w-6 h-6 rounded bg-theme-bg-main text-theme-text-muted">+</button>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length > 0 && (
                    <div className="border-t border-theme-border pt-3 space-y-2 text-sm">
                        <div className="flex justify-between text-theme-text-muted"><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
                        <div className="flex justify-between text-theme-text-muted"><span>Tax (18%)</span><span>{formatINR(tax)}</span></div>
                        <div className="flex justify-between font-bold text-theme-text-main text-base"><span>Total</span><span>{formatINR(total)}</span></div>
                        <select
                            value={paymentMode}
                            onChange={(e) => setPaymentMode(e.target.value)}
                            className="w-full mt-3 px-3 py-2 bg-theme-bg-main rounded-lg text-sm"
                        >
                            <option>UPI</option>
                            <option>Cash</option>
                            <option>Card</option>
                        </select>
                        <button
                            onClick={checkout}
                            disabled={createSale.isPending}
                            className="w-full mt-2 bg-theme-primary-main hover:bg-theme-primary-hover text-white py-2.5 rounded-lg font-semibold disabled:opacity-60"
                        >
                            {createSale.isPending ? 'Processing…' : 'Complete Sale'}
                        </button>
                    </div>
                )}
            </aside>
        </div>
    );
}
