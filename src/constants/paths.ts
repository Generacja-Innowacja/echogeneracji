export const paths = {
  home: '/',
  privacy: '/privacy',
  about: '/about',
  join: '/join',
  singleArticle: (slug: string) => `/articles/${slug}`,
  orgArticles: (orgId: string) => `/orgs/${orgId}/articles`,
};
