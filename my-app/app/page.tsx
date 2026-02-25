// app/page.tsx
import StepperVertical from "@/components/StepperVertical";
import StepperHorizontal from "@/components/StepperHorizontal";
import ProcessCard from "@/components/ProcessCard";
import ApplicationReview from "@/components/ApplicationReview";
import PaymentDetails from "@/components/PaymentDetails";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-200 flex items-center justify-center p-10">

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-[260px_1fr_320px] gap-6 w-full max-w-6xl">

        {/* LEFT PANEL */}
        <div className="h-full">
          <StepperVertical />
        </div>

        {/* CENTER COLUMN (🔥 CLAVE DEL FIX) */}
        <div className="flex flex-col gap-6">

          <StepperHorizontal />

          <ProcessCard />

          <ApplicationReview />

        </div>

        {/* RIGHT PANEL */}
        <div className="h-fit">
          <PaymentDetails />
        </div>

      </div>
    </main>
  );
}