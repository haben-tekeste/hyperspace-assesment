'use client'

import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import React from 'react'

function Ribons({ run }: { run: boolean }) {
  const { width, height } = useWindowSize()

  return <Confetti className="z-5" run={run} width={width} height={height} />
}

export default Ribons
