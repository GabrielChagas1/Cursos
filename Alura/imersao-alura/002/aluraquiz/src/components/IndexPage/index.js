import styled from 'styled-components'
import Head from 'next/head';
import db from '../../../db.json';


function IndexPage(){
    return(
        <div>
            <Head>
                <title>Imersão Alura</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:image" content={db.bg} ></meta>
            </Head>
        </div>
    )
}

export default IndexPage