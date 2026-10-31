SAARTHI TRADING AND CONSULTANCIES — WEBSITE
===========================================

CONTENTS
- index.html       Main website page
- styles.css       Website design and responsive layout
- script.js        Mobile menu and enquiry email behaviour
- assets/          Company logo

IMPORTANT BEFORE PUBLISHING
1. Check the company name, phone number and email on the website.
2. Check all product/service descriptions. Remove anything you do not actually offer.
3. The enquiry form opens the visitor's email application (mailto). It does not store enquiries on a server.
4. The website currently uses only the location "Meerut, Uttar Pradesh – 250002"; add a full public address only if you want it displayed.
5. Do not publish sensitive documents, bank details, personal identity documents or confidential tender information.

HOSTING GUIDE (STATIC WEBSITE)
Vercel's Hobby plan is intended for personal, non-commercial use. Since this is a business website, review Vercel's current plan terms and choose a plan that permits your intended commercial use before publishing.

A. GITHUB
1. Open https://github.com and create/sign in to an account.
2. Click the + icon (top right) > New repository.
3. Repository name: saarthi-trading-website
4. Choose Public or Private, then click Create repository.
5. On the repository page, choose "uploading an existing file".
6. Open this extracted website folder on your computer. Upload index.html, styles.css, script.js and the assets folder (upload the files inside assets too).
7. Click Commit changes.

B. VERCEL
1. Open https://vercel.com and sign in (GitHub sign-in is easiest).
2. From the dashboard choose Add New > Project.
3. Import the repository named saarthi-trading-website.
4. For this plain HTML website, choose Framework Preset: Other.
5. Leave Build Command and Output Directory empty; Root Directory should be ./ .
6. Click Deploy.
7. When deployment completes, open the generated preview URL and test every menu link, phone, email and page section.

C. REQUESTED SUBDOMAIN
1. In the Vercel project, open Settings > Domains.
2. Add saarthitc.vercel.app.
3. If Vercel says the name is available and permits assignment, follow the on-screen instructions. Otherwise choose an available alternative.
4. Recheck the live URL after the domain status shows valid.

UPDATING THE WEBSITE
Edit the relevant file in your GitHub repository and commit the change. Vercel automatically builds a new deployment from the connected repository.

NO-CODE NOTE
You do not need to edit the code to publish this first version. Keep a backup copy of this folder and ZIP.
