import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default function getSections(chapterSlug: string) {
    const sections = fs.readdirSync(path.join(process.cwd(), 'content', chapterSlug));
    return (sections.map(section => {
        const fp = path.join(process.cwd(), 'content', chapterSlug, section);
        const fileContents = fs.readFileSync(fp, 'utf8');
        const {data} = matter(fileContents);
        return ({
            slug: section.replace('.md', ''),
            title: data.title,
            section: data.section,
            description: data.description,
            published: data.published,
            lastEdited: data.lastEdited,
            chapter: data.chapter
        });
    }))    
}