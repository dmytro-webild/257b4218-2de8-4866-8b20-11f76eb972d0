"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={[
              { name: "Services", id: "services" },
              { name: "Reviews", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="2026 ZitePilot"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroCentered
            background={{ variant: "rotated-rays-animated" }}
            title="Get a Website That Actually Brings You Customers"
            description="We design and manage professional websites for businesses around London—so you can focus on running your business."
            avatars={[]}
            buttons={[
              { text: "Call Now", href: "tel:07544823769" },
              { text: "Get Your Free Quote", href: "#contact" },
            ]}
            marqueeItems={[
              { type: 'image', src: "http://img.b2bpic.net/free-vector/information-technology-vectors_23-2147501064.jpg?_wi=1", alt: "Tech" },
              { type: 'image', src: "http://img.b2bpic.net/free-vector/geographic-location-system_24877-52111.jpg?_wi=1", alt: "SEO" },
              { type: 'image', src: "http://img.b2bpic.net/free-vector/gradient-data-logo-template_23-2149203400.jpg?_wi=1", alt: "Data" }
            ]}
            buttonAnimation="slide-up"
            buttonClassName="!opacity-100 !transform-none !shadow-lg !scale-105 !ring-2 !ring-offset-2"
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardNine
            showStepNumbers={false}
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            title="Professional Services for Local Growth"
            description="We provide end-to-end digital services tailored for your business needs."
            features={[
              {
                id: 1,
                title: "Web Design",                description: "Beautiful, fast, mobile-friendly websites that convert visitors into callers.",                phoneOne: { imageSrc: "http://img.b2bpic.net/free-vector/information-technology-vectors_23-2147501064.jpg?_wi=1", imageAlt: "Web Design" },
                phoneTwo: { imageSrc: "http://img.b2bpic.net/free-vector/information-technology-vectors_23-2147501064.jpg?_wi=2", imageAlt: "Web Design" }
              },
              {
                id: 2,
                title: "Local SEO",                description: "Get found on Google by customers searching for your services around London.",                phoneOne: { imageSrc: "http://img.b2bpic.net/free-vector/geographic-location-system_24877-52111.jpg?_wi=1", imageAlt: "SEO" },
                phoneTwo: { imageSrc: "http://img.b2bpic.net/free-vector/geographic-location-system_24877-52111.jpg?_wi=2", imageAlt: "SEO" }
              },
              {
                id: 3,
                title: "Managed Hosting",                description: "Lightning-fast hosting, daily backups, and security included.",                phoneOne: { imageSrc: "http://img.b2bpic.net/free-vector/gradient-data-logo-template_23-2149203400.jpg?_wi=1", imageAlt: "Hosting" },
                phoneTwo: { imageSrc: "http://img.b2bpic.net/free-vector/gradient-data-logo-template_23-2149203400.jpg?_wi=2", imageAlt: "Hosting" }
              },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardThirteen
            title="What Our Clients Say"
            description="Hear from local business owners who have scaled their presence with 2026 ZitePilot."
            showRating={true}
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Builder Client", handle: "@local_construction", testimonial: "2026 ZitePilot transformed our online presence. We're getting more leads and calls than ever before.", rating: 5 },
              { id: "2", name: "Cafe Owner", handle: "@london_bites", testimonial: "Fantastic service! Our website is now our biggest source of new customers.", rating: 5 },
              { id: "3", name: "Local Shop", handle: "@london_retail", testimonial: "Professional and reliable. Highly recommended for any local business in the area.", rating: 4 },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplit
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            tag="Get in touch"
            title="Ready to Grow Your Business?"
            description="Call us today or fill out the form for a fast, no-obligation quote. 07544 823769"
            imageSrc="http://img.b2bpic.net/free-photo/glad-hipster-female-with-cheerful-expression-wears-cap-denim-overalls-sits-front-opened-laptop-computer-drinks-fresh-summer-cocktail-enjoys-online-communication-free-internet_273609-3049.jpg"
            mediaAnimation="slide-up"
            mediaPosition="right"
            inputPlaceholder="Enter your business email"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "Company", items: [{ label: "About", href: "#" }, { label: "Portfolio", href: "#" }] },
              { title: "Services", items: [{ label: "Web Design", href: "#" }, { label: "SEO", href: "#" }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }] },
            ]}
            bottomLeftText="© 2026 2026 ZitePilot"
            bottomRightText="Serving customers around London"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
