import Head from 'next/head'

export default function Layout({ login, children }) {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/311/311330.png"
        />
        <meta
          name="description"
          content="Learn how to be software development"
        />
      </Head>

      <main
        className={`h-screen overflow-hidden ${
          login ? 'bg-green-900' : 'bg-black'
        }`}
      >
        {children}
      </main>
    </div>
  )
}
