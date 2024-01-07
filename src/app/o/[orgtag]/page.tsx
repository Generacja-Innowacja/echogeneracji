import { paths } from '@/constants/paths';
import { redirect } from 'next/navigation';

type Props = {
  params: { orgtag: string };
};

export default async function ArticlesRedirect({ params }: Props) {
  redirect(paths.orgArticles(params.orgtag));
}
