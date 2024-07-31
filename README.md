# Safety-Assessment
**Issues faced** Link given was redirecting to safety overview page
**multiple denied content** – seems server level hitting criteria by particular IP

**General Note- If there is multiple files, it will run in parallel mode. Any way you can run TCs in
parallel mode from single file too by -**

test.describe.configure({ mode: 'parallel' }); // in files - configured this already.

fullyParallel: true, // for config level,alreday set by default. If there are multiple test case files. It will run in parallel by default.

// only chromium is enabled as per now. change in config files.
Steps to install and run- 

Install
 Install Node, Npm, Java, VS code
 Npm init playwright@latest
 npm install --save-dev allure-playwright
 Config file basic edits

Run TCs on terminal after saving code –
 npx playwright test
 allure generate allure-results -o allure-report --clean
 allure open ./allure-report 

