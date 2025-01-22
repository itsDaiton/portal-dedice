import { BACKEND_URL } from '@frontend/utils/locationUtils'

export const getArticleImageUrl = ({ fileUuid }: { fileUuid: string }) => {
  if (!fileUuid) return undefined
  return `${BACKEND_URL}/files/stream/${fileUuid}`
}

export const getLatestArticles = (
  articles:
    | Array<{
        id: string
        title: string
        content: string
        date: string
        attachment?: { fileUuid: string } | null
      }>
    | undefined,
  excludeId: number,
  limit = 3
) => {
  if (!articles) return []

  return articles
    .filter((a) => parseInt(a.id) !== excludeId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
    .map((article) => ({
      id: parseInt(article.id),
      title: article.title,
      description: article.content,
      createDate: article.date.split('T')[0],
      imageUrl: article.attachment?.fileUuid
        ? getArticleImageUrl({ fileUuid: article.attachment.fileUuid })
        : undefined,
    }))
}
