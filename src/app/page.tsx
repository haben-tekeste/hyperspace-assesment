import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/components/Modal'
import Ribons from '@/components/Confetti'

type Props = {
  searchParams: Record<string, string> | null | undefined
}

export default function Home({ searchParams }: Props) {
  const showModal = searchParams?.modal
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="gradient w-[480px] h-[480px] rounded-xl flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-white text-4xl text-center">
            You&apos;re a top artist!
          </h1>

          <p className="text-white text-sm font-light">
            You&apos;ve won 100 surprises. Keep up the good work{' '}
          </p>
        </div>
        <Link href="/?modal=true">
          <button className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... rounded-3xl px-6 py-2">
            Open surprise!
          </button>
        </Link>
      </div>
      {showModal === 'true' && <Modal run={showModal === 'true'} />}
    </div>
  )
}
