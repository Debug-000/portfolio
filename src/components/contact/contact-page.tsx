import React from "react";
import { MessageSquare } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import ContactSidebar from "./contact-sidebar";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 max-w-5xl mx-auto space-y-24">
      <SectionHeader
        title="Let's Build Systems"
        subtitle="Interested in hiring me for high-scale engineering projects or consulting on infrastructure automation?"
        icon={<MessageSquare className="w-5 h-5" />}
      />

      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <ContactSidebar />
        </div>

        <div className="md:col-span-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
