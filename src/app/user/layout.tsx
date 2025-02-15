import type { Metadata } from "next";
import "@/app/globals.css";
import Sidebar from "@/components/ui/sidebar";
import DasHeader from "@/components/ui/dasheader";

export const metadata: Metadata = {
  title: "Dashboard | Business Marketing AI Powered Tool",
  description: "Solsn | Business Marketing AI Powered Tool",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col bg-[#EFEEF6]">
          <DasHeader />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
