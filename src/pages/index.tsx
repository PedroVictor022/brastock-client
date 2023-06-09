import Header from '@/components/header'
import Head from 'next/head'
// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Brastock</title>
        <meta name="description" content="Brastock website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  )
}
