import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/Scene'), {
  loading: () => <h1> Loading </h1>,
  ssr: false,
})

function Home() {
  return (
    <main className="main">
      <Scene />
    </main>
  )
}
export default Home
