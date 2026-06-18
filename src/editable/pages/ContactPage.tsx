'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Editorial desk', body: 'Send story ideas, corrections, source material, and publication questions.' },
  { icon: Megaphone, title: 'Media partnerships', body: 'Discuss distribution, syndication, newsroom collaborations, and campaigns.' },
  { icon: Mail, title: 'General support', body: 'Reach the team for account, publishing, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[#111]">
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[1140px] px-4 text-center sm:px-6 lg:px-0">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className="editorial-brand mx-auto mt-4 max-w-5xl text-5xl font-black leading-tight text-[var(--slot4-deep)] sm:text-7xl">{pagesContent.contact.title}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl font-semibold leading-8 text-black/65">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="bg-[#f2f2f2] py-16">
          <div className="mx-auto grid max-w-[1140px] gap-8 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-0">
            <aside className="grid gap-5">
              {desks.map((desk, index) => (
                <div key={desk.title} className="border border-black/10 bg-white p-7 shadow-sm sm:p-9">
                  <div className="flex items-center justify-between"><desk.icon className="h-5 w-5 text-[var(--slot4-accent)]" /><span className="text-xs font-black text-black/35">0{index + 1}</span></div>
                  <h2 className="mt-6 text-2xl font-black text-[var(--slot4-accent)]">{desk.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-black/65">{desk.body}</p>
                </div>
              ))}
            </aside>
            <div className="border border-black/10 bg-white p-6 shadow-sm sm:p-10 lg:p-14">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Send a message</p>
              <h2 className="mt-3 text-4xl font-black text-[var(--slot4-deep)]">{pagesContent.contact.formTitle}</h2>
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
