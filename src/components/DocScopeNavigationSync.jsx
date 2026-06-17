import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useDocScopeFilter } from '@site/src/context/DocScopeFilterContext';
import { appendDocScopeToHref } from '@site/src/utils/doc-scope-query';

/**
 * Ensure in-site anchor clicks carry current ?v=&p= before navigation.
 */
export default function DocScopeNavigationSync() {
  const { version, product } = useDocScopeFilter();
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    if (typeof window === 'undefined' || !version || !product) {
      return undefined;
    }
    const origin = window.location.origin;

    const onClick = (event) => {
      const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) {
        return;
      }
      const rawHref = anchor.getAttribute('href');
      if (!rawHref || rawHref.startsWith('#') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:')) {
        return;
      }
      const nextHref = appendDocScopeToHref(rawHref, version, product, origin);
      if (nextHref && nextHref !== rawHref) {
        anchor.setAttribute('href', nextHref);
      }
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [version, product, siteConfig?.baseUrl]);

  return null;
}
