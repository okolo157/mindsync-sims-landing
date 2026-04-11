import React, { useState } from "react";
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  Send,
  MessageSquare,
  Building2,
  User,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";

import { toast } from "sonner";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";

const FloatingElement = ({
  children,
  delay = 0,
  duration = 3,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/tx7hvn7qumgog2mq5yknrbnwtqlv7325";

      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: "Mindsync Contact Form"
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message to the server.");
      }

      setIsSubmitted(true);
      toast.success("Message sent successfully! We'll respond within 2 hours.");
      setFormData({
        name: "",
        email: "",
        organization: "",
        role: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@mindsync.solutions",
      sub: "Response within 2 hours",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "group-hover:border-blue-500/50",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+233 5436 13605, +234 9044 848 699",
      sub: "Mon-Fri, 9am-6pm EST",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "group-hover:border-emerald-500/50",
    },
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Mindsync Support & Sales",
    "description": "Ready to transform your institution? Contact our team to launch your next-generation school management system.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Mindsync Solutions",
      "email": "hello@mindsync.solutions",
      "telephone": "+233 5436 13605"
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFDFF] dark:bg-[#030712] px-3 text-slate-900 dark:text-white overflow-x-hidden selection:bg-indigo-500/30 font-sans transition-colors duration-300">
      <SEO
        title="Contact Us | Mindsync"
        description="Get in touch with the Mindsync team. We're here to help you launch your next-generation school management system."
        canonicalUrl="https://mindsync.solutions/contact"
      />
      <StructuredData data={contactSchema} />
      <Navbar />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-10 opacity-20">
          <FloatingElement delay={0} duration={4}>
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 rotate-12 blur-sm" />
          </FloatingElement>
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-20">
          <FloatingElement delay={1} duration={5}>
            <div className="w-32 h-32 rounded-full border border-indigo-500/30 blur-[2px]" />
          </FloatingElement>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/50 dark:from-white dark:via-white/90 dark:to-white/50"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-600/90 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Ready to transform your institution? Our team is here to help you
            launch your next-generation school management system.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl border border-white dark:border-white/5 bg-white/60 dark:bg-white/[0.02] hover:bg-white/80 dark:hover:bg-white/[0.05] backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ${info.border}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${info.bg} ${info.color}`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F172A] dark:text-white">
                      {info.title}
                    </h3>
                    <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
                      {info.value}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {info.sub}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl mt-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ready for a Demo?</h3>
                <p className="text-indigo-100 mb-6">
                  See exactly how our platform can streamline your operations.
                  Schedule a personalized walkthrough with our experts.
                </p>
                <Button
                  onClick={() => (window.location.href = "/schedule-demo")}
                  className="bg-white text-indigo-600 hover:bg-indigo-50 border-none w-full sm:w-auto"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-8 rounded-3xl border border-white dark:border-white/10 bg-white/60 dark:bg-white/[0.02] backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                    Message Sent!
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Thank you for reaching out. We'll respond within 2 business hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-[#0F172A] dark:text-white flex items-center gap-2">
                    <MessageSquare className="text-indigo-500" />
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-[#0F172A] font-semibold dark:text-slate-300"
                        >
                          Full Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            enableUppercaseDisplay={false}
                            className="pl-10 bg-white/60 dark:bg-white/5 border-white dark:border-white/10 text-[#0F172A] dark:text-white focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-slate-700 dark:text-slate-300"
                        >
                          Work Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@school.edu"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            enableUppercaseDisplay={false}
                            className="pl-10 bg-white/60 dark:bg-white/5 border-white dark:border-white/10 text-[#0F172A] dark:text-white focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="organization"
                          className="text-slate-700 dark:text-slate-300"
                        >
                          Organization
                        </Label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                          <Input
                            id="organization"
                            name="organization"
                            placeholder="School Name"
                            value={formData.organization}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            enableUppercaseDisplay={false}
                            className="pl-10 bg-white/60 dark:bg-white/5 border-white dark:border-white/10 text-[#0F172A] dark:text-white focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="role"
                          className="text-slate-700 dark:text-slate-300"
                        >
                          Role
                        </Label>
                        <Input
                          id="role"
                          name="role"
                          placeholder="Principal, Admin, etc."
                          value={formData.role}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          enableUppercaseDisplay={false}
                          className="bg-white/60 dark:bg-white/5 border-white dark:border-white/10 text-[#0F172A] dark:text-white focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-slate-700 dark:text-slate-300"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        enableUppercaseDisplay={false}
                        className="bg-white/60 dark:bg-white/5 border-white dark:border-white/10 text-[#0F172A] dark:text-white focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none font-medium"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white text-lg font-medium rounded-xl shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
