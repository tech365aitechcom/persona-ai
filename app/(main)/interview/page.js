import { InterviewGuide } from "./_components/interview-guide";

export default function InterviewPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Interview Guide</h1>
        <InterviewGuide />
      </div>
    </div>
  );
}
