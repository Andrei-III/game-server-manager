import React, { lazy, Suspense } from 'react';

const LazyLogEntry = lazy(() => import('./LogEntry'));

const LogEntry = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLogEntry {...props} />
  </Suspense>
);

export default LogEntry;
