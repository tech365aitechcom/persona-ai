import { ScreenerForm } from "./_components/screener-form";

export default function ScreenerPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Persona Interview Study
        </h1>
        <ScreenerForm />
      </div>
    </div>
  );
}
