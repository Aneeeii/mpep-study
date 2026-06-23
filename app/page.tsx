import getChapters from "@/lib/chapters";
import Link from "next/link";

export default function Home() {
  const chapters = getChapters();
  return (
    <>
      {chapters.map(chapter => (
        <Link key={chapter.slug} href={`/chapters/${chapter.slug}`}>Chapter {chapter.number}: {chapter.title}</Link>
      ))}
    </>
  );
}
