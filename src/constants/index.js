import {
  ShoppingBag,
  Rocket,
  Globe,
  LineChart,
  CreditCard,
  Newspaper,
} from "lucide-react";

import seoImg from "../assets/seo.png";
import ppcImg from "../assets/ppc.png";
import socialImg from "../assets/social-media.png";
import contentImg from "../assets/content-creation.png";
import emailImg from "../assets/email-marketing.png";
import analyticsImg from "../assets/analytics.png";

import johnSmithImg from "../assets/john-smith.jpg";
import janeDoeImg from "../assets/jane-doe.jpg";
import michaelBrownImg from "../assets/michael-brown.jpg";
import emilyJohnsonImg from "../assets/emily-johnson.jpg";
import brianWilliamsImg from "../assets/brian-williams.avif";
import sarahKimImg from "../assets/sarah-kim.avif";


export const navLinks = [
  { id: "about-us", title: "About Us" },
  { id: "services", title: "Services" },
  { id: "use-cases", title: "Use Cases" },
  { id: "pricing", title: "Pricing" },
  { id: "blog", title: "Blog" },
];

export const companies = [
  { name: "Amazon", icon: ShoppingBag },
  { name: "SpaceX", icon: Rocket },
  { name: "Google", icon: Globe },
  { name: "Netflix", icon: LineChart },
  { name: "Visa", icon: CreditCard },
  { name: "The Times", icon: Newspaper },
];

export const marketingServices = [
  {
    id: "seo",
    titleLine1: "Search Engine",
    titleLine2: "Optimization",
    image: seoImg,
  },
  {
    id: "ppc",
    titleLine1: "Pay-Per-Click",
    titleLine2: "Advertising",
    image: ppcImg,
  },
  {
    id: "social-media",
    titleLine1: "Social Media",
    titleLine2: "Marketing",
    image: socialImg,
  },
  {
    id: "email",
    titleLine1: "Email",
    titleLine2: "Marketing",
    image: emailImg,
  },
  {
    id: "content",
    titleLine1: "Content",
    titleLine2: "Creation",
    image: contentImg,
  },
  {
    id: "analytics",
    titleLine1: "Analytics",
    titleLine2: "and Tracking",
    image: analyticsImg,
  },
];

export const caseStudies = [
  {
    id: "restaurant-ppc",
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    id: "b2b-seo",
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    id: "retail-social",
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export const processSteps = [
  {
    id: "consultation",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "research-strategy",
    title: "Research and Strategy Development",
    description:
      "We conduct thorough market research, competitor analysis, and audience profiling to create a data-driven marketing strategy tailored to your goals.",
  },
  {
    id: "implementation",
    title: "Implementation",
    description:
      "Our team executes the strategy across all selected channels — from PPC and SEO to social media — ensuring consistent messaging and brand alignment.",
  },
  {
    id: "monitoring-optimization",
    title: "Monitoring and Optimization",
    description:
      "We continuously monitor performance metrics and user behavior, making real-time adjustments to maximize ROI and campaign effectiveness.",
  },
  {
    id: "reporting-communication",
    title: "Reporting and Communication",
    description:
      "Regular reports and check-ins keep you updated on progress, insights, and next steps, ensuring full transparency and alignment.",
  },
  {
    id: "continual-improvement",
    title: "Continual Improvement",
    description:
      "We believe in continuous growth. Based on performance insights and evolving goals, we refine strategies to ensure long-term success and adaptability.",
  },
];

export const teamMembers = [
  {
    id: "john-smith",
    name: "John Smith",
    position: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    image: johnSmithImg,
  },
  {
    id: "jane-doe",
    name: "Jane Doe",
    position: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills.",
    image: janeDoeImg,
  },
  {
    id: "michael-brown",
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
    image: michaelBrownImg,
  },
  {
    id: "emily-johnson",
    name: "Emily Johnson",
    position: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.",
    image: emilyJohnsonImg,
  },
  {
    id: "brian-williams",
    name: "Brian Williams",
    position: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.",
    image: brianWilliamsImg,
  },
  {
    id: "sarah-kim",
    name: "Sarah Kim",
    position: "Content Creator",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.",
    image: sarahKimImg,
  },
];

export const testimonials = [
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "Positivus has completely transformed our digital strategy. Their expertise in SEO and PPC has driven measurable results, and their team is always ready to help with creative solutions.",
    name: "Emma Johnson",
    position: "Head of Growth at BrightWave",
  },
  {
    quote:
      "Thanks to Positivus, we’ve doubled our lead generation through social media campaigns. They understand our audience and tailor everything perfectly to our brand.",
    name: "Liam Chen",
    position: "Social Media Manager at NovaTech",
  },
  {
    quote:
      "From strategy to execution, the Positivus team has exceeded our expectations. They’re proactive, data-driven, and genuinely invested in our success.",
    name: "Sophia Martinez",
    position: "VP of Marketing at GreenLine Logistics",
  },
  {
    quote:
      "Our website traffic and conversions have grown steadily since we started working with Positivus. Their support is top-notch, and their results speak for themselves.",
    name: "Noah Patel",
    position: "Co-Founder at UrbanBloom",
  },
];

