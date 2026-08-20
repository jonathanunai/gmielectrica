interface PageSeoOptions {
  title: string
  description: string
  /** Path to a social share image in public/. Defaults to the site-wide OG image. */
  image?: string
}

/**
 * Sets the per-page title, description, canonical URL and Open Graph tags.
 * Call once from the top of each page's <script setup>.
 */
export function usePageSeo({ title, description, image = '/og-image.jpg' }: PageSeoOptions) {
  const route = useRoute()
  const siteUrl = 'https://gmcolaborativos.com'
  const canonical = siteUrl + (route.path === '/' ? '' : route.path.replace(/\/$/, ''))

  useSeoMeta({
    title,
    description,
    ogTitle: `${title} | GM Colaborativos`,
    ogDescription: description,
    ogUrl: canonical,
    ogImage: siteUrl + image,
    twitterTitle: `${title} | GM Colaborativos`,
    twitterDescription: description,
    twitterImage: siteUrl + image,
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
  })
}
