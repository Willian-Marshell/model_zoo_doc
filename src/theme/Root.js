import React from 'react';
import { DocScopeFilterProvider } from '@site/src/context/DocScopeFilterContext';
import DocScopeNavigationSync from '@site/src/components/DocScopeNavigationSync';

export default function Root({ children }) {
  return (
    <DocScopeFilterProvider>
      <DocScopeNavigationSync />
      {children}
    </DocScopeFilterProvider>
  );
}