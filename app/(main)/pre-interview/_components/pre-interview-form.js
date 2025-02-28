"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LikertScale } from "./likert-scale";
import { ScenarioChoice } from "./scenario-choice";

const personalityQuestions = [
  {
    name: "openness",
    label: "I enjoy trying new experiences and exploring new ideas.",
  },
  {
    name: "conscientiousness",
    label: "I am very organized and like to plan ahead.",
  },
  {
    name: "extraversion",
    label: "I enjoy being around large groups of people.",
  },
  {
    name: "agreeableness",
    label: "I try to be kind and considerate in most situations.",
  },
  { name: "neuroticism", label: "I get anxious or stressed easily." },
  {
    name: "adaptability",
    label: "I adapt quickly to new situations and changes.",
  },
  {
    name: "creativity",
    label: "I often come up with original ideas and solutions.",
  },
  {
    name: "persistence",
    label: "I persist with tasks even when they become difficult.",
  },
];

const decisionScenarios = [
  {
    name: "riskChoice",
    scenario: "You are given two options:",
    optionA: "A guaranteed $500",
    optionB: "A 50% chance of winning $1,000, 50% chance of winning nothing",
  },
  {
    name: "jobChoice",
    scenario: "A company offers you two job options:",
    optionA: "Job A: Steady income of $70,000/year",
    optionB:
      "Job B: 50% chance of making $120,000, 50% chance of making $40,000",
  },
  {
    name: "investmentChoice",
    scenario: "You have $10,000 to invest:",
    optionA: "A diversified portfolio with average 7% annual return",
    optionB:
      "A single high-potential stock with possible 25% return or 15% loss",
  },
];

export function PreInterviewForm() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("personality");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    defaultValues: {
      // Initialize all form fields...
    },
  });

  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      localStorage.setItem("preInterviewData", JSON.stringify(values));
      router.push("/interview");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Pre-Interview Questionnaire</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Tabs value={currentTab} onValueChange={setCurrentTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personality">Personality</TabsTrigger>
                <TabsTrigger value="decisions">Decisions</TabsTrigger>
                <TabsTrigger value="financial">Financial</TabsTrigger>
                <TabsTrigger value="social">Social Views</TabsTrigger>
              </TabsList>

              <TabsContent value="personality" className="space-y-6">
                {personalityQuestions.map((question) => (
                  <FormField
                    key={question.name}
                    control={form.control}
                    name={question.name}
                    render={({ field }) => (
                      <FormItem>
                        <LikertScale field={field} label={question.label} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </TabsContent>

              <TabsContent value="decisions" className="space-y-6">
                {decisionScenarios.map((scenario) => (
                  <FormField
                    key={scenario.name}
                    control={form.control}
                    name={scenario.name}
                    render={({ field }) => (
                      <FormItem>
                        <ScenarioChoice
                          field={field}
                          scenario={scenario.scenario}
                          optionA={scenario.optionA}
                          optionB={scenario.optionB}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </TabsContent>

              <TabsContent value="financial" className="space-y-6">
                <FormField
                  control={form.control}
                  name="investmentStyle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How do you usually invest?</FormLabel>
                      <ScenarioChoice
                        field={field}
                        scenario="Which investment approach do you prefer?"
                        optionA="Safe, long-term investments (e.g., index funds, bonds)"
                        optionB="Higher-risk investments with potential higher returns"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="moneyDecision"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        If you suddenly received $10,000, what would you do?
                      </FormLabel>
                      <ScenarioChoice
                        field={field}
                        scenario="Choose your most likely action:"
                        optionA="Save it or invest it conservatively"
                        optionB="Invest in high-potential opportunities"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              <TabsContent value="social" className="space-y-6">
                <FormField
                  control={form.control}
                  name="socialConformity"
                  render={({ field }) => (
                    <FormItem>
                      <LikertScale
                        field={field}
                        label="I prefer to follow established social norms rather than stand out."
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="controversyHandling"
                  render={({ field }) => (
                    <FormItem>
                      <LikertScale
                        field={field}
                        label="I'm comfortable expressing unpopular opinions in group settings."
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="groupDecisions"
                  render={({ field }) => (
                    <FormItem>
                      <LikertScale
                        field={field}
                        label="I prefer making decisions as part of a group rather than alone."
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>

            <div className="flex justify-between pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Back
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Continue to Interview"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
