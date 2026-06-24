import getSections from "@/lib/sections";
import Link from "next/link";

export default async function ChapterPage({params}: {params: Promise<{chapterSlug: string}>}) {
    const { chapterSlug } = await params;
    const sections = getSections(chapterSlug);

    return (
        <>
            <h1>Sections</h1>
            {sections.map(section => (
                <Link key={section.section} href={`/chapters/${chapterSlug}/${section.slug}`}>Section {section.section}: {section.title}</Link>
            ))}
        </>
    )
}