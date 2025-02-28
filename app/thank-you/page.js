import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Thank You</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            Thank you for your interest in participating in our study. Based on
            your responses, we have determined that you do not meet the criteria
            for this particular study.
          </p>
          <p className="text-lg">
            We appreciate your time and hope you will consider participating in
            future studies.
          </p>
          <Link
            href="/screener"
            className="text-blue-500 hover:text-blue-700 mt-4 block"
          >
            Return to Screener
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
