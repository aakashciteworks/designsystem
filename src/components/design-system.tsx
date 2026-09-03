"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Slot } from "@radix-ui/react-slot"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { ArrowRight, Check, ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-[10px] px-3 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        primary: "bg-brand text-white hover:bg-brand-hover",
        secondary: "border border-line bg-white text-ink hover:bg-[#f6f7f9]",
        ghost: "text-ink hover:bg-black/[.05]",
        dark: "bg-[#15191e] text-white hover:bg-[#2a3038]",
        link: "h-auto rounded-none px-0 underline decoration-transparent underline-offset-4 hover:decoration-current",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-9 px-3",
        lg: "h-11 px-5 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

export function Badge({ className, tone = "neutral", ...props }: React.HTMLAttributes<HTMLSpanElement> & { tone?: "neutral" | "brand" | "success" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium tracking-[.04em] uppercase",
        tone === "neutral" && "bg-black/[.055] text-muted",
        tone === "brand" && "bg-brand-soft text-[#b43b0b]",
        tone === "success" && "bg-[#e9f6ef] text-[#18794e]",
        className,
      )}
      {...props}
    />
  )
}

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn("h-9 w-full rounded-[10px] border border-line bg-white px-3 text-sm text-ink shadow-[var(--shadow-sm)] placeholder:text-[#8b8d98] focus:border-brand focus:outline-none focus:ring-3 focus:ring-[var(--ring)]", className)} {...props} />
  ),
)
Input.displayName = "Input"

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn("min-h-28 w-full resize-y rounded-[10px] border border-line bg-white px-3 py-2.5 text-sm text-ink shadow-[var(--shadow-sm)] placeholder:text-[#8b8d98] focus:border-brand focus:outline-none focus:ring-3 focus:ring-[var(--ring)]", className)} {...props} />
  ),
)
Textarea.displayName = "Textarea"

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <select ref={ref} className={cn("h-9 w-full appearance-none rounded-[10px] border border-line bg-white px-3 pr-9 text-sm text-ink shadow-[var(--shadow-sm)] focus:border-brand focus:outline-none focus:ring-3 focus:ring-[var(--ring)]", className)} {...props}>{children}</select>
  ),
)
Select.displayName = "Select"

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-sm)]", className)} {...props} />
}

export function Navbar({ brand = "Ember", links = ["Product", "Solutions", "Customers", "Resources"] }: { brand?: string; links?: string[] }) {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-xl">
      <div className="ds-container flex h-[var(--nav-height)] items-center justify-between">
        <a href="#" className="text-lg font-medium tracking-[-.03em]">{brand}<span className="text-brand">.</span></a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-muted transition-colors hover:text-ink">{link}</a>)}
        </nav>
        <div className="hidden items-center gap-2 md:flex"><Button variant="ghost">Sign in</Button><Button>Get started</Button></div>
        <button className="rounded-md p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      {open && <nav className="border-t border-line bg-canvas px-4 py-4 md:hidden">{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="block py-3 text-sm">{link}</a>)}</nav>}
    </header>
  )
}

