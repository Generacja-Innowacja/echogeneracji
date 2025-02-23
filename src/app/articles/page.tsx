import ArticleSection from '@/components/Article/ArticlesSection';
import { getNewestPostsPreview } from '@/service/ghost';
import { CTASection } from '@/shared/CTASection';

export default async function Home() {
  const { posts } = await getNewestPostsPreview({ limit: 50 });
  const postsSections = [
    posts.slice(0, 5),
    posts.slice(5, 11),
    posts.slice(11),
  ];

  return (
    <main className="flex min-h-screen bg-white p-4 pt-0">
      <div className="flex flex-col gap-6 w-full mx-auto max-w-screen-xl">
        <ArticleSection
          posts={postsSections[0]}
          featureFirst
          ifEmpty="showEmptySection"
        />
        <ArticleSection
          posts={postsSections[1]}
          title={
            <>
              <span className="text-lightviolet">Najnowsze</span> na platformie!
            </>
          }
          ifEmpty="hide"
        />
        <CTASection />
        <ArticleSection
          posts={postsSections[2]}
          title={
            <>
              <span className="text-lightviolet">Najciekawsze</span> dla Ciebie
            </>
          }
          ifEmpty="hide"
        />
      </div>
    </main>
  );
}
