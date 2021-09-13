import { Title } from '../assets/UI'
import styles from '../styles/404.module.css'
import Link from 'next/link'





export default function Page404() {


    return(

        <html>
                <head>
           
                   <meta charSet="UTF-8"/>
                   <meta name='description' content='404 this page doesnt exist' />
                   <title>Do iT - 404 error</title>
                   <link rel="icon" href="/favicon.ico" />
                </head>
            
            <body>
                <main className={styles.bgMain}> 
                    <Title>Error 404- comeback ⤷  <Link href='/' passHref >here</Link> </Title>
                </main>
            </body>
        </html>
    )
}