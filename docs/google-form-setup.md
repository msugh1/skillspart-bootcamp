# SkillSpark Cybersecurity — Google Forms setup

**Applications are CLOSED.** The inaugural cohort is Cybersecurity only. The minimum applicant age is **16**, and the programme prioritises learners from underserved Nigerian communities.

Create an official, SkillSpark-controlled Google Form. Do not publish an editor link or open registration until a privacy and operational review is complete.

## Form fields (suggested)
- Full name and contact email
- Confirmation the applicant is at least 16 (do not request exact birth date unless needed)
- Education stage; Nigerian state or community where needed for eligibility
- Available smartphone or laptop and basic internet connectivity
- Optional brief motivation statement
- Acknowledgement of the final applicant privacy notice

Avoid collecting identification scans, exact home addresses, passwords or payments. Limit viewing of Google Forms responses and linked Sheets to authorised reviewers.

## Data protection for ages 16–17

The 16+ programme threshold does **not** by itself exempt SkillSpark from data-protection law for 16–17-year-olds. Section 31 of Nigeria's Data Protection Act 2023 requires parental/guardian consent where relying on consent to process children's data, subject to specific statutory exceptions (including certain educational processing under a professional owing a duty of confidentiality). Determine and document the appropriate lawful basis and whether an exception applies **before accepting applications**. Do not assume that an optional checkbox is enough to meet a legal requirement.

Official Act: https://ndpc.gov.ng/wp-content/uploads/2024/03/Nigeria_Data_Protection_Act_2023.pdf

Approve the privacy notice, retention/deletion schedule, authorised reviewers, secure access permissions and handling of under-18 applicants before opening the Form.

## Activate after approval

\`\`\`dotenv
VITE_GOOGLE_FORM_URL=https://forms.gle/YOUR_RESPONDENT_LINK
VITE_APPLICATIONS_OPEN=false
\`\`\`

After testing the actual public Google Form (including age eligibility, privacy notice and response access permissions), set \`VITE_APPLICATIONS_OPEN=true\` and redeploy. The website only links to Google Forms; it does not collect responses. The Google Form itself must be enabled to accept responses.

## Cybersecurity certificate course

SkillSpark plans to provide eligible learners access to the [Google Cybersecurity Professional Certificate on Coursera](https://www.coursera.org/professional-certificates/google-cybersecurity). Confirm age/account rules, available course access and duration before enrollment. The Coursera certificate requires full completion of its requirements and is separate from SkillSpark's 6–8 week intensive.
