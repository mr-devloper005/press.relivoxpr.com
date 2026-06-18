import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-[#111]">
        <section className="bg-[var(--slot4-accent)] py-16 text-white lg:py-24">
          <div className="mx-auto max-w-[1140px] px-4 text-center sm:px-6 lg:px-0">
            <p className="text-xs font-black uppercase tracking-[0.28em]">{pagesContent.about.badge}</p>
            <h1 className="editorial-brand mx-auto mt-5 max-w-5xl text-5xl font-black leading-tight sm:text-7xl">
              Independent media, built for clear stories.
            </h1>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-[1140px] gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_.85fr] lg:px-0">
            <article>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">About {SITE_CONFIG.name}</p>
              <p className="mt-6 text-3xl font-black leading-tight text-[var(--slot4-deep)] sm:text-4xl">{pagesContent.about.description}</p>
              <div className="article-content mt-10 space-y-6">
                {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
            <aside className="grid gap-5">
              {pagesContent.about.values.map((value, index) => (
                <div key={value.title} className="border border-black/10 bg-[#f7f7f7] p-7 shadow-sm sm:p-9">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">0{index + 1}</p>
                  <h2 className="mt-4 text-2xl font-black leading-tight text-[var(--slot4-accent)]">{value.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-black/65">{value.description}</p>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section className="bg-white pb-20">
          <div className="mx-auto flex max-w-[1140px] flex-col gap-6 border border-black/15 bg-[#dceff6] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="max-w-3xl text-4xl font-black uppercase leading-tight text-[var(--slot4-deep)]">Read the stories shaping the conversation.</h2>
            <Link href="/search" className="inline-flex w-fit rounded bg-[var(--slot4-accent)] px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-white">Explore the archive</Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
