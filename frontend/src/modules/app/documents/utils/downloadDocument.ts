import { BACKEND_URL } from '@frontend/utils/locationUtils'

export const downloadDocument = (fileUuid: string, fileName: string) => {
  const url = `${BACKEND_URL}/files/download/${fileUuid}`
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.target = '_blank'
  link.click()
}
