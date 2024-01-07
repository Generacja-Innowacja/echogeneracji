export const paths = {
  home: '/',
  privacy: '/privacy',
  about: '/about',
  join: '/join',
  singleArticle: (slug: string) => `/articles/${slug}`,
  orgArticles: (orgTag: string) => `/o/${orgTag.replace('#', '')}/articles`,
  tagArticles: (tag: string) => `/t/${tag}/articles`,
};
