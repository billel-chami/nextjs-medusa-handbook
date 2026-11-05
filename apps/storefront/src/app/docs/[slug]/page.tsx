import { notFound } from "next/navigation";
import { CRASH_COURSE_TOPICS } from "@/domain/crash-course-data";
import { TopicDetailView } from "./TopicDetailView";

interface TopicPageProps {
  readonly params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CRASH_COURSE_TOPICS.map((topic) => ({
    slug: topic.slug,
  }));
}

export default async function TopicDetailPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topicIndex = CRASH_COURSE_TOPICS.findIndex((t) => t.slug === slug);

  if (topicIndex === -1) {
    notFound();
  }

  const topic = CRASH_COURSE_TOPICS[topicIndex];
  const prevTopic = topicIndex > 0 ? CRASH_COURSE_TOPICS[topicIndex - 1] : null;
  const nextTopic =
    topicIndex < CRASH_COURSE_TOPICS.length - 1
      ? CRASH_COURSE_TOPICS[topicIndex + 1]
      : null;

  return (
    <TopicDetailView
      topic={topic}
      prevTopic={prevTopic}
      nextTopic={nextTopic}
    />
  );
}
