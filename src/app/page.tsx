import { getNewestPostsPreview } from '@/service/ghost';
import ArticleSection from '@/shared/ArticlesSection';

export default async function Home() {
  const { posts } = await getNewestPostsPreview();

  return (
    <main className="flex min-h-screen bg-white p-4 pt-0">
      <ArticleSection posts={posts} featureFirst />
    </main>
  );
}
