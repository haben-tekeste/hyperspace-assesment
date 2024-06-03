import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Nav() {
  return (
    <nav className="flex border-2 items-center justify-between  px-14 py-3">
      <div className="flex items-center gap-4">
        <Image src="logo.svg" width={20} height={20} alt="Logo" />
        <h1 className="leading-5 font-semibold text-lg">Surprise</h1>
      </div>
      <ul className="flex items-center gap-8">
        <li className="hover:text-[#225664]">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-[#225664]">
          <Link href="/animation">Animation</Link>
        </li>
        <li>
          <Link href="#">
            <Image src="/profile.png" width={45} height={45} alt="Profile" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
