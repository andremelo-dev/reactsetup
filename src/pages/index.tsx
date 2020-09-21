import React from 'react'
import Head from 'next/head'

import ReactLogo from '../assets/react.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <ReactLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by André Melo</p>
    </Container>
  )
}

export default Home
