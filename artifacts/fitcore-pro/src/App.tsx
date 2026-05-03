import { useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useGetDashboardStats } from '@workspace/api-client-react';

import FollowUps from '@/components/FollowUps';
import UpcomingRenewals from '@/components/UpcomingRenewals';
import InconsistentClients from '@/components/InconsistentClients';
import InquiriesDashboard from '@/components/InquiriesDashboard';
import AddInquiry from '@/components/AddInquiry';
import InquiryDetail from '@/components/InquiryDetail';
import ClientsDashboard from '@/components/ClientsDashboard';
import AddClient from '@/components/AddClient';
import ClientProfile from '@/components/ClientProfile';
import BirthdaysAnniversaries from '@/components/BirthdaysAnniversaries';
import GroupClassBill from '@/components/GroupClassBill';
import POSPortal from '@/components/POSPortal';
import SportsBill from '@/components/SportsBill';
import SportsBillingHistory from '@/components/SportsBillingHistory';
import SportsClients from '@/components/SportsClients';
import SportsPackages from '@/components/SportsPackages';
import SportsReport from '@/components/SportsReport';
import MarkAttendance from '@/components/MarkAttendance';
import AttendanceReport from '@/components/AttendanceReport';
import ThemePreviewCard from '@/components/ThemePreviewCard';
import {
  Activity, LayoutDashboard, UserCheck, Calendar, FileText, Users, MessageSquare, HelpCircle, Search, Mail, Bell, ChevronDown, Plus, Upload, ArrowUpRight, UserPlus, CreditCard, CalendarPlus, Video, DollarSign, Settings, Pause, Square, ChevronUp, ClipboardList, RefreshCw, UserMinus, Cake, Gift, CalendarDays, CheckSquare, Medal, Package, Wallet, BarChart2, Contact, GraduationCap, Shield, Smartphone, Eye, LineChart
} from 'lucide-react';

const queryClient = new QueryClient();

