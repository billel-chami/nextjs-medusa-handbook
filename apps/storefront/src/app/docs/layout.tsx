import { DocsSidebar } from "./DocsSidebar";
import { DocsSubNav } from "./DocsSubNav";

interface DocsLayoutProps {
  readonly children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-canvas text-content-primary">
      {/* Docs Header Bar (Trilingual: EN / AR / FR) */}
      <DocsSubNav />

      <div className="mx-auto max-w-7xl ps-6 pe-6 py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Dynamic Trilingual Sidebar */}
          <DocsSidebar />

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}
