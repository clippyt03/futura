import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

export const useWebVitals = (onMetric?: (metric: WebVitalsMetric) => void) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          const lcp = entry as PerformanceEntry;
          const value = lcp.startTime;
          const rating = value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';

          onMetric?.({
            name: 'LCP',
            value,
            rating,
          });
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.error('Web Vitals observer error:', e);
    }

    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const value = entry.processingStart - entry.startTime;
        const rating = value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';

        onMetric?.({
          name: 'FID',
          value,
          rating,
        });
      }
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.error('FID observer error:', e);
    }

    let cls = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          cls += (entry as any).value;
          const rating = cls <= 0.1 ? 'good' : cls <= 0.25 ? 'needs-improvement' : 'poor';

          onMetric?.({
            name: 'CLS',
            value: cls,
            rating,
          });
        }
      }
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.error('CLS observer error:', e);
    }

    return () => {
      observer.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [onMetric]);
};
