import Head from 'next/head'
import Form from '../../components/Form/'
import { Title } from '../assets/UI'
import styled from 'styled-components'
import List from '../../components/List'
import { useEffect, useState } from 'react'

const Main = styled.main `


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

`


export default function Home() {


  const [items, setItems] = useState([]);




  return (
    <div>
      <Head>
        <title>Do It</title>
        <meta name="description" content="your task list, just do it!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Main>
            <Title>Do It</Title>
            <Form setItems={setItems} items={items} />
            <List items={items} />
        </Main>

    </div>
  )
}
