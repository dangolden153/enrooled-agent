import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Homepage from './home';
import Header from '../src/components/layout/Header';
export default function Home() {
  return (
    <>
    <Header />
    <Homepage />
    {/* <p className="test"> I'm red</p> */}
    </>
  )
}
