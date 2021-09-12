import Head from 'next/head'
import Form from '../../components/Form/'
import { Title } from '../assets/UI'
import styled from 'styled-components'
import List from '../../components/List'
import { useEffect, useState } from 'react'
import Day from '../../public/img/day.gif'



const Main = styled.main `


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

 

  


`


export default function Home() {

  const date = new Date();

  const hour = date.getHours();
  const min = date.getMinutes()
  const day  = date.getDate()
  const month = date.getUTCMonth() +1;
  const year = date.getUTCFullYear();
  console.log(year)

const [period, setPeriod] = useState('');
  const [items, setItems] = useState([]);

useEffect(()=>{

  if( hour < 12 && hour > 7) {
   setPeriod('day');

  } else if (hour > 12 && hour < 18) {

    setPeriod('afternoon');
  } else {

    setPeriod('night');

  }



}, [])


  return (
    <div>
      <Head>
        <title>Do It</title>
        <meta name="description" content="your task list, just do it!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
        
      <Main className={period}  >

       <Title>Do It</Title>
       <h3>{hour}h{min} - {day}/{month}/{year}</h3>
       <Form setItems={setItems} items={items} />
       <List items={items} />
  
   </Main> 
   

     

    </div>
  )
}
