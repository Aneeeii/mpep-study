import getChapters from "@/lib/chapters";
import Link from "next/link";

export default function Home() {
  const chapters = getChapters();
  return (
    <>
    <h1>Hello</h1>
    <h2>Recent Updates</h2>
    <p>06/23/2026 - Setting up foundations :)</p>
    <h2>Chapters</h2>
      {chapters.map(chapter => (
        <Link key={chapter.slug} href={`/chapters/${chapter.slug}`}>Chapter {chapter.number}: {chapter.title}</Link>
      ))}
    </>
  );
}
