import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const RESUME_ID = "1Nu0E-t-xt2XM0RI5DjFbfNUwMn73K69i";
const DRIVE_VIEW_URL = `https://drive.google.com/file/d/${RESUME_ID}/view?usp=sharing`;
const DRIVE_DOWNLOAD_URL = `https://drive.google.com/uc?id=${RESUME_ID}&export=download`;

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get('mode') || 'download';

    const filePath = path.join(process.cwd(), 'public', 'resume.pdf');
    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
        const fileBuffer = fs.readFileSync(filePath);
        const disposition = mode === 'view' ? 'inline' : 'attachment; filename="Parteek Kumar-Senior SDE frontend.pdf"';

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': disposition,
            },
        });
    } else {
        // Redirect to relevant Google Drive link
        const redirectUrl = mode === 'view' ? DRIVE_VIEW_URL : DRIVE_DOWNLOAD_URL;
        return NextResponse.redirect(redirectUrl);
    }
}
