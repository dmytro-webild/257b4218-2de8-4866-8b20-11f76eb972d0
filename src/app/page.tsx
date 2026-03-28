"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="ZitePilot"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Get a Website That Actually Brings You Customers"
      description="We design and manage professional websites for local businesses in Sidcup—so you can focus on running your business."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/natural-beauty-young-woman_329181-1207.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cafe-customer-agreement-worker-planning_1150-1575.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-competitive-employee_1098-2870.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-woman_23-2147615403.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-competitive-employee_1098-2870.jpg",
          alt: "Client 5",
        },
      ]}
      avatarText="Trusted by 50+ local businesses"
      buttons={[
        {
          text: "Call Now",
          href: "tel:07544823769",
        },
        {
          text: "Get Your Free Quote",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Web Design",
          description: "Beautiful, fast, mobile-friendly websites that convert visitors into callers.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-vector/information-technology-vectors_23-2147501064.jpg",
            imageAlt: "Web Design",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-vector/information-technology-vectors_23-2147501064.jpg",
            imageAlt: "Web Design",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/glad-hipster-female-with-cheerful-expression-wears-cap-denim-overalls-sits-front-opened-laptop-computer-drinks-fresh-summer-cocktail-enjoys-online-communication-free-internet_273609-3049.jpg",
          imageAlt: "local web designer working on laptop",
        },
        {
          id: 2,
          title: "Local SEO",
          description: "Get found on Google by customers searching for your services in Sidcup.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-vector/geographic-location-system_24877-52111.jpg",
            imageAlt: "SEO",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-vector/geographic-location-system_24877-52111.jpg",
            imageAlt: "SEO",
          },
          imageSrc: "http://img.b2bpic.net/free-vector/information-technology-vectors_23-2147501064.jpg",
          imageAlt: "web design service icon",
        },
        {
          id: 3,
          title: "Managed Hosting",
          description: "Lightning-fast hosting, daily backups, and security included.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-vector/gradient-data-logo-template_23-2149203400.jpg",
            imageAlt: "Hosting",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-vector/gradient-data-logo-template_23-2149203400.jpg",
            imageAlt: "Hosting",
          },
          imageSrc: "http://img.b2bpic.net/free-vector/geographic-location-system_24877-52111.jpg",
          imageAlt: "local seo search optimization",
        },
      ]}
      showStepNumbers={false}
      title="Professional Services for Local Growth"
      description="We provide end-to-end digital services tailored for your business needs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="ZitePilot transformed our online presence. We're getting more leads and calls than ever before. Highly recommended for any local business!"
      rating={5}
      author="John Doe, Sidcup Builder"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/natural-beauty-young-woman_329181-1207.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cafe-customer-agreement-worker-planning_1150-1575.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-competitive-employee_1098-2870.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-woman_23-2147615403.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-competitive-employee_1098-2870.jpg",
          alt: "Client 5",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get in touch"
      title="Ready to Grow Your Business?"
      description="Call us today or fill out the form for a fast, no-obligation quote. 07544 823769"
      imageSrc="http://img.b2bpic.net/free-photo/glad-hipster-female-with-cheerful-expression-wears-cap-denim-overalls-sits-front-opened-laptop-computer-drinks-fresh-summer-cocktail-enjoys-online-communication-free-internet_273609-3049.jpg"
      mediaAnimation="slide-up"
      mediaPosition="right"
      inputPlaceholder="Enter your business email"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      title="Frequently Asked Questions"
      description="Everything you need to know about our local web services."
      faqsAnimation="slide-up"
      faqs={[
        {
          id: "1",
          title: "How long does a website build take?",
          content: "Typically 2-4 weeks depending on the complexity of your requirements.",
        },
        {
          id: "2",
          title: "Do you offer ongoing support?",
          content: "Yes, our managed hosting plans include security updates, backups, and minor content edits.",
        },
        {
          id: "3",
          title: "Can you help with Google rankings?",
          content: "Absolutely, our local SEO service is specifically designed to get businesses in Sidcup found by local customers.",
        },
        {
          id: "4",
          title: "Is my website mobile-friendly?",
          content: "Every site we build is fully responsive, ensuring it looks and performs perfectly on phones, tablets, and desktops.",
        },
        {
          id: "5",
          title: "What are your payment terms?",
          content: "We offer flexible payment options to help small businesses manage their cash flow while investing in growth.",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Portfolio",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Web Design",
              href: "#",
            },
            {
              label: "SEO",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 ZitePilot"
      bottomRightText="Serving Sidcup & South East London"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
