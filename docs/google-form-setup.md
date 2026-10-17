# SkillSpark Cybersecurity intake — Google Forms setup

**Launch status: CLOSED.** Only Cybersecurity applications are planned for the first intake. Use a Google Form owned by the SkillSpark organisation rather than a personal or shared learner account if possible.

## Form creation and validation

Create the form with a clear title such as **SkillSpark Bootcamp | Cybersecurity Cohort Application**. Use one authoritative respondent-facing link, not an editor link. Do not display the link publicly until the safeguarding, privacy, capacity and partner-access checks below are complete.

Suggested application fields (minimum necessary):
- Full name
- Contact email for application follow-up
- Age band: under 18 / 18 or older (avoid collecting full date of birth unless necessary)
- Education stage: secondary school / university / other
- Nigerian state or community (collect only detail needed for eligibility)
- Available learning device: smartphone / laptop / both
- Basic connectivity / ability to participate in online sessions
- Short motivation statement (optional)
- Acknowledgement of the privacy notice and consent to application review
- For applicants under 18: appropriate parent/guardian permission **and** any required verification mechanism established by the safeguarding lead

Decide and publish the eligibility criteria, form owner, list of authorised reviewers, handling of minors' details, privacy notice, retention/deletion policy, applicant support contact, escalation process and review method. These choices require your approval and a check against applicable privacy and child-safeguarding rules. Do not collect unnecessary identifying information such as national ID scans, precise addresses, passwords, or payment details.

Ensure Google Forms permissions and linked response Sheet do not expose applicants' answers to other applicants or public viewers. Test with both an adult and the approved under-18 workflow. Test acknowledgement emails if enabled, response Sheet permissions, form closing behaviour and delete/withdrawal requests.

## Turn on the website's Apply link (later)

The website does **not** submit data itself. It links to the respondent-facing Google Form when explicitly enabled.

\`\`\`dotenv
VITE_GOOGLE_FORM_URL=https://forms.gle/YOUR_PUBLIC_FORM_LINK
VITE_APPLICATIONS_OPEN=false
\`\`\`

Once the form and safeguards are approved, replace the URL, set \`VITE_APPLICATIONS_OPEN=true\`, rebuild/redeploy and verify the correct Google Form opens in a new tab on desktop and mobile. The code accepts public \`forms.gle\` and \`docs.google.com/forms/d/.../viewform\` links, and rejects other domains and editor-only links. A linked Form must also be **manually** accepting responses; enabling the site does not activate Google Forms.

Do not add any private Google API keys or credentials to Vite \`VITE_*\` settings.

## IT Experience / Google Cybersecurity Professional Certificate

Founder reports that **IT Experience** has arranged access to the Google Cybersecurity Professional Certificate on Coursera for SkillSpark learners. Before publishing stronger partnership claims or partner logos, confirm:
- Partner's exact legal/public name and official URL
- Permission to name or display partner branding
- Which learners qualify, the number of sponsored seats, access start/end dates
- Whether the Coursera learning access covers **all** courses and certificate issuance
- Any Google/Coursera age or account requirements and implications for applicants under 18

**Important:** The 6–8 week SkillSpark intensive is not the same as completing the full Google Cybersecurity Professional Certificate. Successful completion of the certificate depends on the entire Coursera programme and its terms, and may take longer.

Official course reference: https://www.coursera.org/professional-certificates/google-cybersecurity