export function SectionHeader({ eyebrow, title, description, align = "left" }: { eyebrow: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="ds-eyebrow mb-5 text-brand">{eyebrow}</p>
      <h2 className="ds-heading ds-balance">{title}</h2>
      {description && <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">{description}</p>}
    </div>
  )
}

export function FeatureCard({ number, title, description, children }: { number?: string; title: string; description: string; children?: React.ReactNode }) {
  return (
    <Card className="group min-h-72 overflow-hidden bg-cream p-0">
      <div className="flex h-full flex-col p-6 md:p-8">
        {number && <span className="font-mono text-xs text-muted">{number}</span>}
        <div className="mt-auto pt-16">{children}<h3 className="mt-5 text-xl font-medium tracking-[-.025em]">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-muted">{description}</p></div>
      </div>
    </Card>
  )
}

export function Stat({ value, label, detail }: { value: string; label: string; detail?: string }) {
  return <div className="border-t border-line py-6"><p className="font-mono text-3xl tracking-[-.04em] md:text-4xl">{value}</p><p className="mt-3 text-sm font-medium">{label}</p>{detail && <p className="mt-1 text-xs text-muted">{detail}</p>}</div>
}

export function PricingCard({ name, price, description, features, featured }: { name: string; price: string; description: string; features: string[]; featured?: boolean }) {
  return (
    <Card className={cn("flex h-full flex-col", featured && "border-brand bg-[#15191e] text-white shadow-[var(--shadow-md)]")}>
      <div><Badge tone={featured ? "brand" : "neutral"}>{name}</Badge><p className="mt-6 text-4xl font-medium tracking-[-.04em]">{price}</p><p className={cn("mt-3 text-sm leading-6", featured ? "text-white/65" : "text-muted")}>{description}</p></div>
      <ul className="my-8 space-y-3">{features.map((feature) => <li key={feature} className="flex gap-3 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-brand" />{feature}</li>)}</ul>
      <Button variant={featured ? "primary" : "secondary"} className="mt-auto w-full">Choose {name}</Button>
    </Card>
  )
}

export function TestimonialCard({ quote, name, role, initials }: { quote: string; name: string; role: string; initials?: string }) {
  return (
    <Card className="flex min-h-72 flex-col justify-between bg-white">
      <blockquote className="text-xl font-medium leading-8 tracking-[-.02em]">“{quote}”</blockquote>
      <div className="mt-8 flex items-center gap-3"><div className="grid size-10 place-items-center rounded-full bg-brand-soft text-xs font-medium text-brand">{initials ?? name.split(" ").map((word) => word[0]).join("")}</div><div><p className="text-sm font-medium">{name}</p><p className="text-xs text-muted">{role}</p></div></div>
    </Card>
  )
}

export function LogoCloud({ logos }: { logos: string[] }) {
  return <div className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 md:grid-cols-6">{logos.map((logo) => <div key={logo} className="grid h-24 place-items-center border-b border-r border-line text-sm font-medium tracking-[-.02em] text-muted">{logo}</div>)}</div>
}

export function DataTable({ columns, rows }: { columns: string[]; rows: Array<Array<React.ReactNode>> }) {
  return <div className="overflow-x-auto rounded-2xl border border-line bg-white"><table className="w-full min-w-[640px] border-collapse text-left text-sm"><thead className="bg-black/[.025] text-xs text-muted"><tr>{columns.map((column) => <th key={column} className="border-b border-line px-5 py-3 font-medium">{column}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex} className="hover:bg-black/[.018]">{row.map((cell, cellIndex) => <td key={cellIndex} className="border-b border-line px-5 py-4 last:border-b-0">{cell}</td>)}</tr>)}</tbody></table></div>
}

export function Tabs({ items }: { items: Array<{ value: string; label: string; content: React.ReactNode }> }) {
  return <TabsPrimitive.Root defaultValue={items[0]?.value}><TabsPrimitive.List className="inline-flex rounded-[10px] border border-line bg-white p-1">{items.map((item) => <TabsPrimitive.Trigger key={item.value} value={item.value} className="rounded-md px-3 py-1.5 text-sm text-muted data-[state=active]:bg-[#15191e] data-[state=active]:text-white">{item.label}</TabsPrimitive.Trigger>)}</TabsPrimitive.List>{items.map((item) => <TabsPrimitive.Content key={item.value} value={item.value} className="mt-5">{item.content}</TabsPrimitive.Content>)}</TabsPrimitive.Root>
}

export function Accordion({ items }: { items: Array<{ question: string; answer: string }> }) {
  return <AccordionPrimitive.Root type="single" collapsible>{items.map((item, index) => <AccordionPrimitive.Item key={item.question} value={`item-${index}`} className="border-t border-line"><AccordionPrimitive.Header><AccordionPrimitive.Trigger className="group flex w-full items-center justify-between py-5 text-left text-base font-medium"><span>{item.question}</span><ChevronDown className="size-4 transition-transform group-data-[state=open]:rotate-180" /></AccordionPrimitive.Trigger></AccordionPrimitive.Header><AccordionPrimitive.Content className="overflow-hidden text-sm leading-6 text-muted data-[state=closed]:animate-none"><p className="pb-5 pr-10">{item.answer}</p></AccordionPrimitive.Content></AccordionPrimitive.Item>)}</AccordionPrimitive.Root>
}

export function Footer({ brand = "Ember", groups }: { brand?: string; groups: Array<{ title: string; links: string[] }> }) {
  return <footer className="bg-[#080d14] py-14 text-white"><div className="ds-container"><div className="grid gap-10 md:grid-cols-[2fr_repeat(3,1fr)]"><div><p className="text-xl font-medium">{brand}<span className="text-brand">.</span></p><p className="mt-4 max-w-xs text-sm leading-6 text-white/55">Financial clarity, designed for forward-moving teams.</p></div>{groups.map((group) => <div key={group.title}><p className="ds-eyebrow text-white/45">{group.title}</p><ul className="mt-5 space-y-3">{group.links.map((link) => <li key={link}><a href="#" className="text-sm text-white/70 hover:text-white">{link}</a></li>)}</ul></div>)}</div><div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between"><span>© 2026 {brand}</span><span>Original Brex-inspired system. Not affiliated with Brex.</span></div></div></footer>
}

export function TextLink({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className="inline-flex items-center gap-2 text-sm font-medium underline decoration-transparent underline-offset-4 hover:decoration-current" {...props}>{children}<ArrowRight className="size-4" /></a>
}
