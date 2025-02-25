import { ProgressLayout } from "@/components/layout/progress-layout";

export default function RootLayout({ children }) {
  return (
    <div>
      <ProgressLayout>{children}</ProgressLayout>
    </div>
  );
}
