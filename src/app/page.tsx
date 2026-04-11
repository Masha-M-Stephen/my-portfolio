import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechWaveMarquee from "@/components/TechWaveMarquee";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Hobbies from "@/components/Hobbies";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import SectionIndicators from "@/components/SectionIndicators";
import LoadingScreen from "@/components/LoadingScreen";
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog";


export default function Home() {
  const blogPosts = getAllBlogPosts();
  const blogCategories = getBlogCategories();
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <SectionIndicators />
      <BackToTop />
      <main>
        <Hero />
        <TechWaveMarquee />

        {/* About Me */}
        <ScrollReveal>
          <section id="about" className="px-6 py-24">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-purple-light">
                Get to Know Me
              </h2>
              <h3 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                <span className="text-gradient-purple">About Me</span>
              </h3>
              <div className="space-y-6 text-center">
                <p className="text-base leading-relaxed text-text-muted">
                  As a Data Science and AI professional, I have enabled teams to
                  make better data-driven decisions ranging from Branding,
                  Understanding Customer Behavior, and Customer Service
                  Analytics, Ocean Logistic, to Supply Chain Inventory and Labor
                  Planning.
                </p>
                <p className="text-lg font-semibold text-foreground">
                  I solve business&apos; tough questions with AI & Data Science
                  solutions.
                </p>

                {/* Key areas */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                  {[
                    "NLP",
                    "Computer Vision",
                    "Agentic AI Systems",
                    "Big Data",
                    "Branding",
                    "Customer Behavior",
                    "Customer Service Analytics",
                    "Global Supply Chain & Ocean Logistics",
                    "Inventory Planning",
                    "Labor Planning",
                    "Process Improvement",
                    "Value Stream Mapping"
                  ].map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-purple-primary/20 bg-surface px-4 py-1.5 text-sm text-purple-light"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <Portfolio />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Services />
        </ScrollReveal>
        <ScrollReveal>
          <Blog posts={blogPosts} categories={blogCategories} />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Hobbies />
        </ScrollReveal>
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
