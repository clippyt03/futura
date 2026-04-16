import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Nawigacja okruszkowa" className="flex items-center gap-1 text-xs text-white/40 flex-wrap">
      <Link
        to="/"
        className="hover:text-white/70 transition-colors duration-200 whitespace-nowrap"
      >
        Home
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.path} className="flex items-center gap-1">
            <ChevronRight size={12} className="text-white/20 flex-shrink-0" />
            {isLast ? (
              <span className="text-white/60 whitespace-nowrap" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-white/70 transition-colors duration-200 whitespace-nowrap"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
