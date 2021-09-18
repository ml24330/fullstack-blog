import React from 'react'
import tvb from '../assets/images/3VB.jpg'
import ff from '../assets/images/freshfield.png'
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
            <img className="img-small" src={tvb} alt="3VB" />
            </td>
            <p class="mb-4">The LSE Law Review is proud to be sponsored by 3 Verulam Buildings. 3 Verulam Buildings is one of the UK’s principal sets of barristers’ chambers, with over 80 members specialising in a wide range of commercial law and practising both nationally, in other countries’ jurisdictions and internationally.</p> 
            <p class="mb-4">3 Verulam Buildings will be holding a virtual Student Open Day via Zoom on Wednesday, 6 October 2021 from 1:30 - 3:30pm. Members of 3VB will provide a true insight into a life as a barrister, give advice on applying for pupillage and discuss areas of commercial work.</p> 
            {/* <p class="mb-4">You can download the event brochure <a className="underline" target="_blank" rel="noopener noreferrer" href="#">here</a>. Click <a className="underline" target="_blank" rel="noopener noreferrer" href="https://us02web.zoom.us/webinar/register/WN_Iiqy-4TsSFWqwF-b9Em67Q">here</a> to register for the event.</p>  */}
            <p> Learn more here: <a target="_blank" rel="noopener noreferrer" href="https://www.3vb.com"> www.3vb.com </a> </p>
            
            <br/>
            <h5 class="font-weight-bold page-heading-small">Freshfields Bruckhaus Deringer LLP</h5>
            <td width="20%">
            <img className="img-small" src={ff} alt="3VB" />
            </td>
            <p class="mb-4">The LSE Law Review is proud to be sponsored by Freshfields Bruckhaus Deringer LLP.  Freshfields is one of the largest and most prestigious international law firms in the world. Widely known as a member of the Magic Circle of leading London-headquartered law firms, it has 27 offices across 17 jurisdictions and more than 4000 employees serving clients from over 150 countries around the world.</p> 

            <p> Learn more here: <a target="_blank" rel="noopener noreferrer" href="https://www.freshfields.com"> www.freshfields.com </a> </p>
            
            
            <p class="mb-4"> We are currently looking for organisations to sponsor us. If your organisation is interested in sponsoring us, please send an email to <a href="mailto:lselawreview@gmail.com">lselawreview@gmail.com</a>.</p>
        
        
        </div>
    )
}
