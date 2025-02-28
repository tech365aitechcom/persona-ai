"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const interviewSections = [
  {
    id: "life-story",
    title: "Life Story & Major Turning Points",
    duration: "12 minutes",
    questions: [
      "Tell me the story of your life in your own words.",
      "What were the biggest turning points in your life—times when things changed dramatically?",
      "If you could relive one part of your life, what would it be and why?",
      "Looking back, what advice would you give to your younger self?",
    ],
    followUps: [
      "Was there ever a moment where you felt like your life could go in two different directions?",
      "Who or what has had the biggest influence on the person you've become?",
      "Did you ever make a decision that felt small at the time but turned out to be life-changing?",
    ],
  },
  {
    id: "work-money",
    title: "Defining Experiences in Work & Money",
    duration: "10 minutes",
    questions: [
      "Tell me about your first job. What did you learn from it?",
      "Have you ever struggled financially? What was that like for you?",
      "Was there ever a time when you made a financial or career decision that completely changed your life?",
      "What's the best decision you've ever made about money or work?",
    ],
    followUps: [
      "If you lost your job tomorrow, what's the first thing you would do?",
      "Has anyone ever taught you important lessons about managing money?",
      "What was your biggest financial regret?",
    ],
  },
  // Add other sections...
];

function InterviewSection({ section, isActive, onComplete }) {
  const [notes, setNotes] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <Card className={`mb-4 ${isActive ? "border-blue-500" : "opacity-60"}`}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{section.title}</span>
          <span className="text-sm text-gray-500">{section.duration}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-medium">Current Question:</p>
            <p className="text-lg mt-2">
              {section.questions[currentQuestionIndex]}
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Follow-up Questions:</p>
            <ul className="list-disc pl-5 space-y-2">
              {section.followUps.map((followUp, index) => (
                <li key={index}>{followUp}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Interview Notes:</p>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Take notes here..."
              className="min-h-[100px]"
            />
          </div>

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={() => setCurrentQuestionIndex((i) => Math.max(0, i - 1))}
              disabled={currentQuestionIndex === 0}
            >
              Previous Question
            </Button>
            <Button
              onClick={() => {
                if (currentQuestionIndex < section.questions.length - 1) {
                  setCurrentQuestionIndex((i) => i + 1);
                } else {
                  onComplete();
                }
              }}
            >
              {currentQuestionIndex < section.questions.length - 1
                ? "Next Question"
                : "Complete Section"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function InterviewGuide() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-2">Interview Progress</h2>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Section {currentSectionIndex + 1} of {interviewSections.length}
          </div>
          <div className="text-sm text-gray-600">
            Current: {interviewSections[currentSectionIndex].title}
          </div>
        </div>
      </div>

      {interviewSections.map((section, index) => (
        <InterviewSection
          key={section.id}
          section={section}
          isActive={index === currentSectionIndex}
          onComplete={() =>
            setCurrentSectionIndex((i) =>
              Math.min(interviewSections.length - 1, i + 1)
            )
          }
        />
      ))}
    </div>
  );
}
