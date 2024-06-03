import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/Scene'), { ssr: true })

function Home() {
  return (
    <main className="main">
      <Scene />
    </main>
  )
}
export default Home
