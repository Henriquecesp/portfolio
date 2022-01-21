import { Footer } from '@components/footer'
import { Render } from '@components/render'
import { ComponentsHome } from '@components/render/config'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-500 text-gray-100 overflow-x-hidden w-full">
      <Head>
        <title>HenriqueCesp - FullStack Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Render Components={ComponentsHome} />
      </main>
    </div>
  )
}
