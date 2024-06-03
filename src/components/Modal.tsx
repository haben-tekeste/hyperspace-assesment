import React from 'react'
import Link from 'next/link'
import Ribons from './Confetti'
import Image from 'next/image'

function Modal({ run }: { run: boolean }) {
  return (
    <>
      <div className="bg-slate-900/20 backdrop-blur justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <Ribons run={run} />
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 overflow-hidden rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex justify-center items-center py-3">
              <Image
                src="/bitcoin.png"
                width={150}
                height={150}
                alt="Bitcoin"
              />
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <h1 className="my-4 text-blueGray-500 text-3xl leading-relaxed text-center font-bold">
                You have won 1₿
              </h1>
              <p className="text-black-500 font-thin">
                You can now buy NFT products of other artists
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
              <Link href="/?modal=false">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Close
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Modal
