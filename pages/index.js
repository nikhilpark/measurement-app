import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Converter from '../views/Converter';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Converter  App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Converter/>

    </div>
  )
}
