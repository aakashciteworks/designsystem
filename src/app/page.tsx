import { ArrowRight, BarChart3, CreditCard, Globe2, ShieldCheck, Sparkles, WalletCards } from "lucide-react"
import {
  Accordion,
  Badge,
  Button,
  Card,
  DataTable,
  FeatureCard,
  Footer,
  Input,
  LogoCloud,
  Navbar,
  PricingCard,
  SectionHeader,
  Select,
  Stat,
  Tabs,
  TestimonialCard,
  Textarea,
} from "@/components"

const iconClass = "size-9 rounded-[10px] bg-white p-2 text-brand shadow-[var(--shadow-sm)]"

export default function DesignSystemShowcase() {
  return (
    <main>
      <Navbar />

      <section className="overflow-hidden border-b border-line py-20 md:py-28">
        <div className="ds-container">
          <Badge tone="brand">Finance, at full speed</Badge>
          <div className="mt-7 grid items-end gap-10 lg:grid-cols-[1fr_360px]">
            <h1 className="ds-display ds-balance max-w-5xl">The financial operating system for ambitious teams.</h1>
            <div className="pb-2">
              <p className="text-base leading-7 text-muted">Control spend, move money, and close the books with one calm, connected workspace.</p>
              <div className="mt-7 flex flex-wrap gap-3"><Button size="lg">Start building <ArrowRight className="size-4" /></Button><Button size="lg" variant="secondary">See the platform</Button></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="ds-container"><p className="mb-6 text-center text-xs text-muted">Trusted by teams building what comes next</p><LogoCloud logos={["NORTHSTAR", "QUARRY", "LUMEN", "FIELD", "KINETIC", "NOTCH"]} /></div>
      </section>

      <section id="product" className="py-20 md:py-28">
        <div className="ds-container">
          <SectionHeader eyebrow="One intelligent platform" title="Everything your finance team needs. Nothing it doesn’t." description="A disciplined component language built around fast scanning, clear hierarchy, and a single warm action color." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <FeatureCard number="01" title="Cards with guardrails" description="Issue physical and virtual cards with controls that follow every employee."><CreditCard className={iconClass} /></FeatureCard>
            <FeatureCard number="02" title="Real-time visibility" description="See every dollar in motion and understand what changed before month-end."><BarChart3 className={iconClass} /></FeatureCard>
            <FeatureCard number="03" title="Global by default" description="Operate across entities and currencies without multiplying your workflows."><Globe2 className={iconClass} /></FeatureCard>
          </div>
        </div>
      </section>

      <section className="bg-[#080d14] py-20 text-white md:py-28">
        <div className="ds-container grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div><p className="ds-eyebrow text-brand">Built for control</p><h2 className="ds-heading ds-balance mt-5">Move faster without losing the plot.</h2><p className="mt-6 max-w-lg text-base leading-7 text-white/60">Policy becomes part of the product, so teams can act autonomously while finance stays confidently in control.</p></div>
          <div className="grid grid-cols-2 gap-x-6"><Stat value="42%" label="Faster close" detail="Average time saved" /><Stat value="3.2×" label="More visibility" detail="Across every entity" /><Stat value="24/7" label="Automated controls" detail="Before the swipe" /><Stat value="150+" label="Countries" detail="Ready to operate" /></div>
        </div>
      </section>

      <section id="solutions" className="py-20 md:py-28">
        <div className="ds-container">
          <SectionHeader eyebrow="Patterns" title="Product surfaces that stay composed under pressure." />
          <div className="mt-12"><Tabs items={[
            { value: "overview", label: "Overview", content: <DataTable columns={["Merchant", "Owner", "Amount", "Status"]} rows={[["Northstar Cloud", "Maya Chen", "$4,280.00", <Badge key="a" tone="success">Approved</Badge>], ["Field Labs", "Noah Williams", "$1,190.50", <Badge key="b">Pending</Badge>], ["Kinetic Air", "Ava Patel", "$8,040.00", <Badge key="c" tone="success">Approved</Badge>]]} /> },
            { value: "controls", label: "Controls", content: <Card className="grid gap-5 md:grid-cols-3"><div><ShieldCheck className={iconClass} /><h3 className="mt-4 font-medium">Policy-first</h3><p className="mt-2 text-sm leading-6 text-muted">Set rules once and apply them everywhere.</p></div><div><WalletCards className={iconClass} /><h3 className="mt-4 font-medium">Flexible limits</h3><p className="mt-2 text-sm leading-6 text-muted">Shape controls around real team needs.</p></div><div><Sparkles className={iconClass} /><h3 className="mt-4 font-medium">Smart review</h3><p className="mt-2 text-sm leading-6 text-muted">Surface exceptions, not busywork.</p></div></Card> },
          ]} /></div>
        </div>
      </section>

      <section id="customers" className="bg-cream py-20 md:py-28">
        <div className="ds-container"><SectionHeader eyebrow="Customer stories" title="Clarity compounds." /><div className="mt-12 grid gap-5 md:grid-cols-2"><TestimonialCard quote="Our team can move at startup speed without finance becoming the bottleneck." name="Maya Chen" role="VP Finance, Northstar" /><TestimonialCard quote="The system feels considered. People know what to do before they have to ask." name="Noah Williams" role="COO, Kinetic" /></div></div>
      </section>

      <section className="py-20 md:py-28">
        <div className="ds-container"><SectionHeader eyebrow="Plans" title="Start focused. Scale without friction." align="center" /><div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2"><PricingCard name="Essentials" price="$0" description="A clean foundation for modern teams." features={["Unlimited virtual cards", "Automated receipt matching", "Live spend controls"]} /><PricingCard name="Enterprise" price="Let’s talk" description="Advanced control for complex organizations." features={["Multi-entity management", "Custom policy workflows", "Dedicated implementation"]} featured /></div></div>
      </section>

      <section id="resources" className="border-y border-line py-20 md:py-28">
        <div className="ds-container grid gap-12 lg:grid-cols-[1fr_1fr]"><SectionHeader eyebrow="Questions" title="The details, made simple." /><Accordion items={[{ question: "Can teams start with a single workflow?", answer: "Yes. Begin with cards or expense management, then add capabilities without rebuilding the operating model." }, { question: "How are controls applied?", answer: "Rules can follow employees, departments, merchants, and budgets, with clear exceptions when human review is needed." }, { question: "Does the system support global operations?", answer: "The platform pattern is designed for multiple entities, currencies, and regional policies." }]} /></div>
      </section>

      <section className="py-20 md:py-28">
        <div className="ds-container grid gap-12 lg:grid-cols-[1fr_1fr]"><SectionHeader eyebrow="Get started" title="Build the next chapter with us." description="This form demonstrates the system’s compact controls, cool-blue hairlines, and accessible focus treatment." /><Card><div className="grid gap-4 sm:grid-cols-2"><label className="text-xs font-medium">First name<Input className="mt-2" placeholder="Avery" /></label><label className="text-xs font-medium">Work email<Input className="mt-2" type="email" placeholder="avery@company.com" /></label></div><label className="mt-4 block text-xs font-medium">Company size<Select className="mt-2" defaultValue=""><option value="" disabled>Select a range</option><option>1–50</option><option>51–250</option><option>251–1,000</option><option>1,000+</option></Select></label><label className="mt-4 block text-xs font-medium">What are you solving?<Textarea className="mt-2" placeholder="Tell us about your current workflow…" /></label><Button className="mt-5 w-full" size="lg">Request a demo</Button></Card></div>
      </section>

      <Footer groups={[{ title: "Product", links: ["Cards", "Expenses", "Travel"] }, { title: "Company", links: ["About", "Careers", "News"] }, { title: "Legal", links: ["Privacy", "Terms", "Security"] }]} />
    </main>
  )
}
