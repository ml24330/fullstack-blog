import React from 'react'
import tvb from '../assets/images/3VB.jpg'
import oec from '../assets/images/OEC_logo.jpg'
import matrix from '../assets/images/matrix.jpg'
import kbw from '../assets/images/6KBW.jpg'
import ff from '../assets/images/freshfields.png'
import Collapse from '../components/Collapse'
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
            <p> Learn more here: <a target="_blank" rel="noopener noreferrer" href="https://www.3vb.com"> www.3vb.com </a> </p>
            
            
            <br />
            <h5 class="font-weight-bold page-heading-small">One Essex Court</h5>
            <td width="20%">
            <img className="img-small" src={oec} alt="OEC" />
            </td>
            <p class="mb-4">The LSE Law Review is proud to be sponsored by One Essex Court. One Essex Court is a leading set of barristers' chambers, specialising in commercial disputes. Its members provide specialist advice and advocacy services worldwide, which include all areas of dispute resolution, litigation and arbitration.</p>
            <p> Learn more here: <a target="_blank" rel="noopener noreferrer" href="https://www.oeclaw.co.uk/"> www.oeclaw.co.uk </a> </p>


            <br />
            <h5 class="font-weight-bold page-heading-small">6KBW College Hill</h5>
            <td width="20%">
            <img className="img-small" src={kbw} alt="kbw" />
            </td>
            <p class="mb-4">The LSE Law Review is proud to be sponsored by 6KBW College Hill. 6KBW College Hill has held a pre-eminent position in criminal law for over 70 years. They have been at the forefront of the expansion of the criminal law into related areas of public and civil law. Their chambers includes many of the leading practitioners in their fields. They act in many of the most significant, sensitive, and high-profile cases heard in the UK, Europe, and around the world. Many of the landmark cases in crime, extradition, and the proceeds of crime have been argued by our members.</p>
            <p> Learn more here: <a target="_blank" rel="noopener noreferrer" href="https://www.6kbw.com/"> www.6kbw.com</a> </p>


            <br />
            <h5 class="font-weight-bold page-heading-small">Matrix Chambers</h5>
            <td width="20%">
            <img className="img-small" src={matrix} alt="Matrix Chambers" />
            </td>
            <p class="mb-4">The LSE Law Review is proud to be sponsored by Matrix Chambers. Matrix is a barristers’ chambers with offices in Gray’s Inn, London, Geneva and Brussels. They are a group of independent and specialist lawyers who work across a wide range of areas of law. Their members work throughout the UK and have extensive experience internationally having worked in over 100 countries.</p>
            <p> Learn more here: <a target="_blank" rel="noopener noreferrer" href="https://www.matrixlaw.co.uk/"> www.matrixlaw.co.uk</a> </p>


            <br/>
            <h5 class="font-weight-bold page-heading-small">Freshfields Bruckhaus Deringer LLP</h5>
            <td width="20%">
            <img className="img-small" src={ff} alt="Freshfields" />
            </td>
            <p class="mb-4">The LSE Law Review is proud to be sponsored by Freshfields Bruckhaus Deringer LLP.   Freshfields is one of the world’s oldest and most successful international law firms. As such, we have a long-standing track record of successfully supporting the world's leading national and multinational corporations, financial institutions and governments on their business-critical mandates, wherever and whenever they arise. Whether it’s entering new markets, defending corporate reputation or managing multijurisdictional regulation, we are renowned for breaking new legal ground to help clients go further. </p>
            <p class="mb-4">Our 2,800 plus lawyers deliver results worldwide through our own offices in the world’s main business centres. We also work alongside leading local firms and, as a result, more than a third of our revenue comes from markets where we don’t have a permanent presence. </p> 
            <p class="mb-4">Our commitment, local and multinational expertise, and business know-how means our clients can rely on us to help them make the right decisions in a rapidly changing world. </p>
            <p class="mb-4">Our people make our firm. It doesn’t matter what your background is, which university you went to or the degree you studied. What we are looking for is people who think globally and are at their best when working with other people. </p>
            <p class="mb-4">You also need to be able to deliver a consistent, high-quality service across the globe. This means understanding not only the law, but also each client’s own business, the sector in which it operates, and the broader economic, political and cultural factors that affect the decisions it makes. That’s why we look for graduates who are creative, open-minded and curious about different ways of doing things.</p>
            <p class="h4 mb-4">Training Contract</p>
            <p class="mb-4">Our unique eight-seat training contract offers you a wide breadth of experience across our many areas of law. All trainees take at least one seat in dispute resolution and at least two seats in global transactions (across corporate, finance and real estate). You can choose other seats in: antitrust, competition and trade; people and reward; and tax.</p>
            
            <Collapse title={<><strong>Winter application window</strong>: Monday 4th October 2021 – Thursday 6th January 2022</>}>
                <p class="mb-4"></p>
                <p class="mb-2">Who can apply:</p>
                <ul>
                    <li>final-year law and non-law students</li>
                    <li>law and non-law graduates</li>
                </ul>
            </Collapse>

            <Collapse title={<><strong>Summer application window</strong>: Wed 1st June – Thursday 14th July 2022</>}>
                <p class="mb-4"></p>
                <p class="mb-2">Who can apply:</p>
                <ul>
                    <li>penultimate and final-year undergraduate law students (UK law degree)</li>
                    <li>law graduates (UK law degree)</li>
                    <li>GDL graduates</li>
                </ul>
            </Collapse>

            <Collapse title={<><strong>London-Asia Training Contract</strong>: Monday 4th October 2021 – Thursday 6th January 2022</>}> 
                <p class="mb-4">If you are fluent in English and native in an Asian language, you could apply for our London-Asia training contract, and build your career and network on both sides of the globe.</p>
                <p class="mb-4">This will see you spend your first year in London and your second year in Hong Kong. After the two-year training contract, you will qualify with one of our offices in Asia as an England-and-Wales-qualified solicitor.</p>
            </Collapse>
            
            <Collapse title={<><strong>Vacation Scheme 2022</strong>: Monday 4th October 2021– Thursday 6th January 2022</>}>
                <p class="mb-4">Our three-week summer vacation scheme is an exciting way to find out more about life at Freshfields. </p>
                <p class="mb-4">You’ll do real work, participate in group exercises, meet associates and partners, and catch up at social events organised by trainees. It’s your opportunity to really immerse yourself in the work and culture that Freshfields has to offer. </p>
                <p class="mb-4">You’re eligible to apply for the vacation scheme if you are a penultimate-year student studying any degree. If you are studying a four-year degree, you are able to apply in your second year and, if offered, we will defer your place.</p>
            </Collapse>
            
            <Collapse title={<><strong>Spring Scheme</strong>: 4th October 2021 – 17th February 2022</>}>
                <p class="mb-4">This two-day scheme will help you develop your understanding of our selection process and the skills you need to demonstrate to secure a place on our vacation scheme. Following this workshop, you may be invited to be fast-tracked for a vacation scheme interview commencing in 2022. This workshop is open to both law and non-law students in their first year of an undergraduate degree.</p>
            </Collapse>


            <p> Learn more here: <a target="_blank" rel="noopener noreferrer" href="https://www.freshfields.com"> www.freshfields.com </a> </p>
            <br/>
            
            <p class="mb-4"> We are currently looking for organisations to sponsor us. If your organisation is interested in sponsoring us, please send an email to <a href="mailto:editorialteam@lselawreview.com">editorialteam@lselawreview.com</a>.</p>
        
        
        </div>
    )
}
