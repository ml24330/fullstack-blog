import React from 'react'
import Image from '../assets/images/3VB.jpg'
import { Helmet } from 'react-helmet'

export default function SponsorsPage() {
    return (
        <div className="page-container">
            <Helmet>
                <title>Sponsors</title>
            </Helmet>
            <div className="page-heading">Sponsors</div>
            <h5 class="font-weight-bold page-heading-small">3 Verulam Buildings</h5>
            <td width="20%">
            <img className="img-small" src={Image} alt="3VB" />
            </td>
            <p class="mb-4">The LSE Law Review is proud to be sponsored by 3 Verulam Buildings. 3 Verulam Buildings is one of the UK’s principal sets of barristers’ chambers, with over 80 members specialising in a wide range of commercial law and practising both nationally, in other countries’ jurisdictions and internationally.</p> 

            <p> Learn more here: <a target="_blank" rel="noopener noreferrer" href="https://www.3vb.com"> www.3vb.com </a> </p>
            <p class="mb-4"> We are currently looking for organisations to sponsor us. If your organisation is interested in sponsoring us, please send an email to <a href="mailto:lselawreview@gmail.com">lselawreview@gmail.com</a>.</p>
        </div>
    )
}
