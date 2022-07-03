
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Layout pageTitle="Home Page">
        <div className={styles.home}>
        <div className={styles.image}>
        <Image src="/favicon.ico" width={100} height={100} alt="profile"/>
        </div>
        <h1 className={styles.titlehomepage}>Welcome to My Portfolio</h1>
        </div>
      </Layout>


    </>
  )
}
