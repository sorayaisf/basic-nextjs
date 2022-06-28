
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Layout pageTitle="Home Page">
        <Image src="/favicon.ico" width={200} height={200} alt="profile"/>
        <h1 className={styles.titlehomepage}>Welcome Home</h1>
      </Layout>


    </>
  )
}
