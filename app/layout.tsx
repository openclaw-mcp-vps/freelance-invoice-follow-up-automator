import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvoiceFollow – Automate Polite Invoice Follow-Ups",
  description: "Automatically sends personalized, professionally-worded follow-up emails for overdue invoices with escalating urgency and payment links. Built for freelancers and consultants."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8c1829b3-89b0-4ad1-952b-25ac4db122d6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
