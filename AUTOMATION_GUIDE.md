# Automation Guide: Google Form to Dashboard

This guide explains how to connect a Google Form to your dashboard so that new employee entries are added automatically.

## Prerequisites

1.  **GitHub Personal Access Token (PAT):**
    - Go to **GitHub Settings > Developer Settings > Personal access tokens > Tokens (classic)**.
    - Click **Generate new token**.
    - Give it a name (e.g., "Dashboard Automation") and select the `repo` scope.
    - Copy the token immediately.

2.  **Environment Variables (on Vercel/Netlify):**
    - `GITHUB_TOKEN`: Your Personal Access Token.
    - `ADD_EMPLOYEE_AUTH_TOKEN`: A secret password of your choice (e.g., `my_secret_key_123`).

---

## Step 1: Create the Google Form

Create a Google Form with the following fields (names can vary, but remember the order):
- Name
- Vision Statement
- Project Name
- Bullet Points (separated by commas)
- Photo URL (optional)
- Project Image URL (optional)
- Project Link (optional)

---

## Step 2: Add the Google Apps Script

1.  In your Google Form, click the **three dots** (top right) > **Script editor**.
2.  Replace the code with following:

```javascript
const API_URL = "https://your-deployed-site.vercel.app/api/add-employee";
const AUTH_TOKEN = "your_secret_key_123"; // Must match ADD_EMPLOYEE_AUTH_TOKEN

function onFormSubmit(e) {
  const responses = e.response.getItemResponses();
  const data = {};
  
  // Mapping Form Responses to Object (adjust indices if needed)
  const employeeData = {
    name: responses[0].getResponse(),
    vision: responses[1].getResponse(),
    projectName: responses[2].getResponse(),
    bulletPoints: responses[3].getResponse().split(',').map(s => s.trim()),
    photo: responses[4] ? responses[4].getResponse() : "",
    projectImage: responses[5] ? responses[5].getResponse() : "",
    projectLink: responses[6] ? responses[6].getResponse() : ""
  };

  const payload = {
    auth_token: AUTH_TOKEN,
    employeeData: employeeData
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  };

  UrlFetchApp.fetch(API_URL, options);
}

function setupTrigger() {
  ScriptApp.newTrigger('onFormSubmit')
    .forForm(FormApp.getActiveForm())
    .onFormSubmit()
    .create();
}
```

3.  **Save** the project.
4.  Run the `setupTrigger` function once to authorize the script.

---

## How it works

1.  Someone fills out the Google Form.
2.  The script sends the data to your website's `/api/add-employee` endpoint.
3.  The endpoint uses your `GITHUB_TOKEN` to add the data to `src/data/team.ts` in your GitHub repo.
4.  GitHub sees the new commit and triggers a **Redeploy** on Vercel/Netlify.
5.  Your website is updated automatically!
