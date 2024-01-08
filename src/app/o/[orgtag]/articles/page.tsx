import { ArticleOrgPathBus } from '@/components/Article/ArticleOrgPathBus';
import ArticleSection from '@/components/Article/ArticlesSection';
import { ORGANISATIONS } from '@/constants/organisations';
import { getNewestPostsPreview } from '@/service/ghost';
import { CTASection } from '@/shared/CTASection';
import { Metadata } from 'next';

type Props = {
  params: { orgtag: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const org = ORGANISATIONS.find(org => org.tag === params.orgtag);
  if (!org) {
    return {}
  }

  return {
    title: `${org.name} na Echo Generacji`,
    description: `Sprawdź artykuły opublikowane przez ${org.name}!`,
  };

export default async function OrgArticles({ params }: Props) {
  const { orgtag } = params;
  const { posts } = await getNewestPostsPreview({
    limit: 50,
    filter: `tag:hash-${orgtag}`,
  });
  const postsSections = [
    posts.slice(0, 5),
    posts.slice(5, 11),
    posts.slice(11, 17),
  ];
  const firstPost = posts[0];

  return (
    <>
      <ArticleOrgPathBus post={firstPost} priorityTag={`#${orgtag}`} />
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
                <span className="text-lightviolet">Najnowsze</span> na
                platformie!
              </>
            }
            ifEmpty="hide"
          />
          <CTASection />
          <ArticleSection
            posts={postsSections[2]}
            title={
              <>
                <span className="text-lightviolet">Najciekawsze</span> dla
                Ciebie
              </>
            }
            ifEmpty="hide"
          />
        </div>
      </main>
    </>
  );
}
