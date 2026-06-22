'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export const siteLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Sign In', href: '/login' },
  { label: 'Sign Up', href: '/signup' },
  { label: 'Search', href: '/search' },
]

const authLinkHrefs = new Set(['/login', '/signup'])

export function getVisibleSiteLinks(isLoggedIn: boolean) {
  return isLoggedIn ? siteLinks.filter((item) => !authLinkHrefs.has(item.href)) : siteLinks
}

function BrandMark() {
  return (
    <span className="inline-flex items-center gap-2 text-black">
      <img src="/favicon.png" alt="" className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20" />
      <span className="ipr-logo-text text-2xl sm:text-3xl">Press</span>
      <span className="ipr-logo-mark text-xl">PR</span>
      <span className="ipr-logo-text text-2xl sm:text-3xl">Relivox</span>
    </span>
  )
}

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const visibleLinks = getVisibleSiteLinks(Boolean(session))

  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-[0_2px_10px_rgba(2,61,92,.12)]">
      <div className="mx-auto grid min-h-[100px] max-w-[1140px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-0">
        <div className="flex items-center">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center border border-black/25 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="ml-3 hidden sm:block lg:ml-0" aria-label={SITE_CONFIG.name}>
            <BrandMark />
          </Link>
        </div>

        <Link href="/" className="justify-self-center sm:hidden" aria-label={SITE_CONFIG.name}>
          <BrandMark />
        </Link>

        <nav className="hidden items-center justify-end gap-7 text-sm lg:flex">
          {visibleLinks.map((item) => <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-[var(--slot4-accent)]">{item.label}</Link>)}
          <form action="/search" className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-black/10 transition focus-within:w-56 hover:border-[var(--slot4-accent)]">
            <Search className="mx-2 h-4 w-4 shrink-0 text-[var(--slot4-accent)]" />
            <input name="q" type="search" aria-label="Search" placeholder="Search" className="min-w-0 flex-1 bg-transparent py-2 pr-3 text-xs outline-none" />
          </form>
          {session ? (
            <>
              <span className="max-w-36 truncate text-xs font-black uppercase tracking-[.1em] text-[var(--slot4-deep)]">{session.name}</span>
              <Link href="/create" className="text-xs font-black uppercase tracking-[.1em] text-[var(--slot4-accent)]">Create</Link>
              <button type="button" onClick={logout} className="text-xs font-black uppercase tracking-[.1em]">Logout</button>
            </>
          ) : null}
        </nav>
      </div>

      {open ? (
        <div className="border-t border-black/10 bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {visibleLinks.map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded border border-black/10 bg-[var(--slot4-cream)] px-4 py-3 text-sm font-black uppercase tracking-[.08em]">{item.label}</Link>
            ))}
            {session ? (
              <>
                <div className="rounded border border-black/10 bg-white px-4 py-3 text-sm font-black uppercase tracking-[.08em] text-[var(--slot4-deep)]">{session.name}</div>
                <Link href="/create" onClick={() => setOpen(false)} className="rounded border border-black/10 bg-[var(--slot4-accent)] px-4 py-3 text-sm font-black uppercase tracking-[.08em] text-white">Create</Link>
                <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded border border-black/10 bg-white px-4 py-3 text-left text-sm font-black uppercase tracking-[.08em]">Logout</button>
              </>
            ) : null}
            <form action="/search" className="flex rounded border border-black/15 bg-white">
              <Search className="ml-3 mt-3.5 h-4 w-4 text-[var(--slot4-accent)]" />
              <input name="q" type="search" placeholder="Search posts" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none" />
            </form>
          </div>
        </div>
      ) : null}
    </header>
  )
}
