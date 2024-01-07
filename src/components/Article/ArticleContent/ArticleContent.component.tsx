import { PostOrPage } from '@tryghost/content-api';
import Head from 'next/head';
import './article.scss';

interface Props {
  post: PostOrPage;
}

export const ArticleContent: React.FC<Props> = ({ post }) => {
  const { html, excerpt, custom_excerpt } = post;
  const htmlContent = html || '';
  const lead = excerpt || custom_excerpt || '';

  const hasTwitterScript = htmlContent.includes(
    'https://platform.twitter.com/widgets.js'
  );

  return (
    <>
      <Head>
        {hasTwitterScript && (
          <script async src="https://platform.twitter.com/widgets.js" />
        )}
      </Head>
      <div className="max-w-screen-sm mx-auto mt-4 sm:mt-6 flex gap-4 flex-col text-darkviolet">
        {lead && <div className="font-bold">{lead}</div>}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </>
  );
};
