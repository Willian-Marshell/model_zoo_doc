/**
 * Helpers for persisting doc scope (?v=&p=) in page URLs for analytics funnels.
 */

export function pathAfterBaseUrl(pathname, baseUrl) {
  const base = (baseUrl || '/').replace(/\/$/, '');
  let p = (pathname || '/').replace(/\/$/, '');
  if (!p) p = '/';
  if (base && p.startsWith(base)) {
    p = p.slice(base.length);
  }
  if (!p || p === '/') {
    return '/';
  }
  return p.startsWith('/') ? p : `/${p}`;
}

export function normalizePathname(pathname) {
  const p = String(pathname || '');
  if (p.length > 1 && p.endsWith('/')) {
    return p.slice(0, -1);
  }
  return p;
}

export function isDocHomePath(pathname, baseUrl, currentLocale, defaultLocale) {
  const rest = pathAfterBaseUrl(pathname, baseUrl);
  if (rest === '/') {
    return true;
  }
  if (currentLocale !== defaultLocale && rest === `/${currentLocale}`) {
    return true;
  }
  return false;
}

export function isModelZooIntroPath(pathname, baseUrl) {
  const rest = pathAfterBaseUrl(pathname, baseUrl);
  return (
    rest === '/model_zoo_intro' ||
    rest.endsWith('/model_zoo_intro') ||
    rest === '/en/model_zoo_intro'
  );
}

export function shouldAttachDocScopeQuery(pathname, baseUrl) {
  if (!pathname) {
    return false;
  }
  const base = String(baseUrl || '/');
  if (base !== '/' && !pathname.startsWith(base.replace(/\/$/, ''))) {
    return false;
  }
  return true;
}

export function mergeDocScopeSearch(search, version, product) {
  const normalized = !search ? '' : search.startsWith('?') ? search.slice(1) : search;
  const params = new URLSearchParams(normalized);
  params.set('v', version);
  params.set('p', product);
  return `?${params.toString()}`;
}

export function docScopeSearchMatches(search, version, product) {
  const normalized = !search ? '' : search.startsWith('?') ? search.slice(1) : search;
  const params = new URLSearchParams(normalized);
  return params.get('v') === version && params.get('p') === product;
}

export function appendDocScopeToHref(href, version, product, origin) {
  if (!href || !version || !product) {
    return href;
  }
  try {
    const url = new URL(href, origin);
    if (url.origin !== origin) {
      return href;
    }
    url.searchParams.set('v', version);
    url.searchParams.set('p', product);
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return href;
  }
}

export function buildDocHomePath(baseUrl, currentLocale, defaultLocale) {
  const base = ensureTrailingSlash(baseUrl || '/');
  if (currentLocale === defaultLocale) {
    return base.replace(/\/$/, '') || '/';
  }
  const baseNoSlash = String(baseUrl || '/').replace(/\/$/, '');
  if (baseNoSlash.toLowerCase().endsWith(`/${currentLocale}`.toLowerCase())) {
    return baseNoSlash || '/';
  }
  return `${baseNoSlash}/${currentLocale}`.replace(/\/+/g, '/');
}

function ensureTrailingSlash(path) {
  const normalized = String(path || '/');
  return normalized.endsWith('/') ? normalized : `${normalized}/`;
}
