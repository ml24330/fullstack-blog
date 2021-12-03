import React from 'react'
import { Helmet } from 'react-helmet'

export default function SubmissionsPage() {
    return (
        <div className="page-container">
            <Helmet>
                <title>Submission Guidelines</title>
            </Helmet>
            <div className="page-heading">Submission Guidelines</div>
            <p class="mb-4">The LSE Law Review Blog is dedicated to publishing short articles on topical legal issues in Public, Private, International and Criminal Law. All submissions to the Blog undergo the same stringent process of selection by the Editorial Board as articles submitted to the Main Journal. We review submissions throughout the 2021-22 academic year. However, submissions are reviewed and published on a rolling basis. We encourage you to submit your work to us as early as possible, because we may close submissions earlier if we have received enough articles. </p>
            <p class="mb-4">The best blog submission for 2021-2022 stands to win a £100 cash prize sponsored by Freshfields Bruckhaus Deringer LLP. There may also be cash prizes for other successful authors.</p>

            <h5 class="font-weight-bold page-heading-small">Submission Checklist</h5>
            <ol>
            <li>The word count for submissions (excluding footnotes) should be between 1,000-4,000 words.</li>
            <li>The submission file should be in the Microsoft Word file format (.doc or .docx). All submissions in PDF format will be returned.</li>
            <li>The submission should be on an area within (1) UK Law, (2) EU Law and/or (3) International Law. Submissions discussing laws of other jurisdictions will only be accepted where there is substantial comparative analysis with UK Law, EU Law and/or International Law.</li>
            <li> A cover page should be included with the title of the essay, the author’s full name, the category in which the submission falls (Public, Private, International, or Criminal), and a short description containing the following information: 
                <ul>
                <li>the stage of the author’s studies (year, academic programme, affiliation) or career, area(s) of interest, practice or specialty in the law;</li>
                <li>the context in which the work was written (e.g. for a class, for a competition, in response to a recent judicial decision, out of personal interest etc.), final word count, and;</li>
                <li>a declaration that the submitted work has not been published elsewhere.</li>
                </ul>
            </li>
            <li>Include a short blurb (not exceeding 200 words) preceding the article’s introduction. This will be be posted together with the submission, if accepted, on our social media platforms (such as Facebook and Linkedin).</li>
            <li>The main body of your submission should be in in Times New Roman with 1 inch margins, font size 12, and 1.5 line spacing. Footnotes are in Times New Roman, font size 10. Paragraphs should be indented and with no extra space in between. Figures and tables should be included only if they are essential to the content of the submission</li>
            <li>All citations should follow OSCOLA.</li>
            <li>Please provide a declaration that the submission is entirely the author's own. Any work of others, whether published or not, must be properly identified and referenced.</li>
            </ol>

            Submissions should be sent to <a href="mailto:editorialteam@lselawreview.com">editorialteam@lselawreview.com</a>. <strong>(Update as of 3 December 2021: Due to the high volume of submissions we have received, we will be postponing review of all new submissions to the LSE Law Review Blog to after the Christmas break in January 2022. We will to still be accepting submissions throughout December, but please note that the delay means you may only hear back from us about the outcome of your submission in late January 2022.)</strong>
        </div>
    )
}
