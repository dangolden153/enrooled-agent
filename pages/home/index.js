import Head from 'next/head'
import Image from 'next/image'
import './Home.module.scss'

const index = () => {
    return (
        <div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
            <meta charset="UTF-8" />
            <meta name="google" content="notranslate" />
            <meta http-equiv="Content-Language" content="en" />
            <meta name="description" 
            content="Find a tax professional for your tax requirements. 
             Enrolled Agent has a list of verified tax practitioners. 
             Search from the lists of irs enrolled agent ." />
            <meta name="keywords"
                content="consulting,finance,advisor,consultant,business,service,insurance,agency" />
            <meta name="Enrolled Agent" content="Enrolled Agent" />

            <title>Enrolled Agent Lookup | Find Tax Preparer |  IRS Enrolled Agent Search</title>
        </Head>
            <div className={`container test-color`}>
                <p>Homepage</p>
            </div>
        </div>
    )
}

export default index
