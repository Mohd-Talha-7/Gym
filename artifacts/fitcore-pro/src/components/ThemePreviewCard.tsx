import React from "react";
import { Palette, Search, Edit2, Shield, X, HelpCircle, AlertCircle, Bell } from "lucide-react";

interface ThemePreviewCardProps {
    id: string;
    name: string;
    isActive: boolean;
    onSelect: (id: string) => void;
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        neutral: string;
        bgCards: string;
    };
    hex: {
        primary: string;
        secondary: string;
        tertiary: string;
        neutral: string;
    };
}

const ThemePreviewCard = ({ id, name, isActive, onSelect, colors, hex }: ThemePreviewCardProps) => {
    return (
        <div className="mb-4 w-full flex flex-col max-w-[600px]">
            {/* Title */}
            <div className="flex items-center gap-1.5 mb-1.5 w-full self-start">
                <Palette className="w-3.5 h-3.5 text-gray-400" />
                <h3 className="text-xs font-medium text-gray-500">{name}</h3>
            </div>

            {/* Card Content */}
            <div
                onClick={() => onSelect(id)}
                style={{ backgroundColor: colors.bgCards }}
                className={`w-full p-2.5 rounded-2xl border cursor-pointer transition-all duration-300 grid grid-cols-1 md:grid-cols-[1fr_1fr_1.5fr] gap-2 overflow-hidden ${isActive ? 'border-sky-500 ring-2 ring-sky-500/20 shadow-md scale-[1.01]' : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
            >
                {/* Column 1: Colors */}
                <div className="flex flex-col gap-1.5">
                    <div className="h-[46px] rounded-lg flex flex-col justify-between p-2" style={{ backgroundColor: colors.primary }}>
                        <div className="flex justify-between w-full text-white font-semibold text-[8px]">
                            <span>Primary</span>
                            <span>{hex.primary}</span>
                        </div>
                        <div className="flex h-2.5 rounded-sm w-full overflow-hidden mt-1 border border-white/20">
                            <div className="flex-1 bg-white/0"></div>
                            <div className="flex-1 bg-black/10"></div>
                            <div className="flex-1 bg-black/20"></div>
                            <div className="flex-1 bg-black/30"></div>
                            <div className="flex-1 bg-black/40"></div>
                            <div className="flex-1 bg-black/50"></div>
                            <div className="flex-1 bg-black/60"></div>
                            <div className="flex-1 bg-black/70"></div>
                        </div>
                    </div>

                    <div className="h-[46px] rounded-lg flex flex-col justify-between p-2" style={{ backgroundColor: colors.secondary }}>
                        <div className="flex justify-between w-full text-gray-800 font-semibold text-[8px]">
                            <span>Secondary</span>
                            <span>{hex.secondary}</span>
                        </div>
                        <div className="flex h-2.5 rounded-sm w-full overflow-hidden mt-1 border border-black/10">
                            <div className="flex-1 bg-white/70"></div>
                            <div className="flex-1 bg-white/50"></div>
                            <div className="flex-1 bg-white/30"></div>
                            <div className="flex-1 bg-white/0"></div>
                            <div className="flex-1 bg-black/10"></div>
                            <div className="flex-1 bg-black/20"></div>
                            <div className="flex-1 bg-black/30"></div>
                            <div className="flex-1 bg-black/40"></div>
                        </div>
                    </div>

                    <div className="h-[46px] rounded-lg flex flex-col justify-between p-2" style={{ backgroundColor: colors.tertiary }}>
                        <div className="flex justify-between w-full text-gray-800 font-semibold text-[8px]">
                            <span>Tertiary</span>
                            <span>{hex.tertiary}</span>
                        </div>
                        <div className="flex h-2.5 rounded-sm w-full overflow-hidden mt-1 border border-black/10">
                            <div className="flex-1 bg-white/40"></div>
                            <div className="flex-1 bg-white/20"></div>
                            <div className="flex-1 bg-white/0"></div>
                            <div className="flex-1 bg-black/10"></div>
                            <div className="flex-1 bg-black/20"></div>
                            <div className="flex-1 bg-black/30"></div>
                            <div className="flex-1 bg-black/40"></div>
                            <div className="flex-1 bg-black/50"></div>
                        </div>
                    </div>

                    <div className="h-[46px] rounded-lg flex flex-col justify-between p-2 bg-white border border-gray-200">
                        <div className="flex justify-between w-full text-gray-800 font-semibold text-[8px]">
                            <span>Neutral</span>
                            <span>{hex.neutral}</span>
                        </div>
                        <div className="flex h-2.5 rounded-sm w-full overflow-hidden mt-1 border border-gray-100">
                            <div className="flex-1 bg-gray-50"></div>
                            <div className="flex-1 bg-gray-100"></div>
                            <div className="flex-1 bg-gray-200"></div>
                            <div className="flex-1 bg-gray-300"></div>
                            <div className="flex-1 bg-gray-400"></div>
                            <div className="flex-1 bg-gray-500"></div>
                            <div className="flex-1 bg-gray-600"></div>
                            <div className="flex-1 bg-gray-800"></div>
                        </div>
                    </div>
                </div>

                {/* Column 2: Typography */}
                <div className="flex flex-col gap-1.5">
                    <div className="flex-[1.2] bg-white p-2 rounded-lg flex flex-col shadow-sm border border-gray-100/50">
                        <div className="flex justify-between text-[6px] text-gray-400 mb-0.5">
                            <span>Headline</span>
                            <span>Plus Jakarta Sans</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center text-3xl font-bold tracking-tight text-gray-800">Aa</div>
                    </div>

                    <div className="flex-1 bg-white p-2 rounded-lg flex flex-col shadow-sm border border-gray-100/50">
                        <div className="flex justify-between text-[6px] text-gray-400 mb-0.5">
                            <span>Body</span>
                            <span>Inter</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center text-2xl font-semibold text-gray-700">Aa</div>
                    </div>

                    <div className="flex-1 bg-white p-2 rounded-lg flex flex-col shadow-sm border border-gray-100/50">
                        <div className="flex justify-between text-[6px] text-gray-400 mb-0.5">
                            <span>Label</span>
                            <span>Inter</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center text-xl font-normal text-gray-600">Aa</div>
                    </div>
                </div>

                {/* Column 3: Components */}
                <div className="flex flex-col gap-1.5">
                    <div className="bg-white p-2 rounded-lg flex flex-col gap-1.5 shadow-sm border border-gray-100/50 justify-center h-[54px]">
                        <div className="flex gap-1.5">
                            <div className="px-2 py-1 rounded shadow-sm text-[8px] font-semibold flex-1 text-center text-white" style={{ backgroundColor: colors.primary }}>Primary</div>
                            <div className="px-2 py-1 rounded text-[8px] font-semibold flex-1 text-center" style={{ backgroundColor: colors.secondary, color: colors.primary }}>Secondary</div>
                        </div>
                        <div className="flex gap-1.5">
                            <div className="px-2 py-1 rounded text-[8px] font-semibold flex-1 text-center bg-gray-800 text-white">Inverted</div>
                            <div className="px-2 py-1 rounded text-[8px] font-semibold flex-1 text-center border bg-white" style={{ borderColor: colors.primary, color: colors.primary }}>Outlined</div>
                        </div>
                    </div>

                    <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100/50 flex items-center justify-center h-[36px]">
                        <div className="w-full bg-gray-50/50 border border-gray-200 rounded py-1 px-2 flex items-center gap-1.5">
                            <Search className="w-2.5 h-2.5 text-gray-400" />
                            <span className="text-[8px] text-gray-400">Search</span>
                        </div>
                    </div>

                    <div className="flex gap-1.5 flex-1 min-h-[92px]">
                        {/* Left tall block */}
                        <div className="flex-1 bg-white p-2 rounded-lg shadow-sm border border-gray-100/50 flex flex-col items-center justify-center gap-2">
                            <div className="w-5 h-5 rounded flex items-center justify-center text-white bg-gray-400">
                                <Edit2 className="w-2.5 h-2.5" />
                            </div>
                            <div className="w-full flex flex-col gap-1 opacity-80">
                                <div className="h-[3px] w-full rounded-full" style={{ backgroundColor: colors.primary }}></div>
                                <div className="h-[3px] w-3/4 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                                <div className="h-[3px] w-4/5 rounded-full bg-rose-500"></div>
                                <div className="h-[3px] w-1/2 rounded-full bg-rose-500"></div>
                            </div>
                        </div>

                        {/* Right blocks */}
                        <div className="flex-1 flex flex-col gap-1.5">
                            <div className="flex-1 bg-white p-2 rounded-lg shadow-sm border border-gray-100/50 flex items-center justify-center">
                                <div className="px-2 py-1 rounded flex items-center gap-1 text-white font-semibold text-[8px] shadow-sm w-full justify-center" style={{ backgroundColor: colors.primary }}>
                                    <Edit2 className="w-2 h-2" /> Label
                                </div>
                            </div>
                            <div className="flex-[1.5] bg-white p-1.5 rounded-lg shadow-sm border border-gray-100/50 flex flex-wrap items-center justify-center gap-1 content-center">
                                <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: colors.primary }}><Shield className="w-2 h-2" /></div>
                                <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-white bg-sky-400"><HelpCircle className="w-2 h-2" /></div>
                                <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-white bg-slate-600"><AlertCircle className="w-2 h-2" /></div>
                                <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-white bg-rose-500"><Bell className="w-2 h-2" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemePreviewCard;
