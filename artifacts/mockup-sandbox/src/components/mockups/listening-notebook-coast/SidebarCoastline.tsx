import {
  Activity,
  Archive,
  ArrowUpRight,
  BookOpen,
  CircleHelp,
  FileText,
  Headphones,
  ListMusic,
  Menu,
  Search,
  Settings2,
  ShieldCheck,
  Sun,
  Trash2,
  Upload,
  Plus,
} from 'lucide-react';
import './_group.css';
import './SidebarCoastline.css';

function SoundFieldMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8.1 5.5C5.4 7.1 3.8 9.4 3.8 12s1.6 4.9 4.3 6.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M15.9 5.5c2.7 1.6 4.3 3.9 4.3 6.5s-1.6 4.9-4.3 6.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M9.7 8.3c-1.5 1-2.4 2.2-2.4 3.7s.9 2.7 2.4 3.7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M14.3 8.3c1.5 1 2.4 2.2 2.4 3.7s-.9 2.7-2.4 3.7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.25" fill="hsl(var(--accent))" />
    </svg>
  );
}

function CoastlineDecoration() {
  return (
    <svg className="sidebar-coastline-art" viewBox="0 0 236 150" preserveAspectRatio="none" aria-hidden="true">
      <path className="coastline-distant" d="M0 97 16 92 30 96 42 88 55 90 70 79 83 82 98 69 111 72 126 64 140 68 155 57 171 62 187 52 202 59 216 50 236 57v93H0Z" />
      <path className="coastline-ridge" d="M0 111 20 106 34 109 48 101 62 104 75 95 91 99 107 88 121 91 138 80 152 84 168 72 181 77 197 66 210 72 223 65 236 69v81H0Z" />
      <path className="coastline-shore" d="M0 125c24-7 38-6 58-10 20-4 33-2 53-8 22-7 42-3 62-8 24-6 40-4 63-12v63H0Z" />
      <path className="coastline-waterline" d="M4 128c29-8 49-5 75-12 27-7 49-6 73-9 28-4 46-7 80-17" />
      <g className="coastline-palm" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 118c2-18 3-35 2-53" />
        <path d="M22 66c-8-7-13-9-19-9 7-2 13-1 20 5-4-8-8-13-14-17 8 3 14 8 18 16 2-9 5-15 10-21-2 9-4 16-7 24 7-5 13-7 20-7-8 4-14 8-20 13" />
      </g>
      <path className="coastline-echo" d="M117 139c27-5 49-4 72-9" />
    </svg>
  );
}

function StaticShell() {
  return (
    <div className="ln-mockup dark min-h-screen sidebar-coast-variant">
      <div className="app-shell">
        <aside className="side-rail" aria-label="Main navigation">
          <CoastlineDecoration />
          <div className="brand-block">
            <a href="#" className="brand" aria-label="Listening Notebook home">
              <span className="brand-mark"><SoundFieldMark /></span>
              <span>
                <span className="brand-name">Listening<br />Notebook</span>
                <span className="brand-caption">Personal listening desk</span>
              </span>
            </a>
            <div className="creator-credit">
              <div className="creator-byline">BY LARS LENTZ</div>
              <a className="creator-link" href="https://sleekbio.com/larslentz" target="_blank" rel="noopener noreferrer">
                More by Lars <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="nav-label">Workspace</div>
          <a href="#" className="nav-link active"><ListMusic size={16} /><span>Library</span></a>
          <a href="#" className="nav-link"><Headphones size={16} /><span>Listening desk</span></a>
          <a href="#" className="nav-link"><FileText size={16} /><span>Description builder</span></a>
          <a href="#" className="nav-link"><BookOpen size={16} /><span>Vocabulary explorer</span></a>
          <div className="nav-label" style={{ marginTop: 30 }}>Your device</div>
          <a href="#" className="nav-link"><Settings2 size={16} /><span>Settings &amp; backup</span></a>
          <div className="side-bottom">
            <div className="privacy-note">
              <ShieldCheck size={16} />
              <span>Private by design.<br />Your notes stay in this browser.</span>
            </div>
          </div>
        </aside>
        <section className="main-area">
          <header className="topbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button className="btn icon-btn mobile-menu" aria-label="Open navigation"><Menu size={17} /></button>
              <div className="breadcrumb">Notebook <span style={{ padding: '0 7px', opacity: .45 }}>/</span> Library</div>
            </div>
            <div className="top-actions">
              <button className="btn help-button"><CircleHelp size={15} /><span>How to use</span></button>
              <button className="btn icon-btn" aria-label="Switch theme"><Sun size={15} /></button>
            </div>
          </header>
          <main className="content">
            <section className="section-head">
              <div>
                <div className="eyebrow">A place to attend</div>
                <h1 className="page-title">Your listening library</h1>
                <p className="page-subtitle">Keep what you heard, what you think it was, and how listening felt—distinct, together.</p>
              </div>
              <div className="toolbar">
                <button className="btn"><Upload size={14} /><span>Import audio</span></button>
                <button className="btn primary"><Plus size={15} />New session</button>
              </div>
            </section>
            <aside className="quick-start panel" aria-label="Quick start">
              <div className="quick-start-icon"><BookOpen size={17} /></div>
              <div className="quick-start-copy">
                <div className="eyebrow">Quick start</div>
                <p>Create a live session or import a recording. Choose a listening perspective, add observations, then build a description or compare passes.</p>
              </div>
              <button className="btn"><CircleHelp size={14} />Read the guide</button>
            </aside>
            <div className="library-toolbar">
              <div className="search-wrap"><Search size={15} /><input className="input" placeholder="Search titles, notes, tags…" aria-label="Search sessions" /></div>
              <select className="select" aria-label="Filter session type" style={{ width: 148 }}><option>All sessions</option></select>
              <select className="select" aria-label="Sort sessions" style={{ width: 150 }}><option>Recently edited</option></select>
              <select className="select" aria-label="Filter by tag" style={{ width: 132 }}><option>Any tag</option></select>
              <select className="select" aria-label="Filter by quality" style={{ width: 154 }}><option>Any quality</option></select>
              <select className="select" aria-label="Filter by listening date" style={{ width: 140 }}><option>Any date</option></select>
            </div>
            <div className="session-list">
              <article className="panel session-row">
                <div className="session-glyph"><Activity size={18} /></div>
                <div className="session-main">
                  <h2 className="session-title">First light at the estuary</h2>
                  <div className="session-meta"><span>Live listening</span><span>Listened 2025-04-18</span><span>No audio file</span></div>
                  <p className="session-summary">A steady fine-grained wash sits behind intermittent, sharper calls. Attention moves between the near rustle and a low, broad swell that comes and goes without a clear edge.</p>
                  <div><span className="tag demo-tag">Illustrative demo</span><span className="tag">water</span><span className="tag">dawn</span><span className="tag">demonstration</span></div>
                </div>
                <div className="row-actions">
                  <span className="status-pill">3 notes</span>
                  <button className="btn icon-btn" aria-label="Duplicate session"><Archive size={14} /></button>
                  <button className="btn icon-btn danger" aria-label="Delete session"><Trash2 size={14} /></button>
                </div>
              </article>
            </div>
            <div className="count-row"><span>1 session on this device</span><span>Browser storage in use: 0.00 MB</span></div>
          </main>
        </section>
      </div>
    </div>
  );
}

export function SidebarCoastline() {
  return <StaticShell />;
}
