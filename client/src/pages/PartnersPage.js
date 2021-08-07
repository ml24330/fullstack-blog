import React from 'react'
import Bristol from '../assets/images/bristol-law-review.png'
import Cambridge from '../assets/images/cambridge-law-review.png'
import DeLege from '../assets/images/de-lege-ferenda-cambridge-law-review.png'
import Exeter from '../assets/images/exeter-law-review.png'
import Glasgow from '../assets/images/glasgow-law-review.png'
import Kings from '../assets/images/kings-student-law-review.png'
import Oxford from '../assets/images/oxford-university-undergraduate-law-journal.png'
import SOUH from '../assets/images/sohp.png'
import Trinity from '../assets/images/trinity-college-law-review.png'
import { Helmet } from 'react-helmet'

export default function PartnersPage() {
    return (
        <div className="page-container">
            <Helmet>
                <title>Partners</title>
            </Helmet>
            <div className="page-heading">Partners</div>

            <h5 class="page-heading-small">Bristol Law Review</h5>
            <img className="img-small" src={Bristol} alt="bristol" />
            <p class="mb-4">The Bristol Law Review is a premier student-run journal supported by the University of Bristol Law School. The journal publishes the best legal scholarship from students and the legal community online and in print. The editorial board is composed of senior students at the University of Bristol trained by academics to produce and edit the highest quality work. The journal has published an annual print edition since 2013 and, an online journal focusing on shorter work in conjunction with essay and case note prizes since 2014.</p>
            <p class="mb-0">Learn more: <a href="https://www.bristollawreview.com" target="_blank" rel="noopener noreferrer">www.bristollawreview.com</a></p>
            <p>Enquiries: <a href="mailto:thebristollawreview@gmail.com">thebristollawreview@gmail.com</a></p>
            <br />

            <h5 class="page-heading-small">Cambridge Law Review</h5>
            <img className="img-small" src={Cambridge} alt="cambridge" />
            <p class="mb-4">The Cambridge Law Review (CLR) is an independent academic journal run by students of the University of Cambridge which aims to provide a forum for the discussion of contemporary and cutting-edge legal issues. We welcome contemporary submissions on issues relating to all common law jurisdictions, or those with a former connection to the English common law; European law; international law; comparative pieces; as well as interdisciplinary legal scholarship that has regard to economics and political studies. We do consider purely jurisprudential or historical pieces on a case-by-case basis. Despite being a journal run by students of English law, we do not evince a preference for submissions relating to English law; our most important criteria for publication is that your submission relates to a contemporary legal issue and provides critical insight into the area of law you have chosen.</p>
            <p class="mb-0">Learn More: <a href="https://www.cambridgelawreview.org" target="_blank" rel="noopener noreferrer">www.cambridgelawreview.org</a></p>
            <p>Enquiries: <a href="mailto:contact@cambridgelawreview.org">contact@cambridgelawreview.org</a></p>
            <br />

            <h5 class="page-heading-small">De Lege Ferenda (Cambridge Law Review)</h5>
            <img className="img-small" src={DeLege} alt="delege" />
            <p class="mb-4">De Lege Ferenda (DLF) is the Cambridge Law Review’s supplementary undergraduate law journal, inviting discussion on contemporary issues relating to undergraduate law topics. The journal serves as a platform for students to make their first entry into academia, and all published articles will be made available online. DLF welcomes submissions discussing issues arising in recent cases and legislation. A submission may be written as a standalone piece, or be made in reply to published work. Your opinion on these matters is most important to us. Submissions should address issues such as: whether there will be any significant or noticeable practical impacts caused by a recent legal development; whether the law is changing too quickly or slowly; whether the changes are practically, doctrinally, or normatively sound; amongst numerous other possible issues.</p>
            <p class="mb-0">Learn More: <a href="https://www.cambridgelawreview.org/delegeferenda" target="_blank" rel="noopener noreferrer">www.cambridgelawreview.org</a></p>
            <p>Enquiries: <a href="mailto:contact@cambridgelawreview.org">contact@cambridgelawreview.org</a></p>
            <br />

            <h5 class="page-heading-small">Exeter Law Review</h5>
            <img className="img-small" src={Exeter} alt="exeter" />
            <p class="mb-4">As the University of Exeter Law School's flagship academic publication, the Exeter Law Review serves as a platform for innovative and sophisticated legal exposition, discussion, and debate. An open-access publication that also is available on HeinOnline, it has a distinguished history stemming from its original inception as the Bracton Law Journal in 1967. The Review is committed to the highest scholarly standards and to making a meaningful contribution to the legal community. </p>
            <p class="mb-0">Learn more: <a href="https://www.exeterlaw.org/" target="_blank" rel="noopener noreferrer">www.exeterlaw.org</a></p>
            <p>Enquiries: <a href="mailto:ex­eter­lawre­view@gmail.com">ex­eter­lawre­view@gmail.com</a></p>
            <br />

            <h5 class="page-heading-small">King's Student Law Review</h5>
            <img className="img-small" src={Kings} alt="kings" />
            <p class="mb-4">The King’s Student Law Review (KSLR) is an independent, online academic publication managed by the postgraduate research students at the Dickson Poon School of Law, King’s College London. The KSLR seeks to publish high quality legal scholarship written by the law students at King’s College and other leading law schools around the globe. The KSLR publishes two issues per year. Moreover, the Journal also publishes several thematic special editions and manages two academic blogs: the KSLR Forum Blog and the KSLR Commercial and Financial Law Blog. The KSLR’s publications are listed in the international database HeinOnline and can be accessed via its website.</p>
            <p class="mb-0">Learn more: <a href="https://blogs.kcl.ac.uk/kslr/" target="_blank" rel="noopener noreferrer">blogs.kcl.ac.uk/kslr</a></p>
            <p>Enquiries: <a href="mailto:kclstudentlawreview@gmail.com">kclstudentlawreview@gmail.com</a></p>
            <br />

            <h5 class="page-heading-small">Oxford University Undergraduate Law Journal</h5>
            <img className="img-small" src={Oxford} alt="oxford" />
            <p class="mb-4">Founded 10 years ago as the UK’s first undergraduate law journal, the OUULJ is independent and entirely student-run. The journal is Oxford’s only publication for undergraduate legal writing. Its Honorary Board comprises distinguished members such as Lord Neuberger and Lord Phillips as well as various notable legal academics and professionals. The Journal appears in print as well as on HeinOnline and LexisNexis, and submissions are accepted on a rolling basis from undergraduate students (and recent graduates) at all universities.</p>
            <p class="mb-0">Learn more: <a href="https://www.law.ox.ac.uk/ouulj" target="_blank" rel="noopener noreferrer">www.law.ox.ac.uk/ouulj</a></p>
            <p>Enquiries: <a href="mailto:ouulj@law.ox.ac.uk">ouulj@law.ox.ac.uk</a></p>
            <br />

            <h5 class="page-heading-small">Society of Undergraduate Humanities Publications</h5>
            <img className="img-small" src={SOUH} alt="souh" />
            <p class="mb-4">Over 60 member journals comprise The Society of Undergraduate Humanities Publications. Since our inception, we have committed ourselves to an egalitarian, inclusive philosophy that seeks to connect as many student editors as possible.</p>
            <p class="mb-0">Learn more: <a href="https://www.thesuhp.org/" target="_blank" rel="noopener noreferrer">www.thesuhp.org</a></p>
            <p>Enquiries: <a href="mailto:suhppresident@gmail.com">suhppresident@gmail.com</a></p>
            <br />

            <h5 class="page-heading-small">Trinity College Law Review</h5>
            <img className="img-small" src={Trinity} alt="trinity" />
            <p class="mb-4">The Trinity College Law Review is Ireland's oldest and leading student-run law review. Now in our twenty-third year, we serve students and the academy by providing a forum for the publication of original leading research of the highest quality. We also provide training in the performance of all the editorial and administrative tasks associated with the publication of a legal journal to our Editorial Board.</p>
            <p class="mb-0">Learn more: <a href="https://trinitycollegelawreview.org" target="_blank" rel="noopener noreferrer">trinitycollegelawreview.org</a></p>
            <p>Enquiries: <a href="mailto:lawreview.trinitycollege@gmail.com">lawreview.trinitycollege@gmail.com</a></p>
            <br />

            <h5 class="page-heading-small">University of Glasgow Law Review</h5>
            <img className="img-small" src={Glasgow} alt="glasgow" />
            <p class="mb-4">The University of Glasgow Law Review (GULR) is Scotland's leading legal Journal. Managed by the students of the University of Glasgow, we are dedicated to facilitating critical discussion of contemporary legal issues and providing an accessible forum of legal and political discourse. Founded in 2013, the GULR offers a unique opportunity for both undergraduate and postgraduate students to publish their academic writing in a recognised legal journal.</p>
            <p>Learn more: <a href="https://www.glasgowuniversitylawreview.com/" target="_blank" rel="noopener noreferrer">www.glasgowuniversitylawreview.com</a></p>
            <br />

        </div>
    )
}
