import { ArrowUpRight, AudioLines } from 'lucide-react';
import './_group.css';

export function Current() {
  return (
    <main className="logo-preview dark">
      <aside className="brand-card">
        <div className="brand-block">
          <a href="/" className="brand" aria-label="Listening Notebook home">
            <span className="brand-mark"><AudioLines size={18} /></span>
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
