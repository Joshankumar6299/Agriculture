import React, { useState } from "react";

const faqs = {
  general: [
    { id: 1, question: "What is Agricultural Biotechnology?", answer: "Lorem ipsum dolor sit amet...", open: true },
    { id: 2, question: "Can the products be applied during rainy season?", answer: "Lorem ipsum dolor sit amet..." },
    { id: 3, question: "What vegetables can I grow in my hothouse?", answer: "Lorem ipsum dolor sit amet..." },
  ],
  other: [
    { id: 4, question: "What is modern agriculture?", answer: "Lorem ipsum dolor sit amet...", open: true },
    { id: 5, question: "What are the 2 main types of farming?", answer: "Lorem ipsum dolor sit amet..." },
    { id: 6, question: "What are the different types of greenhouse?", answer: "Lorem ipsum dolor sit amet..." },
  ],
  contact: [
    {
      id: 7,
      question: "What are the ideal temperature and humidity conditions for strawberry farming?",
      answer: "Lorem ipsum dolor sit amet...",
      open: true,
    },
    { id: 8, question: "What are the common diseases and pests that affect strawberry plants?", answer: "Lorem ipsum dolor sit amet..." },
    { id: 9, question: "What are the government initiatives in the agriculture sector?", answer: "Lorem ipsum dolor sit amet..." },
    { id: 10, question: "How can we adapt agriculture to the impacts of climate change?", answer: "Lorem ipsum dolor sit amet..." },
    { id: 11, question: "What can be done to reduce greenhouse gas emissions from agriculture?", answer: "Lorem ipsum dolor sit amet..." },
  ],
};

const AccordionItem = ({ question, answer, index, isOpen, toggle }) => {
  return (
    <div className="mb-2">
      <button
        onClick={toggle}
        className={`w-full text-left px-5 py-3 rounded-lg flex justify-between items-center font-semibold text-sm ${
          isOpen ? "bg-green-700 text-white" : "bg-white text-gray-800"
        }`}
      >
        <span>{String(index).padStart(2, "0")}. {question}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="px-5 py-4 text-sm text-gray-600 bg-white rounded-b-lg">
          {answer}
        </div>
      )}
    </div>
  );
};

const AccordionGroup = ({ title, tag, items }) => {
  const [openIndex, setOpenIndex] = useState(
    items.findIndex((item) => item.open) || null
  );

  return (
    <div className="mb-10">
      <div className="mb-2">
        <span className="bg-gray-100 text-xs px-2 py-1 rounded-full font-medium text-gray-500">{tag}</span>
      </div>
      <h2 className="text-2xl font-semibold mb-5">{title}</h2>
      {items.map((item, i) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          index={i + 1}
          isOpen={openIndex === i}
          toggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="bg-[#f7f6ed] min-h-screen p-8">
      <div className="grid lg:grid-cols-2 gap-10">
        <AccordionGroup title="General Questions" tag="Most Ask" items={faqs.general} />
        <AccordionGroup title="Other Questions" tag="People Know" items={faqs.other} />
      </div>

      <AccordionGroup title="Happy to Answer All Your Questions" tag="Contact Us Now" items={faqs.contact} />
    </div>
  );
}
