import { pick } from 'lodash'
import { useLocale } from 'next-intl'
import dynamic from 'next/dynamic'

const PDFViewer = dynamic(() => import('@/components/pdf-resume'), {
  ssr: false,
})

const namespaces = ['Pdf']

const Page = async () => {
  const locale = useLocale()
  const messages = pick(
    (await import(`../../../messages/${locale}.json`)).default,
    namespaces
  )

  return <PDFViewer translations={messages.Pdf} />
}

export default Page
