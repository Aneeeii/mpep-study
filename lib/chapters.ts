import fs from 'fs';
import path from 'path';
import { chapterTitles } from './chapterTitles';

export default function getChapters() {
    const chapters = fs.readdirSync(path.join(process.cwd(), 'content'));
    const res = chapters.map(chapter => {
        return {
            slug: chapter,
            title: chapterTitles[chapter],
        }
    })
    return res;
}