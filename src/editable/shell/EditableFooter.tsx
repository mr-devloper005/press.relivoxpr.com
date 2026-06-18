'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { siteLinks } from '@/editable/shell/EditableNavbar'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="bg-white text-black">
      <div className="bg-[var(--slot4-accent)] text-white">
        <div className="mx-auto grid max-w-[1140px] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:px-0">
          <div>
            <h3 className="font-black underline underline-offset-4">Contact Relivox PR Press</h3>
            <div className="mt-5 grid gap-3 text-sm">
              <a href="tel:+919354076217" className="inline-flex items-center gap-3"><Phone className="h-5 w-5 fill-white" /> +91-9354076217</a>
              <a href="tel:+917703836048" className="inline-flex items-center gap-3"><Phone className="h-5 w-5 fill-white" /> +91-7703836048</a>
            </div>
          </div>
          <div>
            <h3 className="font-black underline underline-offset-4">Links</h3>
            <div className="mt-4 grid gap-3">
              {siteLinks.map((item) => <Link key={item.href} href={item.href} className="text-sm hover:underline">{item.label}</Link>)}
            </div>
          </div>
          {session ? <button onClick={logout} className="self-start text-left text-sm hover:underline lg:col-start-2">Logout</button> : null}
        </div>
      </div>
      <div className="mx-auto flex max-w-[1140px] flex-col items-center justify-between gap-5 px-4 py-6 text-sm sm:px-6 lg:flex-row lg:px-0">
        <div className="flex flex-wrap justify-center gap-3">
          {siteLinks.map((item, index) => (
            <span key={item.href} className="inline-flex items-center gap-3">
              {index ? <span className="text-black/25">|</span> : null}
              <Link href={item.href} className="hover:text-[var(--slot4-accent)]">{item.label}</Link>
            </span>
          ))}
        </div>
        <p className="max-w-xl text-center text-black/70">{globalContent.footer?.description || 'Get coverage in digital and print media with clear public updates.'}</p>
        <p className="text-center">RelivoxPR Press (c) {year}. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
