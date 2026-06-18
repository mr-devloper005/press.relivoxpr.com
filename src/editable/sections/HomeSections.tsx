import Link from 'next/link'
import { CheckCircle2, MessageSquare, MousePointer2, Newspaper, Search, ShieldCheck, Target, UploadCloud, UsersRound, type LucideIcon } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, EditorialFeatureCard, getEditablePostImage, ImageFirstCard, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const publicationLogos = ['THE TIMES OF INDIA', 'NEWS18', 'NDTV', 'ZEE NEWS', 'hindustantimes', 'Business Standard', 'ET', 'livemint', 'mid-day', 'Deccan Chronicle', 'DH', 'ANI']
const clientLogos = ['Kotak', 'dentsu', 'Pristyn Care', 'TiE CON', 'Qatar Cricket', 'MDI Gurgaon', 'HITACHI', 'flitpay', 'Kabira Mobility', 'VKC pride', 'Schneider Electric', 'URBAN MONKEY']
const audienceCards: Array<[string, string, LucideIcon]> = [
  ['Press Release Distribution', 'For communicators preparing public updates for leading media channels.', MousePointer2],
  ["I'm a Journalist", 'For journalists looking for useful sources, context, and story inputs.', ShieldCheck],
  ['Subject Matter Expert', 'For experts who want to help media teams with informed commentary.', MessageSquare],
]
const benefitCards: Array<[string, string, LucideIcon]> = [
  ['National Press Distribution Service', 'Reach a broad mix of print and electronic outlets with a polished announcement.', Newspaper],
  ['Industry-Targeting', 'Shape releases around topics, beats, audiences, and publication relevance.', Target],
  ['Quality Over Quantity', 'Keep stories focused, proofread, and useful before they are distributed.', CheckCircle2],
  ['Flexible Payment Plans', 'Choose practical campaign options for different business moments.', UploadCloud],
]
const statCards: Array<[LucideIcon, string, string]> = [
  [UsersRound, '9500', 'Journalists'],
  [Newspaper, '500', 'Publications'],
  [MessageSquare, '20', 'TV Channels'],
  [ShieldCheck, '50', 'Magazines'],
]

function safePosts(posts: SitePost[]) {
  return posts.filter((post) => post?.title && post?.slug)
}

function HeroImage({ posts }: { posts: SitePost[] }) {
  const image = getEditablePostImage(posts[0])
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#111]">
      <img src={image} alt="" className="ipr-kenburns h-full w-full object-cover opacity-45" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.55),rgba(0,0,0,.75))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(13,111,159,.35),transparent_32%)]" />
    </div>
  )
}

