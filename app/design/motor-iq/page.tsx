import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MotorIQ Design - Portfolio",
  description: "Figma design for the MotorIQ project",
};

export default function MotorIQDesignPage() {
  return (
    <main className="w-full h-screen flex flex-col">
      <div className="flex-1 w-full h-full">
        <iframe
          className="w-full h-full border-0"
          src="https://embed.figma.com/design/xLlKl5GV8L6klDYh9EV0YH/MotorIQ-Project?node-id=992-7140&embed-host=share"
          allowFullScreen
        />
      </div>
    </main>
  );
}
