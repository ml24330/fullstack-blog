import React from 'react'
import { Helmet } from 'react-helmet'

export default function SubmissionsPage() {
    return (
        <div className="page-container">
            <Helmet>
                <title>Submission Guidelines</title>
            </Helmet>
            <div className="page-heading">Submission Guidelines</div>
            <p class="mb-4">The LSE Law Review Blog is dedicated to publishing short articles on topical legal issues in Public, Private, International and Criminal Law. All submissions to the Blog undergo the same stringent process of selection by the Editorial Board as articles submitted to the Main Journal. We accept submissions to the Blog throughout the academic year and summer holidays.The best submissions to the Blog each year also stand the chance of being selected for publication in the Main Journal and winning cash prizes sponsored by the LSE Law Review. </p>

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

            Submissions should be sent to <a href="mailto:lselawreview@gmail.com">lselawreview@gmail.com</a>. (We are currently accepting submissions to the LSE Law Review Blog.)
        </div>
    )
}
