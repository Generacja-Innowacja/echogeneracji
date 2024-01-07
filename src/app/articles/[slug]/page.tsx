import NotFound from '@/app/not-found';
import { ArticleAuthor } from '@/components/Article/ArticleAuthor';
import { ArticleContent } from '@/components/Article/ArticleContent';
import { ArticleHeader } from '@/components/Article/ArticleHeader';
import { ArticleOrgPathBus } from '@/components/Article/ArticleOrgPathBus';
import { DOMAIN } from '@/constants/ghost';
import { paths } from '@/constants/paths';
import { getSingleArticle } from '@/service/ghost';
import { CTASection } from '@/shared/CTASection';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const { post } = await getSingleArticle({ slug });

  return {
    title: `${post?.title} | Echo Generacji`,
    description: post?.excerpt,
    openGraph: {
      images: [post?.feature_image || ''],
      authors: (post?.authors || []).map((author) => author.name || ''),
      type: 'article',
      locale: 'pl_PL',
      url: `${DOMAIN}/${paths.singleArticle(post?.slug || '')}`,
    },
  };
}

export default async function SingleArticle({ params }: Props) {
  const { slug } = params;
  const { post } = await getSingleArticle({ slug });

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <ArticleOrgPathBus post={post} />
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
    </>
  );
}
