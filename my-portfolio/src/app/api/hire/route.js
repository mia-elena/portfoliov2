import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, company, projectType, budget, timeline, description } = body;

        // Validate the input
        if (!name || !email || !projectType || !description) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configuring nodemailer transporter with Gmail
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Configuring email content
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: `Project Inquiry: ${projectType} - ${name}`,
            text: `
New Project Inquiry from ${name}

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Project Type: ${projectType}
Budget Range: ${budget || 'Not specified'}
Timeline: ${timeline || 'Not specified'}

Project Description:
${description}
            `,
            html: `
<h2>New Project Inquiry</h2>
<p><strong>From:</strong> ${name} (${email})</p>
${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
<p><strong>Project Type:</strong> ${projectType}</p>
${budget ? `<p><strong>Budget Range:</strong> ${budget}</p>` : ''}
${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
<h3>Project Description:</h3>
<p>${description.replace(/\n/g, '<br>')}</p>
            `,
            replyTo: email,
        };

        // Send email through Gmail SMTP
        await transporter.sendMail(mailOptions);
        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
