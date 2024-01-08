import NotFound from '@/app/not-found';
import { ArticleContent } from '@/components/Article/ArticleContent';
import { ArticleHeader } from '@/components/Article/ArticleHeader';
import { getSinglePage } from '@/service/ghost';

const PRIVACY_PAGE_SLUG = 'privacy';

export default async function SingleArticle() {
  const { page } = await getSinglePage({
    slug: PRIVACY_PAGE_SLUG,
    fields: 'id,slug,title,feature_image,primary_tag,excerpt,updated_at',
  });

  if (!page) {
    return <NotFound />;
  }

  return (
    <>
      <main className="flex min-h-screen bg-white p-4 pt-0">
        <article className="w-full">
          <ArticleHeader post={page} hideImage />
          <ArticleContent post={page} />
        </article>
      </main>
    </>
  );
}
