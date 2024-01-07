import NotFound from '@/app/not-found';
import { ArticleAuthor } from '@/components/Article/ArticleAuthor';
import { ArticleContent } from '@/components/Article/ArticleContent';
import { ArticleHeader } from '@/components/Article/ArticleHeader';
import { getSingleArticle } from '@/service/ghost';
import { CTASection } from '@/shared/CTASection';

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
        {(post.authors || []).map((author) => (
          <ArticleAuthor key={author.id} author={author} />
        ))}
        <div className="max-w-screen-sm mx-auto mt-4">
          <CTASection />
        </div>
      </article>
    </main>
  );
}
