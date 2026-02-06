export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-app">
      <div className="relative mx-auto min-h-screen max-w-7xl px-6">
        {children}
      </div>
    </div>
  );
}
