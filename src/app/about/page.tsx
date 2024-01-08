import { paths } from '@/constants/paths';
import { redirect } from 'next/navigation';

const ABOUT_ARTICLE_SLUG = 'oto-echo-generacji';

export default async function ArticleRedirect() {
  redirect(paths.singleArticle(ABOUT_ARTICLE_SLUG));
}
