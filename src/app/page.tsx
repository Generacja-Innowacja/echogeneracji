import { getNewestPostsPreview } from '@/service/ghost';
import ArticleSection from '@/shared/ArticlesSection';
import { CTASection } from '@/shared/CTASection';

export default async function Home() {
  const { posts } = await getNewestPostsPreview({ limit: 17 });
  const postsSections = [
    posts.slice(0, 5),
    posts.slice(5, 11),
    posts.slice(11, 17),
  ];

  return (
    <main className="flex min-h-screen bg-white p-4 pt-0">
      <div className="flex flex-col gap-6 ml-auto mr-auto">
        <ArticleSection posts={postsSections[0]} featureFirst />
        <ArticleSection
          posts={postsSections[1]}
          title={
            <>
              <span className="text-lightviolet">Najnowsze</span> na platformie!
            </>
          }
        />
        <CTASection />
        <ArticleSection
          posts={postsSections[2]}
          title={
            <>
              <span className="text-lightviolet">Najciekawsze</span> dla Ciebie
            </>
          }
        />
      </div>
    </main>
  );
}
