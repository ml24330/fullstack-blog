import React from 'react'
import Launch from '../assets/images/Launch.jpg'
import Prize from '../assets/images/Prize.png'
import Map from '../assets/images/Map.png'
import { Helmet } from 'react-helmet'

export default function AboutPage() {
    return (
        <div className="page-container">
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <div className="page-heading">About Us</div>
            
            <p class="mb-4">The LSE Law Review is a student-run law journal seeking to provide a platform for high quality legal scholarship, with the aim of contributing to debates pertaining to all areas of the law. Our Editorial Board is composed of LSE students from all years of study who are fully responsible for all editorial and organisational decisions in relation to the Review’s publication. We work independently, albeit with the endorsement, of the LSE Department of Law.</p>

            <p class="mb-4"> The LSE Law Review welcomes submissions from every level of legal study and practice, including those from practitioners, academics, and students. Submissions may take the form of an article, a legislative or case note, or a letter to the editor. All submissions are subject to a meticulous double-blind review process by members of the Editorial Board. </p>

            <p class="mb-4"> More information on the LSE Law Review's editorial policies and submission review processes can be found <a href="https://lawreview.lse.ac.uk/about/editorialpolicies/">here</a>. </p>
            
            <img className="img-large" src={Launch} alt="launch" />

            <div class="font-weight-bold page-heading-small">Blog Submissions</div>
            <p class="mb-4">The LSE Law Review Blog is dedicated to publishing short articles between 1000-4000 words on topical legal issues in Public, Private, International and Criminal Law. All submissions to the Blog undergo the same stringent process of selection by the Editorial Board as articles submitted to the Main Journal. We accept submissions to the Blog throughout the academic year and summer holidays.</p>

            <p> The best submissions to the Blog each year also stand the chance of being selected for publication in the Main Journal and winning cash prizes sponsored by the LSE Law Review. </p>

            <img className="img-large" src={Prize} alt="prize" />

            <h5 class="font-weight-bold page-heading-small">Contact us</h5>
            <img className="img-large" style={{ marginLeft: 0 }} src={Map} alt="map" />
            <p>LSE, Houghton Street, London, WC2A 2AE, United Kingdom</p>

            <p> For any enquiries, please contact us at <a href="mailto:lselawreview@gmail.com">lselawreview@gmail.com</a>.</p>

        </div>
    )
}