function LogoGrid({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <div className={`grid gap-5 ${compact ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'}`}>
      {items.map((item, index) => (
        <div key={item} className="ipr-float grid min-h-28 place-items-center border border-black/10 bg-white p-4 text-center shadow-sm" style={{ animationDelay: `${index * .12}s` }}>
          <span className="text-xl font-black leading-none text-[#1e2b34]">{item}</span>
        </div>
      ))}
    </div>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const usable = safePosts(posts)
  const lead = usable[0]

  return (
    <section className="relative min-h-[500px] overflow-hidden text-white">
      <HeroImage posts={usable} />
      <div className="relative mx-auto grid min-h-[500px] max-w-[1140px] place-items-center px-4 py-16 text-center sm:px-6 lg:px-0">
        <div className="ipr-reveal">
          <h1 className="text-5xl font-black uppercase leading-tight tracking-[.04em] sm:text-6xl lg:text-7xl">Relivox PR Distribution</h1>
          <p className="mt-6 text-xl font-black uppercase tracking-wide">A comprehensive media distribution service</p>
          <p className="mx-auto mt-10 max-w-3xl text-xl font-bold leading-8 text-white/90">
            Connect announcements, expert commentary, brand stories, and public updates with readers across online, print, and electronic media.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href={primaryRoute} className="rounded border border-[var(--slot4-gold)] px-10 py-3 text-sm font-bold uppercase text-white transition hover:bg-[var(--slot4-gold)] hover:text-black">Press Release Distribution</Link>
            {lead ? <Link href={postHref(primaryTask, lead, primaryRoute)} className="rounded bg-white/10 px-10 py-3 text-sm font-bold uppercase text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white hover:text-black">Latest Update</Link> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask: _primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const usable = safePosts(posts)
  const marquee = [...publicationLogos, ...publicationLogos]
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1140px] px-4 text-center sm:px-6 lg:px-0">
          <h2 className="text-3xl font-black text-[var(--slot4-accent)]">Get Featured in Premium Publications</h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl leading-8">Secure a stronger brand spotlight with clear stories, useful information, and distribution-ready public updates.</p>
          <div className="mt-10 overflow-hidden">
            <div className="ipr-marquee flex w-max gap-5">
              {marquee.map((item, index) => (
                <div key={`${item}-${index}`} className="grid h-28 w-44 shrink-0 place-items-center border border-black/10 bg-white p-4 shadow-sm">
                  <span className="text-center text-xl font-black leading-none text-[#1e2b34]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <Link href="/contact" className={`${dc.button.accent} mt-9`}>Contact Us</Link>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
          <div className="flex flex-wrap justify-center gap-5">
            {['Submit Press Release', 'Comprehensive PR Portal', 'Press Release Distribution', 'Why Choose Us'].map((item, index) => (
              <Link key={item} href={index === 3 ? '/about' : primaryRoute} className={`${index === 0 ? 'bg-white text-[var(--slot4-accent)] shadow-[0_8px_22px_rgba(0,0,0,.18)]' : 'bg-[var(--slot4-accent)] text-white'} rounded px-5 py-3 text-xl transition hover:-translate-y-1`}>
                {item}
              </Link>
            ))}
          </div>
          <div className="mt-16 grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <h2 className="text-4xl font-black leading-tight text-[var(--slot4-accent)]">Press Release Distribution Services</h2>
              <p className="mt-8 text-xl leading-9">
                Share announcements with a focused media audience, organize your message, and make every release easier for publishers, journalists, and readers to understand.
              </p>
              <Link href={primaryRoute} className={`${dc.button.accent} mt-8`}>Buy Package</Link>
            </div>
            <div className="relative min-h-[310px] overflow-hidden">
              {usable[1] ? <img src={getEditablePostImage(usable[1])} alt="" className="h-full min-h-[310px] w-full object-cover" /> : <div className="grid min-h-[310px] place-items-center bg-[var(--slot4-panel-bg)] text-2xl font-black text-[var(--slot4-accent)]">Media Planning Desk</div>}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const usable = safePosts(posts)
  const feature = usable[2] || usable[0]
  const rail = usable.slice(3, 9)

  return (
    <>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1140px] px-4 text-center sm:px-6 lg:px-0">
          <h2 className="text-4xl font-black uppercase text-[var(--slot4-accent)]">Relivox PR is built for media visibility</h2>
          <p className="mt-5 text-xl">A practical distribution hub for announcements, expert sources, and brand communication.</p>
          <div className="mt-10"><LogoGrid items={clientLogos} compact /></div>
        </div>
      </section>

      <section className="bg-[var(--slot4-accent)] py-16 text-center text-white">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
          <h2 className="text-4xl font-black uppercase">Our Advantages</h2>
          <p className="mx-auto mt-6 max-w-4xl text-xl font-semibold leading-9">
            Plan your release, refine the message, and distribute it through a clean publication workflow that keeps communication clear and responsive.
          </p>
          <Link href="/contact" className="mt-9 inline-flex rounded border border-white px-7 py-4 text-xl font-semibold transition hover:bg-white hover:text-[var(--slot4-accent)]">Contact us Now!</Link>
        </div>
      </section>

      <section className="bg-[#f2f2f2] py-20">
        <div className="mx-auto max-w-[1140px] px-4 text-center sm:px-6 lg:px-0">
          <h2 className="text-4xl font-black uppercase text-[var(--slot4-deep)]">Indian reporters and sources at one place</h2>
          <p className="mx-auto mt-6 max-w-4xl text-xl leading-9">
            Coverage in newspapers, channels, websites, and social platforms works best when every story has a useful angle and a clear source.
          </p>
          <h3 className="mt-8 text-2xl font-black text-[var(--slot4-accent)]">Plan and distribute your press release, with social media support as well.</h3>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {audienceCards.map(([title, copy, Icon]) => (
              <div key={title} className="min-h-[260px] border border-black/10 bg-white p-10 transition hover:-translate-y-2 hover:shadow-xl">
                <Icon className="mx-auto h-6 w-6" />
                <h3 className="mt-8 text-lg font-black uppercase tracking-wide text-[var(--slot4-accent)]">{title}</h3>
                <p className="mt-5 text-xl leading-8">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black text-white">
        <HeroImage posts={usable.slice(1)} />
        <div className="relative mx-auto max-w-[1140px] px-4 py-16 text-center sm:px-6 lg:px-0">
          <h2 className="text-3xl font-black uppercase tracking-wider">Press Release Distribution in India</h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl">Submit your release, organize the message, and help readers find your announcement across digital and print channels.</p>
          <Link href={primaryRoute} className={`${dc.button.accent} mt-8`}>More Details</Link>
          <div className="mt-16 grid gap-5 lg:grid-cols-[1.4fr_.8fr_.8fr]">
            {feature ? <EditorialFeatureCard post={feature} href={postHref(primaryTask, feature, primaryRoute)} label="Featured release" /> : null}
            {rail.slice(0, 2).map((post, index) => <ImageFirstCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const usable = safePosts(collected.length ? collected : posts)
  const lead = usable[0]
  const rail = usable.slice(1, 9)
  const briefs = usable.slice(9, 15)

  return (
    <>
      <section className="bg-[#dceff6] py-16">
        <div className="mx-auto grid max-w-[1140px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-0">
          <div>
            <h2 className="text-3xl font-black uppercase text-[var(--slot4-deep)]">Coverage in Digital & Print Media</h2>
            <p className="mt-7 text-xl leading-9">Send announcements with a structure built for discovery, clarity, and broad public communication.</p>
            <Link href={primaryRoute} className={`${dc.button.primary} mt-8`}>Submit Press Release</Link>
          </div>
          <div>
            <h2 className="text-3xl font-black uppercase text-[var(--slot4-deep)]">Placement on Premium Sites</h2>
            <p className="mt-7 text-xl leading-9">Build a distribution plan around the kind of audience, topic, and publication context that fits your release.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
          <h2 className="text-4xl font-black uppercase tracking-wide text-[var(--slot4-deep)]">Placement plan in media on commercial conditions</h2>
          <p className="mt-6 max-w-5xl text-xl leading-9">A good public update should be easy to evaluate, easy to quote, and easy to publish. Use the archive below to explore recent media distribution posts and related announcements.</p>
          <div className="mt-10 grid gap-5 border border-black/15 bg-[#f7f7f7] p-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-2xl font-black uppercase text-[var(--slot4-accent)]">The best solution for enhancing your PR campaign</h3>
              <p className="mt-3">Use a focused publishing flow for announcements at every stage of growth.</p>
            </div>
            <Link href={primaryRoute} className={`${dc.button.accent}`}>Buy now</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-[1140px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-0">
          {[
            ['Benefits for Journalists', ['Find concise source information for stories.', 'Review clear public announcements quickly.', 'Coordinate story inputs with less friction.']],
            ['Benefits for Sources', ['Get discovered for relevant media opportunities.', 'Improve public communication reach.', 'Present expertise with cleaner context.']],
          ].map(([title, items]) => (
            <div key={String(title)}>
              <h2 className="border-b-4 border-black/20 pb-2 text-4xl text-[var(--slot4-accent)]">{title as string}</h2>
              <ul className="mt-5 grid gap-4 text-xl">
                {(items as string[]).map((item) => <li key={item} className="flex gap-3"><span>•</span><span>{item}</span></li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
          <div className="text-center">
            <h2 className="text-4xl font-black uppercase text-[var(--slot4-deep)]">Benefits of effective press release distribution</h2>
            <div className="mx-auto mt-6 h-1 max-w-3xl bg-black/20" />
            <p className="mx-auto mt-7 max-w-4xl text-xl leading-8">Affordable, readable, and organized public communication can help teams share launches, milestones, partnerships, and expert viewpoints.</p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {benefitCards.map(([title, copy, Icon]) => (
              <div key={title} className="grid grid-cols-[32px_1fr] gap-5">
                <Icon className="h-6 w-6" />
                <div>
                  <h3 className="text-xl font-black text-[var(--slot4-accent)]">{title}</h3>
                  <p className="mt-3 text-xl leading-8">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1140px] border border-black/15 bg-[#f7f7f7] p-7 sm:p-10">
          <h2 className="text-4xl font-black uppercase text-[var(--slot4-deep)]">Where will press releases be posted?</h2>
          <p className="mt-7 text-xl font-bold leading-9">Posts can appear as well-indexed public pages and can be organized for editors, publishers, and readers who need clear context.</p>
          <div className="mt-10 grid gap-8 text-center sm:grid-cols-4">
            {statCards.map(([Icon, value, label]) => (
              <div key={label}>
                <Icon className="mx-auto h-10 w-10" />
                <p className="mt-2 text-5xl font-black text-[var(--slot4-accent)]">{value}</p>
                <p className="mt-2 text-sm uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
            {lead ? <EditorialFeatureCard post={lead} href={postHref(primaryTask, lead, primaryRoute)} label="Latest distribution" /> : null}
            <div className="grid content-start gap-3">
              {briefs.map((post, index) => <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
          </div>
          {rail.length ? (
            <div className="mt-12">
              <h2 className="mb-5 text-3xl font-black uppercase text-[var(--slot4-deep)]">Recent media updates</h2>
              <div className={dc.layout.rail}>
                {rail.map((post, index) => <RailPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-white pb-20 text-center">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
        <h2 className="text-4xl font-black uppercase text-[var(--slot4-accent)]">Are you ready to take your PR campaign to the next level?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-8">Build a focused communication plan and keep every update easy to read, share, and archive.</p>
        <div className="mt-14 grid gap-5 border border-black/15 p-8 text-left lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="text-2xl font-black uppercase text-[var(--slot4-accent)]">The best solution for your business</h3>
            <p className="mt-3">Useful for small updates, larger campaigns, and ongoing public communication.</p>
          </div>
          <Link href="/media-distribution" className={dc.button.accent}>Send Press Release</Link>
        </div>
        <form action="/search" className="mx-auto mt-10 flex max-w-2xl border border-black/15 bg-white shadow-sm">
          <Search className="ml-4 mt-4 h-4 w-4 text-[var(--slot4-accent)]" />
          <input name="q" placeholder="Search recent posts" className="min-w-0 flex-1 bg-transparent px-3 py-3 outline-none" />
          <button className="bg-[var(--slot4-accent)] px-5 text-sm font-black uppercase text-white">Search</button>
        </form>
      </div>
    </section>
  )
}
