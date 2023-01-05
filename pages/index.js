import Head from 'next/head'
import Home from './Home.jsx'
export default function Index() {
  return (<>
  <Head>
    <title>Chat</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Icons" />
  </Head>
  <Home />
  </>)
}
