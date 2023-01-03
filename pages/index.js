import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from './Home.jsx'
export default function Index() {
  return (<>
  <Head>
  <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chat</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Icons" />
  </Head>
    <div className={styles.container}>
      <Home />
    </div>
  </>)
}
