import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>{children}</div>;
}
