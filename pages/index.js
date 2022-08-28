import Head from 'next/head'
import Image from 'next/image'
import Feed from './feed/feed'
import Header from './header/header'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll">
      <Head>
      <title>Intsa clone</title>
      </Head>
      {/* HEADER */}
      <Header/>

      {/* FEED */}
      <Feed/>

      {/* MODAL */}


    </div>
  )
}
