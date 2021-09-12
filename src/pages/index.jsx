import Head from 'next/head'
import Form from '../../components/Form/'
import { Title } from '../assets/UI'
import styled from 'styled-components'

const Main = styled.main `


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`


export default function Home() {
  return (
    <div>
      <Head>
        <title>Do It</title>
        <meta name="description" content="your task list, just do it!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Main>
            <Title>Do It</Title>
            <Form />

        </Main>

    </div>
  )
}