function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [settingsTab, setSettingsTab] = useState('General');
  const [theme, setTheme] = useState('default');
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);
  const { data: stats } = useGetDashboardStats();

  return (
    <div className={`absolute inset-0 h-screen w-full overflow-hidden bg-theme-bg-main ${theme === 'default' ? '' : `theme-${theme}`}`}>
      <div className="w-full h-full bg-theme-bg-panel flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[220px] flex flex-col h-full bg-theme-bg-panel border-r border-theme-border flex-shrink-0 pt-4 pb-4 px-3">
          <div className="flex items-center gap-2 px-3 mb-5">
            <Activity className="w-6 h-6 text-app-primary" />
            <span className="text-lg font-bold text-theme-text-main">FitCore Pro</span>
          </div>
          <nav className="flex-1 overflow-y-auto space-y-5 pb-6 custom-scrollbar pr-2">
            {/* OVERVIEW */}
            <div>
              <h4 className="px-3 text-[10px] font-bold text-theme-text-muted tracking-wide mb-1 uppercase flex items-center justify-between cursor-pointer hover:text-theme-text-main">
                Overview
                <ChevronUp className="w-3 h-3" />
              </h4>
              <ul className="space-y-0.5">
                <li>
                  <a className={`flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-theme-sidebar-active-bg text-theme-sidebar-active-text border-l-[3px] border-theme-primary-main rounded-r-lg' : 'text-theme-text-muted hover:bg-theme-bg-main hover:text-theme-text-main rounded-lg ml-[3px]'}`} href="#" onClick={(e) => { e.preventDefault(); setActiveTab('dashboard'); }}>
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>

            {/* QUICK MANAGE */}
            <div>
              <h4 className="px-3 text-[10px] font-bold text-theme-text-muted tracking-wide mb-1 uppercase flex items-center justify-between cursor-pointer hover:text-theme-text-main">
                Quick Manage
                <ChevronUp className="w-3 h-3" />
              </h4>
              <ul className="space-y-0.5">
                {[
                  { name: 'Follow-ups', icon: ClipboardList, id: 'follow_ups' },
                  { name: 'Renewals', icon: RefreshCw, id: 'upcoming_renewals' },
                  { name: 'Inconsistent', icon: UserMinus, id: 'inconsistent_clients' },
                  { name: 'Birthdays & Anniversaries', icon: Cake, id: 'birthdays_anniversaries' },
                  { name: "Today's Schedule", icon: CalendarDays, id: 'schedule' },
                ].map((item) => (
                  <li key={item.name}>
                    <a className={`flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors ${activeTab === item.id ? 'bg-theme-sidebar-active-bg text-theme-sidebar-active-text border-l-[3px] border-theme-primary-main rounded-r-lg' : 'text-theme-text-muted hover:bg-theme-bg-main hover:text-theme-text-main rounded-lg ml-[3px]'}`} href="#" onClick={(e) => { e.preventDefault(); setActiveTab(item.id); }}>
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* GYM OPERATIONS */}
            <div>
              <h4 className="px-3 text-[10px] font-bold text-theme-text-muted tracking-wide mb-1 uppercase flex items-center justify-between cursor-pointer hover:text-theme-text-main">
                Gym Operations
                <ChevronUp className="w-3 h-3" />
              </h4>
              <ul className="space-y-0.5">
                {[
                  { name: 'Members', icon: Users, id: 'members' },
                  { name: 'Inquiries', icon: Search, id: 'inquiries' },
                  { name: 'PT Schedule', icon: Calendar, id: 'pt-schedule' },
                  { name: 'Group Classes', icon: Activity, id: 'group-classes' },
                ].map((item) => (
                  <li key={item.name}>
                    <a className={`flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors ${activeTab === item.id || (activeTab.startsWith('inquiries-') && item.id === 'inquiries') || (activeTab.startsWith('members-') && item.id === 'members') ? 'bg-theme-sidebar-active-bg text-theme-sidebar-active-text border-l-[3px] border-theme-primary-main rounded-r-lg' : 'text-theme-text-muted hover:bg-theme-bg-main hover:text-theme-text-main rounded-lg ml-[3px]'}`} href="#" onClick={(e) => { e.preventDefault(); setActiveTab(item.id); }}>
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => setIsAttendanceOpen(!isAttendanceOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium transition-colors text-theme-text-muted hover:bg-theme-bg-main hover:text-theme-text-main rounded-lg ml-[3px]"
                  >
                    <div className="flex items-center gap-3">
                      <CheckSquare className="w-4 h-4" />
                      Attendance
                    </div>
                    {isAttendanceOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {isAttendanceOpen && (
                    <ul className="mt-1 space-y-0.5">
                      {[
                        { name: 'Mark', icon: UserCheck, id: 'attendance-mark' },
                        { name: 'Report', icon: BarChart2, id: 'attendance-report' },
                      ].map((subItem) => (
                        <li key={subItem.name}>
                          <a
                            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors ${activeTab === subItem.id ? 'bg-theme-sidebar-active-bg text-theme-sidebar-active-text border-l-[3px] border-theme-primary-main rounded-r-lg' : 'text-theme-text-muted hover:bg-theme-bg-main hover:text-theme-text-main rounded-lg pl-10'}`}
                            href="#"
                            onClick={(e) => { e.preventDefault(); setActiveTab(subItem.id); }}
                          >
                            <subItem.icon className="w-3.5 h-3.5" />
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    onClick={() => setIsSportsOpen(!isSportsOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium transition-colors text-theme-text-muted hover:bg-theme-bg-main hover:text-theme-text-main rounded-lg ml-[3px]"
                  >
                    <div className="flex items-center gap-3">
                      <Medal className="w-4 h-4" />
                      Sports
                    </div>
                    {isSportsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {isSportsOpen && (
                    <ul className="mt-1 space-y-0.5">
                      {[
                        { name: 'Clients', icon: Users, id: 'sports-clients' },
                        { name: 'Packages', icon: Package, id: 'sports-packages' },
                        { name: 'Bill', icon: Wallet, id: 'sports-bill' },
                        { name: 'History', icon: BarChart2, id: 'sports-history' },
                        { name: 'Report', icon: LineChart, id: 'sports-report' },
                      ].map((subItem) => (
                        <li key={subItem.name}>
                          <a
                            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors ${activeTab === subItem.id ? 'bg-theme-sidebar-active-bg text-theme-sidebar-active-text border-l-[3px] border-theme-primary-main rounded-r-lg' : 'text-theme-text-muted hover:bg-theme-bg-main hover:text-theme-text-main rounded-lg pl-10'}`}
                            href="#"
                            onClick={(e) => { e.preventDefault(); setActiveTab(subItem.id); }}
                          >
                            <subItem.icon className="w-3.5 h-3.5" />
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>

            {/* BILLING */}
            <div>
              <h4 className="px-3 text-[10px] font-bold text-theme-text-muted tracking-wide mb-1 uppercase flex items-center justify-between cursor-pointer hover:text-theme-text-main">
                Billing
                <ChevronUp className="w-3 h-3" />
              </h4>
              <ul className="space-y-0.5">
                {[
                  { name: 'Collect Payment', icon: CreditCard, id: 'pos' },
                  { name: 'Group Class Invoice', icon: Package, id: 'group-class-bill' },
                ].map((item) => (
                  <li key={item.name}>
                    <a className={`flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors ${activeTab === item.id ? 'bg-theme-sidebar-active-bg text-theme-sidebar-active-text border-l-[3px] border-theme-primary-main rounded-r-lg' : 'text-theme-text-muted hover:bg-theme-bg-main hover:text-theme-text-main rounded-lg ml-[3px]'}`} href="#" onClick={(e) => { e.preventDefault(); setActiveTab(item.id); }}>
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* STAFF */}
            <div>
              <h4 className="px-3 text-[10px] font-bold text-theme-text-muted tracking-wide mb-1 uppercase flex items-center justify-between cursor-pointer hover:text-theme-text-main">
                Staff
                <ChevronUp className="w-3 h-3" />
              </h4>
              <ul className="space-y-0.5">
                {[
                  { name: 'Employees', icon: Contact },
                  { name: 'Trainers', icon: GraduationCap },
                  { name: 'Roles & Permissions', icon: Shield },
                ].map((item) => (
                  <li key={item.name}>
                    <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-theme-text-muted hover:bg-theme-bg-main hover:text-theme-text-main rounded-lg ml-[3px] transition-colors" href="#" onClick={(e) => e.preventDefault()}>
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SETTINGS */}
            <div>
              <h4 className="px-3 text-[10px] font-bold text-theme-text-muted tracking-wide mb-1 uppercase flex items-center justify-between cursor-pointer hover:text-theme-text-main">
                Settings
                <ChevronUp className="w-3 h-3" />
              </h4>
              <ul className="space-y-0.5">
                <li>
                  <a className={`flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-theme-sidebar-active-bg text-theme-sidebar-active-text border-l-[3px] border-theme-primary-main rounded-r-lg' : 'text-theme-text-muted hover:bg-theme-bg-main hover:text-theme-text-main rounded-lg ml-[3px]'}`} href="#" onClick={(e) => { e.preventDefault(); setActiveTab('settings'); }}>
                    <Settings className="w-4 h-4" />
                    Software Settings
                  </a>
                </li>
                {[
                  { name: 'Communication', icon: Smartphone },
                  { name: 'EasyBio', icon: Eye },
                  { name: 'Forms', icon: ClipboardList },
                  { name: 'Feedbacks', icon: MessageSquare },
                  { name: 'Analysis', icon: LineChart },
                ].map((item) => (
                  <li key={item.name}>
                    <a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-theme-text-muted hover:bg-theme-bg-main hover:text-theme-text-main rounded-lg ml-[3px] transition-colors" href="#" onClick={(e) => e.preventDefault()}>
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </a>
                  </li>
                ))}
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
                <img alt="User Avatar" width={32} height={32} className="w-8 h-8 rounded-full object-cover border border-gray-200" src="https://lh3.googleusercontent.com/aida/ADBb0ujn_97otPHL33wNPUmLgKSwiRXowCphLbGw82Wc5y3zU-Lo0swQuJxYmS7-kweQGuiq9A59zg5ID_-rRGRstgb6XwvgGdWoVw3dToJtwbb9lmTNUYzMVgQJ8lVxfjcrUeA-M9PdufPhluEe86Vz_TYc99jKyZENtwaxcmjY1wKfQbadEhmqY4ME4_BG6Q-x3VJNMPkFw96KZrTxVLmuo-YuPkGhR1il6vuCBF3d0FHION045PHlFBgFKQ" referrerPolicy="no-referrer" />
                <div>
                  <p className="text-xs font-semibold text-gray-800 leading-tight">Ravi Sharma</p>
                  <p className="text-[10px] text-gray-500">ravi.sharma@fitcore.com</p>
                </div>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </div>
            </div>
          </header>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-x-hidden p-4 md:p-6 pb-24 h-[calc(100vh-3.5rem)] overflow-y-auto w-full max-w-[1920px] mx-auto custom-scrollbar">
            {activeTab === 'dashboard' ? (
              <>
                <div className="flex items-end justify-between mb-4 mt-1">
                  <div>
                    <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Dashboard</h1>
                    <p className="text-gray-500 mt-1 text-sm">Manage gym operations and member performance with ease.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-4 py-1.5 rounded-xl text-sm font-medium shadow-sm flex items-center gap-2 transition-colors">
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
                  <div className="bg-gradient-to-br from-theme-card-grad-from to-theme-card-grad-to rounded-[20px] p-4 text-theme-card-grad-text shadow-sm relative overflow-hidden">
                    <h3 className="font-medium mb-1 text-sm opacity-90">Total Members</h3>
                    <div className="text-3xl font-bold mb-1">{stats?.totalMembers ?? '—'}</div>
                    <p className="text-[10px] opacity-75">{stats?.totalChange ?? 0} Increased from last month</p>
                    <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 opacity-70" />
                  </div>
                  <div className="bg-theme-primary-light rounded-[20px] p-4 shadow-sm relative border border-theme-primary-light">
                    <h3 className="text-theme-primary-text font-medium mb-1 text-sm">Active Members</h3>
                    <div className="text-3xl font-bold text-theme-primary-text mb-1">{stats?.activeMembers ?? '—'}</div>
                    <p className="text-theme-primary-text opacity-70 text-[10px]">{stats?.activeChange ?? 0} Increased from last month</p>
                    <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-theme-primary-main" />
                  </div>
                  <div className="bg-rose-50 rounded-[20px] p-4 shadow-sm relative border border-rose-100">
                    <h3 className="text-rose-800 font-medium mb-1 text-sm">Expired Members</h3>
                    <div className="text-3xl font-bold text-rose-600 mb-1">{stats?.expiredMembers ?? '—'}</div>
                    <p className="text-rose-600/70 text-[10px]">{stats?.expiredChange ?? 0} Increased from last month</p>
                    <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-rose-400" />
                  </div>
                  <div className="bg-amber-50 rounded-[20px] p-4 shadow-sm relative border border-amber-100">
                    <h3 className="text-amber-800 font-medium mb-1 text-sm">Pending Payments</h3>
                    <div className="text-3xl font-bold text-amber-500 mb-1">{stats?.pendingPayments ?? '—'}</div>
                    <p className="text-amber-600/70 text-[10px]">{stats?.pendingChange ?? 0} Increased from last month</p>
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
                      <button className="bg-theme-primary-main hover:bg-theme-primary-hover text-white text-[10px] px-3 py-1.5 rounded-lg font-medium shadow-sm transition-colors">
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
                        {[
                          { name: 'Priya', status: 'Completed', statusColor: 'bg-emerald-50 text-emerald-600 border-emerald-100', time: '10:00 PM' },
                          { name: 'Rahul', status: 'In Progress', statusColor: 'bg-yellow-50 text-yellow-600 border-yellow-100', time: '12:00 PM' },
                          { name: 'Meena', status: 'Pending', statusColor: 'bg-orange-50 text-orange-600 border-orange-100', time: '10:30 PM' },
                          { name: 'Suresh', status: 'Pending', statusColor: 'bg-rose-50 text-rose-600 border-rose-100', time: '10:00 PM' },
                        ].map((row) => (
                          <tr key={row.name}>
                            <td className="py-1.5">
                              <div className="flex items-center gap-2">
                                <img alt={row.name} className="w-6 h-6 rounded-full object-cover bg-gray-100" src={`https://i.pravatar.cc/40?u=${row.name}`} />
                                <span className="font-medium text-gray-800">{row.name}</span>
                              </div>
                            </td>
                            <td className="py-1.5">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-medium border ${row.statusColor}`}>
                                {row.status}
                              </span>
                            </td>
                            <td className="py-1.5 text-right text-gray-500">{row.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="col-span-1 bg-white rounded-[20px] p-4 shadow-sm border border-gray-100 flex flex-col">
                    <h3 className="text-gray-800 font-semibold mb-2 w-full text-left text-sm">Collection Progress</h3>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative w-24 h-24 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                          <path className="text-theme-primary-main" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="78, 100" strokeLinecap="round" strokeWidth="4"></path>
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
                          <div className="w-5 h-5 rounded-full bg-theme-primary-light flex items-center justify-center text-theme-primary-text cursor-pointer">
                            <Pause className="w-2.5 h-2.5" fill="currentColor" />
                          </div>
                          <div className="w-5 h-5 rounded-full bg-theme-primary-main flex items-center justify-center text-white cursor-pointer shadow-sm">
                            <Square className="w-2.5 h-2.5" fill="currentColor" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-end justify-between">
                      <div>
                        <p className="text-[10px] text-gray-500">Monthly Growth:</p>
                        <p className="text-xs font-bold text-theme-primary-main">+12%</p>
                      </div>
                      <div className="w-16 h-8 opacity-70">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                          <path d="M0 30 Q 15 10, 30 20 T 60 15 T 100 5 L 100 40 L 0 40 Z" fill="url(#gradient)" opacity="0.2"></path>
                          <path d="M0 30 Q 15 10, 30 20 T 60 15 T 100 5" fill="none" stroke="currentColor" className="text-theme-primary-main" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          <defs>
                            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="currentColor" className="text-theme-primary-main"></stop>
                              <stop offset="100%" stopColor="#ffffff" stopOpacity="0"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : activeTab === 'follow_ups' ? (
              <FollowUps />
            ) : activeTab === 'upcoming_renewals' ? (
              <UpcomingRenewals />
            ) : activeTab === 'inconsistent_clients' ? (
              <InconsistentClients />
            ) : activeTab === 'inquiries' ? (
              <InquiriesDashboard onNavigate={setActiveTab} />
            ) : activeTab === 'inquiries-add' ? (
              <AddInquiry onNavigate={setActiveTab} />
            ) : activeTab === 'inquiries-detail' ? (
              <InquiryDetail onNavigate={setActiveTab} />
            ) : activeTab === 'members' ? (
              <ClientsDashboard onNavigate={setActiveTab} />
            ) : activeTab === 'members-add' ? (
              <AddClient onNavigate={setActiveTab} />
            ) : activeTab === 'members-detail' ? (
              <ClientProfile onNavigate={setActiveTab} />
            ) : activeTab === 'birthdays_anniversaries' ? (
              <BirthdaysAnniversaries />
            ) : activeTab === 'group-class-bill' ? (
              <GroupClassBill />
            ) : activeTab === 'pos' ? (
              <POSPortal />
            ) : activeTab === 'sports-bill' ? (
              <SportsBill />
            ) : activeTab === 'sports-history' ? (
              <SportsBillingHistory />
            ) : activeTab === 'sports-clients' ? (
              <SportsClients />
            ) : activeTab === 'sports-packages' ? (
              <SportsPackages />
            ) : activeTab === 'sports-report' ? (
              <SportsReport />
            ) : activeTab === 'attendance-mark' ? (
              <MarkAttendance />
            ) : activeTab === 'attendance-report' ? (
              <AttendanceReport />
            ) : (
              <div className="mt-4 max-w-7xl mx-auto w-full">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold tracking-tight text-on-surface font-headline">Software Settings</h2>
                  <p className="text-on-surface-variant text-sm mt-1">Configure global application behavior and business identities.</p>
                </div>
                <div className="flex items-center gap-8 border-b border-outline-variant/15 mb-8 overflow-x-auto pb-px">
                  {['General', 'Theme', 'Billing', 'Notifications', 'Integrations', 'Advanced'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSettingsTab(tab)}
                      className={`px-1 py-3 text-sm whitespace-nowrap transition-colors ${settingsTab === tab ? 'font-semibold text-primary border-b-2 border-primary' : 'font-medium text-on-surface-variant hover:text-on-surface'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {settingsTab === 'General' && (
                  <div className="grid grid-cols-12 gap-6 pb-20">
                    <div className="col-span-12 lg:col-span-8 space-y-6">
                      <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm ring-1 ring-black/5">
                        <div className="flex items-center gap-2 mb-6">
                          <span className="material-symbols-outlined text-primary">branding_watermark</span>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant">GYM BRANDING</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="col-span-2">
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Gym Name</label>
                            <input className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none" type="text" defaultValue="FitOps Pro Premium" />
                          </div>
                          <div className="space-y-4">
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Logo Upload</label>
                            <div className="h-32 rounded-xl border-2 border-dashed border-outline-variant/20 flex flex-col items-center justify-center bg-surface-container-low hover:bg-surface-container-lowest transition-colors cursor-pointer">
                              <span className="material-symbols-outlined text-outline-variant mb-2">upload_file</span>
                              <span className="text-xs text-on-surface-variant">PNG, SVG (Max 2MB)</span>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Stamp/Seal Upload</label>
                            <div className="h-32 rounded-xl border-2 border-dashed border-outline-variant/20 flex flex-col items-center justify-center bg-surface-container-low hover:bg-surface-container-lowest transition-colors cursor-pointer">
                              <span className="material-symbols-outlined text-outline-variant mb-2">approval</span>
                              <span className="text-xs text-on-surface-variant">Official Seal Image</span>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Owner Signature</label>
                            <div className="h-24 bg-surface-container-low rounded-xl border border-outline-variant/10 diagonal-stripe relative overflow-hidden">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <button className="bg-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm border border-outline-variant/20">Draw Signature</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm ring-1 ring-black/5">
                        <div className="flex items-center gap-2 mb-6">
                          <span className="material-symbols-outlined text-primary">location_on</span>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant">BRANCH DETAILS</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col-span-2">
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Address</label>
                            <textarea className="w-full p-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm outline-none focus:ring-1 focus:ring-primary/20" rows={2} defaultValue="742 Evergreen Terrace, Downtown District, Suite 405"></textarea>
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Phone</label>
                            <input className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" type="text" defaultValue="+1 (555) 012-3456" />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Email</label>
                            <input className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" type="email" defaultValue="contact@fitopspro.com" />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">GST Number</label>
                            <input className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" type="text" defaultValue="22AAAAA0000A1Z5" />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Website URL</label>
                            <input className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" type="text" defaultValue="https://fitopspro.com" />
                          </div>
                        </div>
                      </section>
                      <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm ring-1 ring-black/5">
                        <div className="flex items-center gap-2 mb-6">
                          <span className="material-symbols-outlined text-primary">receipt_long</span>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant">BILLING CONFIGURATION</h3>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                          <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Invoice Prefix</label>
                            <input className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" type="text" defaultValue="INV-" />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Number Format</label>
                            <input className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" type="text" defaultValue="0000" />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Default Tax Rate</label>
                            <div className="relative">
                              <input className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm pr-8" type="text" defaultValue="18" />
                              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-on-surface-variant">%</span>
                            </div>
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Tax Type</label>
                            <select className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" defaultValue="Inclusive">
                              <option value="Exclusive">Exclusive</option>
                              <option value="Inclusive">Inclusive</option>
                            </select>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className="col-span-12 lg:col-span-4 space-y-6">
                      <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm ring-1 ring-black/5">
                        <div className="flex items-center gap-2 mb-6">
                          <span className="material-symbols-outlined text-primary">language</span>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant">LOCALIZATION</h3>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Currency</label>
                            <select className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" defaultValue="INR (₹) - Indian Rupee">
                              <option>INR (₹) - Indian Rupee</option>
                              <option>USD ($) - US Dollar</option>
                              <option>EUR (€) - Euro</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Timezone</label>
                            <select className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" defaultValue="(GMT+05:30) Chennai, Kolkata">
                              <option>(GMT+05:30) Chennai, Kolkata</option>
                              <option>(GMT+00:00) UTC</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Date Format</label>
                            <select className="w-full h-10 px-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm" defaultValue="DD/MM/YYYY">
                              <option>DD/MM/YYYY</option>
                              <option>MM/DD/YYYY</option>
                              <option>YYYY-MM-DD</option>
                            </select>
                          </div>
                        </div>
                      </section>
                      <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm ring-1 ring-black/5">
                        <div className="flex items-center gap-2 mb-6">
                          <span className="material-symbols-outlined text-primary">card_membership</span>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant">REWARD POINTS</h3>
                        </div>
                        <div className="space-y-4">
                          <div className="p-3 bg-tertiary-container/30 rounded-lg border border-tertiary/10">
                            <label className="block text-[11px] font-bold text-on-tertiary-fixed-variant uppercase tracking-widest mb-2">Points per ₹100 spent</label>
                            <input className="w-full h-9 px-3 bg-white border border-tertiary/20 rounded-md text-sm font-semibold" type="number" defaultValue="5" />
                          </div>
                          <div className="p-3 bg-secondary-container/30 rounded-lg border border-secondary/10">
                            <label className="block text-[11px] font-bold text-on-secondary-fixed-variant uppercase tracking-widest mb-2">Redemption Rate (1 Pt = ₹)</label>
                            <input className="w-full h-9 px-3 bg-white border border-secondary/20 rounded-md text-sm font-semibold" step="0.1" type="number" defaultValue="0.5" />
                          </div>
                        </div>
                      </section>
                      <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm ring-1 ring-black/5">
                        <div className="flex items-center gap-2 mb-6">
                          <span className="material-symbols-outlined text-primary">notification_important</span>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant">ALERTS</h3>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Renewal Reminder (Days)</label>
                            <input className="w-full h-2 bg-surface-container-low rounded-lg appearance-none cursor-pointer accent-primary" max="30" min="1" type="range" defaultValue="7" />
                            <div className="flex justify-between text-[10px] text-on-surface-variant mt-1 font-bold">
                              <span>1 DAY</span>
                              <span className="text-primary">7 DAYS</span>
                              <span>30 DAYS</span>
                            </div>
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Inconsistency Threshold</label>
                            <div className="flex items-center gap-3">
                              <input className="w-20 h-9 px-3 bg-surface-container-low border border-outline-variant/20 rounded-md text-sm" type="number" defaultValue="3" />
                              <span className="text-xs text-on-surface-variant italic">visits missed / week</span>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm ring-1 ring-black/5">
                        <div className="flex items-center gap-2 mb-6">
                          <span className="material-symbols-outlined text-primary">extension</span>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant">MODULE TOGGLES</h3>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 rounded-lg bg-primary-container/5">
                            <div className="flex items-center gap-3">
                              <span className="material-symbols-outlined text-primary text-xl">psychology</span>
                              <div>
                                <p className="text-xs font-bold text-on-surface">AI Body Analysis</p>
                                <p className="text-[10px] text-on-surface-variant">Automated BMI &amp; posture scan</p>
                              </div>
                            </div>
                            <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
                              <div className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                            <div className="flex items-center gap-3">
                              <span className="material-symbols-outlined text-on-surface-variant text-xl">forum</span>
                              <div>
                                <p className="text-xs font-bold text-on-surface">WhatsApp Chatbot</p>
                                <p className="text-[10px] text-on-surface-variant">Automated member responses</p>
                              </div>
                            </div>
                            <div className="w-10 h-5 bg-outline-variant/30 rounded-full relative cursor-pointer">
                              <div className="absolute left-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className="col-span-12 mt-6 flex justify-between items-center p-6 bg-surface-container-lowest rounded-xl border border-primary/10 shadow-lg">
                      <div className="flex items-center gap-4">
                        <div className="bg-secondary-container p-2 rounded-lg">
                          <span className="material-symbols-outlined text-primary">info</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-on-surface">Review all changes before saving</p>
                          <p className="text-xs text-on-surface-variant">Last backup taken 4 hours ago.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button className="px-6 py-2.5 text-sm font-bold text-on-surface-variant hover:bg-surface-container transition-colors rounded-lg">Reset to Defaults</button>
                        <button className="px-8 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-primary to-primary-container rounded-lg shadow-md hover:scale-[1.02] transition-transform">Save Settings</button>
                      </div>
                    </div>
                  </div>
                )}

                {settingsTab === 'Theme' && (
                  <div className="bg-theme-bg-card rounded-[20px] p-6 shadow-sm border border-theme-border">
                    <h3 className="text-lg font-semibold text-theme-text-main mb-6">Theme Customization</h3>
                    <div className="flex flex-col w-full h-[65vh] overflow-y-auto pr-4 custom-scrollbar">
                      <ThemePreviewCard
                        id="default" name="Skyline Glass" isActive={theme === 'default'} onSelect={setTheme}
                        colors={{ primary: '#1ca1f1', secondary: '#bae6fd', tertiary: '#f0f9ff', neutral: '#1f2937', bgCards: '#f0f9ff' }}
                        hex={{ primary: '#1CA1F1', secondary: '#BAE6FD', tertiary: '#F0F9FF', neutral: '#1F2937' }}
                      />
                      <ThemePreviewCard
                        id="verdant" name="Verdant Core" isActive={theme === 'verdant'} onSelect={setTheme}
                        colors={{ primary: '#16a34a', secondary: '#bbf7d0', tertiary: '#f0fdf4', neutral: '#14532d', bgCards: '#f0fdf4' }}
                        hex={{ primary: '#16A34A', secondary: '#BBF7D0', tertiary: '#F0FDF4', neutral: '#14532D' }}
                      />
                      <ThemePreviewCard
                        id="purple" name="Amethyst Glow" isActive={theme === 'purple'} onSelect={setTheme}
                        colors={{ primary: '#a855f7', secondary: '#e9d5ff', tertiary: '#faf5ff', neutral: '#3b0764', bgCards: '#faf5ff' }}
                        hex={{ primary: '#A855F7', secondary: '#E9D5FF', tertiary: '#FAF5FF', neutral: '#3B0764' }}
                      />
                      <ThemePreviewCard
                        id="yellow" name="Amber Dawn" isActive={theme === 'yellow'} onSelect={setTheme}
                        colors={{ primary: '#eab308', secondary: '#fef08a', tertiary: '#fefce8', neutral: '#713f12', bgCards: '#fefce8' }}
                        hex={{ primary: '#EAB308', secondary: '#FEF08A', tertiary: '#FEFCE8', neutral: '#713F12' }}
                      />
                      <ThemePreviewCard
                        id="dark" name="Obsidian Night" isActive={theme === 'dark'} onSelect={setTheme}
                        colors={{ primary: '#3b82f6', secondary: '#1e3a8a', tertiary: '#0f172a', neutral: '#f8fafc', bgCards: '#f8fafc' }}
                        hex={{ primary: '#3B82F6', secondary: '#1E3A8A', tertiary: '#0F172A', neutral: '#F8FAFC' }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Dashboard />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
