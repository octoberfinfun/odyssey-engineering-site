'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const EXIT_MS = 360;

export default function RouteTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const navigating = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    navigating.current = false;
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }

    const frame = requestAnimationFrame(() => {
      document.documentElement.classList.remove('route-leaving');
      document.documentElement.classList.add('route-arrived');

      window.setTimeout(() => {
        document.documentElement.classList.remove('route-arrived');
      }, 620);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest('a');
      if (!anchor) return;
      if (anchor.dataset.noTransition === 'true') return;
      if (anchor.hasAttribute('download')) return;
      if (anchor.target && anchor.target !== '_self') return;

      const rawHref = anchor.getAttribute('href');
      if (!rawHref || rawHref.startsWith('#') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:')) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;

      const current = new URL(window.location.href);
      const isSameLocation =
        url.pathname === current.pathname &&
        url.search === current.search &&
        url.hash === current.hash;

      if (isSameLocation || navigating.current) return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      event.preventDefault();
      event.stopPropagation();
      navigating.current = true;
      document.documentElement.classList.add('route-leaving');

      timer.current = setTimeout(() => {
        const destination = `${url.pathname}${url.search}${url.hash}`;
        router.push(destination);
      }, EXIT_MS);
    };

    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [router]);

  return null;
}
