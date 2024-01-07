import ArticleSection from '@/components/Article/ArticlesSection';
import { getNewestPostsPreview } from '@/service/ghost';
import { CTASection } from '@/shared/CTASection';

type Props = {
  params: { tag: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function TagArticles({ params }: Props) {
  const { tag } = params;
  const { posts } = await getNewestPostsPreview({
    limit: 17,
    filter: `tag:${tag}`,
  });
  const postsSections = [
    posts.slice(0, 5),
    posts.slice(5, 11),
    posts.slice(11, 17),
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
