'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Activity,
  LayoutDashboard,
  UserCheck,
  Calendar,
  FileText,
  Users,
  MessageSquare,
  HelpCircle,
  Search,
  Mail,
  Bell,
  ChevronDown,
  Plus,
  Upload,
  ArrowUpRight,
  UserPlus,
  CreditCard,
  CalendarPlus,
  Video,
  DollarSign,
  Settings,
  Pause,
  Square
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [theme, setTheme] = useState('default');

  return (
    <div className={`absolute inset-0 flex items-center justify-center p-0 sm:p-4 lg:p-8 overflow-hidden bg-theme-bg-main ${theme === 'default' ? '' : `theme-${theme}`}`}>
      <div className="w-full max-w-[1400px] h-full bg-theme-bg-panel sm:rounded-[2rem] shadow-2xl flex overflow-hidden ring-1 ring-gray-900/5">
        {/* Sidebar */}
        <aside className="w-[220px] flex flex-col h-full bg-theme-bg-panel border-r border-theme-border flex-shrink-0 pt-4 pb-4 px-3">
          <div className="flex items-center gap-2 px-3 mb-5">
            <Activity className="w-6 h-6 text-app-primary" />
            <span className="text-lg font-bold text-theme-text-main">FitCore Pro</span>
          </div>
          <nav className="flex-1 overflow-y-auto space-y-4">
            <ul className="space-y-1">
              <li>
                <a className={`flex items-center gap-3 px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-theme-sidebar-active-bg text-theme-sidebar-active-text' : 'text-theme-text-muted hover:bg-theme-bg-main'}`} href="#" onClick={(e) => { e.preventDefault(); setActiveTab('dashboard'); }}>
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </a>
              </li>
              <li>
                <a className="flex items-center justify-between px-3 py-1.5 text-theme-text-muted hover:bg-theme-bg-main rounded-xl text-sm font-medium transition-colors" href="#">
                  <div className="flex items-center gap-3">
                    <UserCheck className="w-4 h-4" />
                    Attendance
                  </div>
                  <span className="bg-theme-alert-bg text-white text-[10px] font-bold px-2 py-0.5 rounded-full">15</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors" href="#">
                  <Calendar className="w-4 h-4" />
                  Schedule
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors" href="#">
                  <FileText className="w-4 h-4" />
                  Reports
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors" href="#">
                  <Users className="w-4 h-4" />
                  Members
                </a>
              </li>
            </ul>
            <div>
              <h4 className="px-3 text-[10px] font-semibold text-theme-text-muted tracking-wider mb-1 uppercase">Quick Manage</h4>
              <ul className="space-y-1">
                <li>
                  <a className="flex items-center justify-between px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors" href="#">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4" />
                      Follow-ups
                    </div>
                    <span className="bg-cyan-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">15</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-3 px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors" href="#">
                    <HelpCircle className="w-4 h-4" />
                    Inquiries
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="px-3 text-[10px] font-semibold text-theme-text-muted tracking-wider mb-1 uppercase">General</h4>
              <ul className="space-y-1">
                <li>
                  <a className={`flex items-center gap-3 px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-theme-sidebar-active-bg text-theme-sidebar-active-text' : 'text-theme-text-muted hover:bg-theme-bg-main'}`} href="#" onClick={(e) => { e.preventDefault(); setActiveTab('settings'); }}>
                    <Settings className="w-4 h-4" />
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Header */}
          <header className="h-14 px-4 md:px-6 flex items-center justify-between border-b border-transparent shrink-0">
            <div className="relative w-full max-w-sm hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input className="w-full pl-9 pr-12 py-1.5 bg-theme-bg-card rounded-full border-0 shadow-sm text-xs focus:ring-2 focus:ring-sky-100 placeholder-gray-400" placeholder="Search task" type="text" />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-theme-text-muted bg-theme-border border border-theme-border rounded">⌘</kbd>
                <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded">F</kbd>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-theme-text-main">
                <Mail className="w-5 h-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
              <div className="h-6 w-px bg-gray-200 mx-1"></div>
              <div className="flex items-center gap-2 cursor-pointer">
                <Image alt="User Avatar" width={32} height={32} className="w-8 h-8 rounded-full object-cover border border-gray-200" src="https://lh3.googleusercontent.com/aida/ADBb0ujn_97otPHL33wNPUmLgKSwiRXowCphLbGw82Wc5y3zU-Lo0swQuJxYmS7-kweQGuiq9A59zg5ID_-rRGRstgb6XwvgGdWoVw3dToJtwbb9lmTNUYzMVgQJ8lVxfjcrUeA-M9PdufPhluEe86Vz_TYc99jKyZENtwaxcmjY1wKfQbadEhmqY4ME4_BG6Q-x3VJNMPkFw96KZrTxVLmuo-YuPkGhR1il6vuCBF3d0FHION045PHlFBgFKQ" referrerPolicy="no-referrer" />
                <div>
                  <p className="text-xs font-semibold text-gray-800 leading-tight">Ravi Sharma</p>
                  <p className="text-[10px] text-gray-500">ravi.sharma@fitcore.com</p>
                </div>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </div>
            </div>
          </header>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            {activeTab === 'dashboard' ? (
              <>
                <div className="flex items-end justify-between mb-4 mt-1">
              <div>
                <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Dashboard</h1>
                <p className="text-gray-500 mt-1 text-sm">Manage gym operations and member performance with ease.</p>
              </div>
              <div className="flex gap-3">
                <button className="bg-[#1ca1f1] hover:bg-theme-primary-hover text-white px-4 py-1.5 rounded-xl text-sm font-medium shadow-sm flex items-center gap-2 transition-colors">
                  <Plus className="w-4 h-4" />
                  Add Member
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-4 py-1.5 rounded-xl text-sm font-medium shadow-sm flex items-center gap-2 transition-colors">
                  <Upload className="w-4 h-4" />
                  Import Data
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded-[20px] p-4 text-white shadow-sm relative overflow-hidden">
                <h3 className="text-sky-50 font-medium mb-1 text-sm">Total Members</h3>
                <div className="text-3xl font-bold mb-1">47</div>
                <p className="text-sky-100 text-[10px]">5 Increased from last month</p>
                <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-sky-200" />
              </div>
              <div className="bg-theme-primary-light rounded-[20px] p-4 shadow-sm relative border border-theme-primary-light">
                <h3 className="text-theme-primary-text font-medium mb-1 text-sm">Active Members</h3>
                <div className="text-3xl font-bold text-theme-primary-text mb-1">47</div>
                <p className="text-sky-600/70 text-[10px]">5 Increased from last month</p>
                <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-sky-400" />
              </div>
              <div className="bg-rose-50 rounded-[20px] p-4 shadow-sm relative border border-rose-100">
                <h3 className="text-rose-800 font-medium mb-1 text-sm">Expired Members</h3>
                <div className="text-3xl font-bold text-rose-600 mb-1">13</div>
                <p className="text-rose-600/70 text-[10px]">3 Increased from last month</p>
                <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-rose-400" />
              </div>
              <div className="bg-amber-50 rounded-[20px] p-4 shadow-sm relative border border-amber-100">
                <h3 className="text-amber-800 font-medium mb-1 text-sm">Pending Payments</h3>
                <div className="text-3xl font-bold text-amber-500 mb-1">8</div>
                <p className="text-amber-600/70 text-[10px]">3 Increased from last month</p>
                <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-amber-400" />
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
              <div className="col-span-1 lg:col-span-2 bg-white rounded-[20px] p-4 shadow-sm border border-theme-border">
                <h3 className="text-gray-800 font-semibold mb-3 text-sm">Attendance Analytics</h3>
                <div className="flex items-end justify-between pt-4 px-2 gap-2">
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <div className="w-full max-w-[24px] h-16 rounded-full border border-theme-primary-main relative overflow-hidden bg-sky-50">
                      <div className="absolute bottom-0 w-full h-[60%] bg-theme-primary-main rounded-b-full"></div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">M</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <div className="w-full max-w-[24px] h-20 rounded-full border border-emerald-300 relative overflow-hidden bg-emerald-50">
                      <div className="absolute bottom-0 w-full h-full striped-pattern rounded-full opacity-30"></div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">T</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <div className="w-full max-w-[24px] h-24 rounded-full relative overflow-hidden bg-sky-500">
                    </div>
                    <span className="text-[10px] text-gray-800 font-bold">W</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <div className="w-full max-w-[24px] h-16 rounded-full border border-sky-300 relative overflow-hidden bg-sky-50">
                      <div className="absolute bottom-0 w-full h-[40%] striped-pattern-blue rounded-b-full"></div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">T</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <div className="w-full max-w-[24px] h-14 rounded-full border border-sky-300 relative overflow-hidden bg-sky-50">
                      <div className="absolute bottom-0 w-full h-[80%] striped-pattern-blue rounded-b-full"></div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">F</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <div className="w-full max-w-[24px] h-16 rounded-full border border-sky-300 relative overflow-hidden bg-sky-50">
                      <div className="absolute bottom-0 w-full h-[50%] bg-theme-primary-light rounded-b-full"></div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">S</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <div className="w-full max-w-[24px] h-20 rounded-full border border-gray-300 relative overflow-hidden bg-gray-50">
                      <div className="absolute bottom-0 w-full h-full striped-pattern rounded-full opacity-30"></div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">S</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <div className="w-full max-w-[24px] h-16 rounded-full border border-sky-300 relative overflow-hidden bg-sky-50">
                      <div className="absolute bottom-0 w-full h-[30%] striped-pattern-blue rounded-b-full"></div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">M</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <div className="w-full max-w-[24px] h-20 rounded-full border border-sky-300 relative overflow-hidden bg-sky-50">
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">M</span>
                  </div>
                </div>
              </div>
              <div className="col-span-1 bg-white rounded-[20px] p-4 shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-gray-800 font-semibold mb-2 text-sm">Today&apos;s Alerts</h3>
                  <div className="mb-2">
                    <div className="text-2xl font-bold text-gray-900 inline-block">6</div>
                    <span className="text-xs text-gray-600 ml-1">Memberships Expiring</span>
                  </div>
                  <button className="bg-[#1ca1f1] hover:bg-sky-500 text-white text-[10px] px-3 py-1.5 rounded-lg font-medium shadow-sm transition-colors">
                    Renew Now
                  </button>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 pt-2 mt-2">
                  <div className="text-center">
                    <div className="font-bold text-gray-800 text-sm">49+</div>
                    <div className="text-[10px] text-gray-500">Birthdays</div>
                  </div>
                  <div className="w-px h-6 bg-gray-100"></div>
                  <div className="text-center">
                    <div className="font-bold text-gray-800 text-sm">49+</div>
                    <div className="text-[10px] text-gray-500">Pending Payments</div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 bg-white rounded-[20px] p-4 shadow-sm border border-gray-100">
                <h3 className="text-gray-800 font-semibold mb-3 text-sm">Quick Actions</h3>
                <div className="grid grid-cols-3 gap-y-2 gap-x-2">
                  <div className="flex flex-col items-center text-center cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center mb-0.5 group-hover:bg-theme-primary-light transition-colors">
                      <UserPlus className="w-4 h-4 text-theme-primary-text" />
                    </div>
                    <span className="text-[9px] text-gray-600 font-medium leading-tight">Add<br />Member</span>
                  </div>
                  <div className="flex flex-col items-center text-center cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mb-0.5 group-hover:bg-blue-100 transition-colors">
                      <CreditCard className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-[9px] text-gray-600 font-medium leading-tight">Collect<br />Payment</span>
                  </div>
                  <div className="flex flex-col items-center text-center cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center mb-0.5 group-hover:bg-purple-100 transition-colors">
                      <CalendarPlus className="w-4 h-4 text-purple-500" />
                    </div>
                    <span className="text-[9px] text-gray-600 font-medium leading-tight">Create<br />Class</span>
                  </div>
                  <div className="flex flex-col items-center text-center cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center mb-0.5 group-hover:bg-indigo-100 transition-colors">
                      <Video className="w-4 h-4 text-indigo-500" />
                    </div>
                    <span className="text-[9px] text-gray-600 font-medium leading-tight">Create<br />Class</span>
                  </div>
                  <div className="flex flex-col items-center text-center cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center mb-0.5 group-hover:bg-pink-100 transition-colors">
                      <DollarSign className="w-4 h-4 text-pink-500" />
                    </div>
                    <span className="text-[9px] text-gray-600 font-medium leading-tight">Create<br />Payment</span>
                  </div>
                  <div className="flex flex-col items-center text-center cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center mb-0.5 group-hover:bg-orange-100 transition-colors">
                      <Settings className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="text-[9px] text-gray-600 font-medium leading-tight">Token<br />Settings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="col-span-1 lg:col-span-2 bg-white rounded-[20px] p-4 shadow-sm border border-gray-100">
                <h3 className="text-gray-800 font-semibold mb-2 text-sm">Today&apos;s Schedule</h3>
                <table className="w-full text-xs text-left">
                  <thead className="text-gray-400 text-[10px] font-medium border-b border-theme-border">
                    <tr>
                      <th className="pb-1.5 font-normal">Trainer</th>
                      <th className="pb-1.5 font-normal">Status</th>
                      <th className="pb-1.5 font-normal text-right">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr>
                      <td className="py-1.5">
                        <div className="flex items-center gap-2">
                          <Image alt="Priya" width={24} height={24} className="w-6 h-6 rounded-full object-cover bg-gray-100" src="https://lh3.googleusercontent.com/aida/ADBb0ujn_97otPHL33wNPUmLgKSwiRXowCphLbGw82Wc5y3zU-Lo0swQuJxYmS7-kweQGuiq9A59zg5ID_-rRGRstgb6XwvgGdWoVw3dToJtwbb9lmTNUYzMVgQJ8lVxfjcrUeA-M9PdufPhluEe86Vz_TYc99jKyZENtwaxcmjY1wKfQbadEhmqY4ME4_BG6Q-x3VJNMPkFw96KZrTxVLmuo-YuPkGhR1il6vuCBF3d0FHION045PHlFBgFKQ" referrerPolicy="no-referrer" />
                          <span className="font-medium text-gray-800">Priya</span>
                        </div>
                      </td>
                      <td className="py-1.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
                          Completed
                        </span>
                      </td>
                      <td className="py-1.5 text-right text-gray-500">10:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1.5">
                        <div className="flex items-center gap-2">
                          <Image alt="Rahul" width={24} height={24} className="w-6 h-6 rounded-full object-cover bg-gray-100" src="https://lh3.googleusercontent.com/aida/ADBb0ujn_97otPHL33wNPUmLgKSwiRXowCphLbGw82Wc5y3zU-Lo0swQuJxYmS7-kweQGuiq9A59zg5ID_-rRGRstgb6XwvgGdWoVw3dToJtwbb9lmTNUYzMVgQJ8lVxfjcrUeA-M9PdufPhluEe86Vz_TYc99jKyZENtwaxcmjY1wKfQbadEhmqY4ME4_BG6Q-x3VJNMPkFw96KZrTxVLmuo-YuPkGhR1il6vuCBF3d0FHION045PHlFBgFKQ" referrerPolicy="no-referrer" />
                          <span className="font-medium text-gray-800">Rahul</span>
                        </div>
                      </td>
                      <td className="py-1.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-medium bg-yellow-50 text-yellow-600 border border-yellow-100">
                          In Progress
                        </span>
                      </td>
                      <td className="py-1.5 text-right text-gray-500">12:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1.5">
                        <div className="flex items-center gap-2">
                          <Image alt="Meena" width={24} height={24} className="w-6 h-6 rounded-full object-cover bg-gray-100" src="https://lh3.googleusercontent.com/aida/ADBb0ujn_97otPHL33wNPUmLgKSwiRXowCphLbGw82Wc5y3zU-Lo0swQuJxYmS7-kweQGuiq9A59zg5ID_-rRGRstgb6XwvgGdWoVw3dToJtwbb9lmTNUYzMVgQJ8lVxfjcrUeA-M9PdufPhluEe86Vz_TYc99jKyZENtwaxcmjY1wKfQbadEhmqY4ME4_BG6Q-x3VJNMPkFw96KZrTxVLmuo-YuPkGhR1il6vuCBF3d0FHION045PHlFBgFKQ" referrerPolicy="no-referrer" />
                          <span className="font-medium text-gray-800">Meena</span>
                        </div>
                      </td>
                      <td className="py-1.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-medium bg-orange-50 text-orange-600 border border-orange-100">
                          Pending
                        </span>
                      </td>
                      <td className="py-1.5 text-right text-gray-500">10:30 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1.5">
                        <div className="flex items-center gap-2">
                          <Image alt="Suresh" width={24} height={24} className="w-6 h-6 rounded-full object-cover bg-gray-100" src="https://lh3.googleusercontent.com/aida/ADBb0ujn_97otPHL33wNPUmLgKSwiRXowCphLbGw82Wc5y3zU-Lo0swQuJxYmS7-kweQGuiq9A59zg5ID_-rRGRstgb6XwvgGdWoVw3dToJtwbb9lmTNUYzMVgQJ8lVxfjcrUeA-M9PdufPhluEe86Vz_TYc99jKyZENtwaxcmjY1wKfQbadEhmqY4ME4_BG6Q-x3VJNMPkFw96KZrTxVLmuo-YuPkGhR1il6vuCBF3d0FHION045PHlFBgFKQ" referrerPolicy="no-referrer" />
                          <span className="font-medium text-gray-800">Suresh</span>
                        </div>
                      </td>
                      <td className="py-1.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-medium bg-rose-50 text-rose-600 border border-rose-100">
                          Pending
                        </span>
                      </td>
                      <td className="py-1.5 text-right text-gray-500">10:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-span-1 bg-white rounded-[20px] p-4 shadow-sm border border-gray-100 flex flex-col">
                <h3 className="text-gray-800 font-semibold mb-2 w-full text-left text-sm">Collection Progress</h3>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                      <path className="text-[#1ca1f1]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="78, 100" strokeLinecap="round" strokeWidth="4"></path>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-gray-800">78%</span>
                      <span className="text-[8px] text-gray-500">collected</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 bg-white rounded-[20px] p-4 shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-gray-800 font-semibold mb-2 text-sm">Revenue Tracker</h3>
                  <p className="text-[10px] text-gray-500 mb-1">Revenue</p>
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">₹12,500</h2>
                    <div className="flex gap-1">
                      <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center text-sky-500 cursor-pointer">
                        <Pause className="w-2.5 h-2.5" fill="currentColor" />
                      </div>
                      <div className="w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center text-white cursor-pointer shadow-sm">
                        <Square className="w-2.5 h-2.5" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] text-gray-500">Monthly Growth:</p>
                    <p className="text-xs font-bold text-sky-500">+12%</p>
                  </div>
                  <div className="w-16 h-8 opacity-70">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                      <path d="M0 30 Q 15 10, 30 20 T 60 15 T 100 5 L 100 40 L 0 40 Z" fill="url(#gradient)" opacity="0.2"></path>
                      <path d="M0 30 Q 15 10, 30 20 T 60 15 T 100 5" fill="none" stroke="#8b5cf6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      <defs>
                        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#8b5cf6"></stop>
                          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <div className="mt-4">
                <h1 className="text-2xl font-bold text-theme-text-main tracking-tight mb-4">Settings</h1>
                <div className="bg-theme-bg-card rounded-[20px] p-6 shadow-sm border border-theme-border">
                  <h3 className="text-lg font-semibold text-theme-text-main mb-4">Theme Customization</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    <button onClick={() => setTheme('default')} className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 ${theme === 'default' ? 'border-theme-primary-main bg-theme-primary-light' : 'border-theme-border hover:border-theme-text-muted'}`}>
                      <div className="w-8 h-8 rounded-full bg-[#0ea5e9]"></div>
                      <span className="text-sm font-medium text-theme-text-main">Default Blue</span>
                    </button>
                    <button onClick={() => setTheme('purple')} className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 ${theme === 'purple' ? 'border-theme-primary-main bg-theme-primary-light' : 'border-theme-border hover:border-theme-text-muted'}`}>
                      <div className="w-8 h-8 rounded-full bg-[#a855f7]"></div>
                      <span className="text-sm font-medium text-theme-text-main">Purple Gradient</span>
                    </button>
                    <button onClick={() => setTheme('dark')} className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 ${theme === 'dark' ? 'border-theme-primary-main bg-theme-primary-light' : 'border-theme-border hover:border-theme-text-muted'}`}>
                      <div className="w-8 h-8 rounded-full bg-[#1e293b]"></div>
                      <span className="text-sm font-medium text-theme-text-main">Dark Mode</span>
                    </button>
                    <button onClick={() => setTheme('yellow')} className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 ${theme === 'yellow' ? 'border-theme-primary-main bg-theme-primary-light' : 'border-theme-border hover:border-theme-text-muted'}`}>
                      <div className="w-8 h-8 rounded-full bg-[#eab308]"></div>
                      <span className="text-sm font-medium text-theme-text-main">Yellow</span>
                    </button>
                    <button onClick={() => setTheme('darkblue')} className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 ${theme === 'darkblue' ? 'border-theme-primary-main bg-theme-primary-light' : 'border-theme-border hover:border-theme-text-muted'}`}>
                      <div className="w-8 h-8 rounded-full bg-[#0c4a6e]"></div>
                      <span className="text-sm font-medium text-theme-text-main">Dark Blue</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
