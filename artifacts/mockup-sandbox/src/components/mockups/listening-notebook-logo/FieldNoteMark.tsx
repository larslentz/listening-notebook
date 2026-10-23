import { ArrowUpRight } from 'lucide-react';
import './_group.css';

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

export function FieldNoteMark() {
  return (
    <main className="logo-preview dark">
      <aside className="brand-card">
        <div className="brand-block">
          <a href="/" className="brand" aria-label="Listening Notebook home">
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
      </aside>
    </main>
  );
}
