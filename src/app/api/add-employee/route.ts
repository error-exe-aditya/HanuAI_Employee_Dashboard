import { NextResponse } from 'next/server';

/**
 * API Route to add a new employee to the teamData array.
 * This route interacts with the GitHub API to update the source file,
 * which triggers a redeploy on Vercel/Netlify.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { auth_token, employeeData } = body;

    // 1. Validate Secret Token
    if (auth_token !== process.env.ADD_EMPLOYEE_AUTH_TOKEN) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Configuration (Ensure these are set in your Vercel Environment Variables)
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO_OWNER = "error-exe-aditya";
    const REPO_NAME = "HanuAI_Employee_Dashboard";
    const FILE_PATH = "src/data/team.ts";

    if (!GITHUB_TOKEN) {
      return NextResponse.json({ error: 'GitHub Token not configured' }, { status: 500 });
    }

    // 3. Fetch current file content from GitHub
    const getUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;
    const getRes = await fetch(getUrl, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
      cache: 'no-store'
    });

    if (!getRes.ok) {
      const errorData = await getRes.text();
      return NextResponse.json({ error: 'Failed to fetch file from GitHub', details: errorData }, { status: 500 });
    }

    const { content, sha } = await getRes.json();
    const decodedContent = Buffer.from(content, 'base64').toString('utf-8');

    // 4. Append the new entry to the array
    // We look for the last '];' and insert the new entry before it.
    const lastBracketIndex = decodedContent.lastIndexOf('];');
    if (lastBracketIndex === -1) {
      return NextResponse.json({ error: 'Malformed team.ts file' }, { status: 500 });
    }

    const entryString = `  {
    id: "${employeeData.id || `emp${Date.now()}`}",
    name: "${employeeData.name}",
    photo: "${employeeData.photo || '/images/team/default.png'}",
    vision: "${employeeData.vision || ''}",
    projectName: "${employeeData.projectName || ''}",
    bulletPoints: ${JSON.stringify(employeeData.bulletPoints || [])},
    projectImage: "${employeeData.projectImage || '/images/projects/default.png'}",
    projectLink: "${employeeData.projectLink || '#'}"
  },\n`;

    const newContent = 
      decodedContent.slice(0, lastBracketIndex) + 
      entryString + 
      decodedContent.slice(lastBracketIndex);

    // 5. Push update back to GitHub
    const putRes = await fetch(getUrl, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `Automated: Add employee ${employeeData.name}`,
        content: Buffer.from(newContent).toString('base64'),
        sha: sha,
      }),
    });

    if (!putRes.ok) {
      const errorData = await putRes.text();
      return NextResponse.json({ error: 'Failed to update file on GitHub', details: errorData }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Employee added and commit pushed.' });

  } catch (error: any) {
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
