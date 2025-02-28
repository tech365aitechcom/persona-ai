import { PreInterviewForm } from "./_components/pre-interview-form";

export default function PreInterviewPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Pre-Interview Questionnaire
        </h1>
        <PreInterviewForm />
      </div>
    </div>
  );
}
