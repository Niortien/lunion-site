"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Why should I choose a subscription plan over hiring a full-time designer?",
      answer:
        "A subscription plan offers flexibility, cost-effectiveness, and access to diverse design expertise without the overhead of hiring, managing, and providing benefits to a full-time employee. You get professional designs on-demand with predictable monthly costs.",
    },
    {
      id: 2,
      question: "Is there a limit to how many requests I can have?",
      answer:
        "Most subscription plans offer unlimited design requests, but they are handled one at a time in a queue system. You can submit as many requests as you need, and they will be completed in order of priority.",
    },
    {
      id: 3,
      question: "How fast will I receive my designs?",
      answer:
        "Most design requests are completed within 1-3 business days, depending on the complexity. Simple requests like social media graphics may be completed within 24 hours, while more complex projects may take longer.",
    },
    {
      id: 4,
      question: "What if I don't like the design?",
      answer:
        "We offer unlimited revisions until you're completely satisfied with the design. You can provide feedback and request changes, and our designers will work with you to achieve the perfect result.",
    },
    {
      id: 5,
      question: "Is there any design work you don't cover?",
      answer:
        "While we cover most design needs including web design, branding, print materials, and digital graphics, we typically don't handle complex 3D modeling, video production, or highly specialized technical illustrations.",
    },
    {
      id: 6,
      question: "Are there any refunds if I don't like the service?",
      answer:
        "We offer a satisfaction guarantee with a refund policy within the first 14 days if you're not completely satisfied with our service. After that period, you can cancel your subscription at any time.",
    },
  ];

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(292deg, rgba(155, 123, 191, 1) 48%, rgba(21, 12, 31, 1) 82%, rgba(21, 12, 31, 1) 100%)",
      }}
    >
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <div className=""></div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item) => {
            const isOpen = openItems.has(item.id);

            return (
              <div
                key={item.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group transition-all duration-200"
                >
                  <h3 className="text-white text-lg lg:text-xl font-medium pr-8 group-hover:text-purple-200 transition-colors">
                    {item.question}
                  </h3>
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full flex-shrink-0 transition-all duration-300 group-hover:bg-white/20">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-white transition-transform duration-300" />
                    ) : (
                      <Plus className="w-4 h-4 text-white transition-transform duration-300" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-8 pb-6">
                    <div className="h-px bg-white/10 mb-4"></div>
                    <p className="text-purple-100 text-base lg:text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-purple-200 text-lg mb-6">
            Vous ne trouvez pas la réponse que vous cherchez ?
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Contactez-nous
          </button>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-indigo-400/10 rounded-full blur-lg"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-purple-300/10 rounded-full blur-md"></div>
    </section>
  );
}
