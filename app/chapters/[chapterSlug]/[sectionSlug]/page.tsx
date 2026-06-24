import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export default async function SectionPage({params}: {params: Promise<{chapterSlug: string, sectionSlug: string}>}) {
    const { chapterSlug, sectionSlug } = await params;
    const fp = path.join(process.cwd(), 'content', chapterSlug, sectionSlug);
    const fileContents = fs.readFileSync(fp, 'utf8');
    const {data, content} = matter(fileContents);

    return (
        <>
            <h1>Section {data.section}: {data.title}</h1>
            <p>Published: {data.published?.toLocaleDateString('en-US', { timeZone: 'UTC' })}</p>
            <p>Last edited: {data.lastEdited?.toLocaleDateString('en-US', { timeZone: 'UTC' })}</p>
            <ReactMarkdown>{content}</ReactMarkdown>
        </>
    )
}