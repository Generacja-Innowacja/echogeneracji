import { paths } from '@/constants/paths';
import { redirect } from 'next/navigation';

type Props = {
  params: { tag: string };
};

export default async function ArticlesRedirect({ params }: Props) {
  redirect(paths.tagArticles(params.tag));
}
