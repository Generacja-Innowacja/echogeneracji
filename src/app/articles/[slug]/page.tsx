import NotFound from '@/app/not-found';
import { ArticleContent } from '@/components/Article/ArticleContent';
import { ArticleHeader } from '@/components/Article/ArticleHeader';
import { getSingleArticle } from '@/service/ghost';

export default async function SingleArticle({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { post } = await getSingleArticle({ slug });

  if (!post) {
    return <NotFound />;
  }

  return (
    <main className="flex min-h-screen bg-white p-4 pt-0">
      <article className="w-full">
        <ArticleHeader post={post} />
        <ArticleContent post={post} />
      </article>
    </main>
  );
}
