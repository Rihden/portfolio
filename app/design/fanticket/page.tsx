import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fanticket Design - Portfolio",
  description: "Figma design for the Fanticket project",
};

export default function FanticketDesignPage() {
  return (
    <main className="w-full h-screen flex flex-col">
      <div className="flex-1 w-full h-full">
        <iframe
          className="w-full h-full border-0"
          src="https://embed.figma.com/design/kiV3157UzZAG1dYk2nyN0J/FanTicket?node-id=0-1&embed-host=share"
          allowFullScreen
        />
      </div>
    </main>
  );
}
