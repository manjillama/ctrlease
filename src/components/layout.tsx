import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  );
}
