"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  AGE_OPTIONS,
  GENDER_OPTIONS,
  EDUCATION_OPTIONS,
  EMPLOYMENT_OPTIONS,
  INCOME_OPTIONS,
} from "@/lib/constants";

// Define form validation schema with required fields
const formSchema = z.object({
  age: z.string().min(1, { message: "Please select your age range" }),
  gender: z.string().min(1, { message: "Please select your gender" }),
  education: z
    .string()
    .min(1, { message: "Please select your education level" }),
  employmentStatus: z
    .string()
    .min(1, { message: "Please select your employment status" }),
  industry: z.string().min(2, { message: "Please enter your industry" }),
  householdIncome: z
    .string()
    .min(1, { message: "Please select your household income" }),
});

export function ScreenerForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "",
      gender: "",
      education: "",
      employmentStatus: "",
      industry: "",
      householdIncome: "",
    },
    mode: "onSubmit", // Validate on form submission
  });

  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      // Store form data in localStorage for pre-interview
      localStorage.setItem("screenerData", JSON.stringify(values));

      const qualifies = checkIfQualifies(values);
      if (qualifies) {
        router.push("/pre-interview");
      } else {
        router.push("/thank-you");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  function checkIfQualifies(data) {
    // Basic qualification criteria
    return data.age !== "under-18" && data.employmentStatus !== "not-working";
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Persona Interview Screener</CardTitle>
        <CardDescription>
          Please answer these quick questions to determine your eligibility for
          the study. All fields are required.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Age Field */}
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-black font-medium">
                    What is your age? <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {AGE_OPTIONS.map((option) => (
                        <FormItem
                          key={option.value}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={option.value} />
                          </FormControl>
                          <FormLabel className="font-normal text-gray-900">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Gender Field */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-black font-medium">
                    What is your gender? <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {GENDER_OPTIONS.map((option) => (
                        <FormItem
                          key={option.value}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={option.value} />
                          </FormControl>
                          <FormLabel className="font-normal text-gray-900">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Education Field */}
            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-black font-medium">
                    What is your highest level of education?{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {EDUCATION_OPTIONS.map((option) => (
                        <FormItem
                          key={option.value}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={option.value} />
                          </FormControl>
                          <FormLabel className="font-normal text-gray-900">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Employment Status Field */}
            <FormField
              control={form.control}
              name="employmentStatus"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-black font-medium">
                    What is your employment status?{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {EMPLOYMENT_OPTIONS.map((option) => (
                        <FormItem
                          key={option.value}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={option.value} />
                          </FormControl>
                          <FormLabel className="font-normal text-gray-900">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Industry Field */}
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black font-medium">
                    Which industry do you work in?{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your industry" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Household Income Field */}
            <FormField
              control={form.control}
              name="householdIncome"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-black font-medium">
                    What is your household income?{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {INCOME_OPTIONS.map((option) => (
                        <FormItem
                          key={option.value}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={option.value} />
                          </FormControl>
                          <FormLabel className="font-normal text-gray-900">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
              onClick={() => {
                // This ensures validation errors are shown for empty fields
                if (Object.keys(form.formState.dirtyFields).length < 6) {
                  form.trigger();
                }
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
