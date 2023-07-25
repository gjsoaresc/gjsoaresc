'use client'

import {
  Document,
  Font,
  PDFViewer,
  Page,
  StyleSheet,
  View,
} from '@react-pdf/renderer'

import { Experiences } from './Experiences'
import { IExperience } from './Experiences/Experience'
import { Header, IHeader } from './Header'
import { ISide, Side } from './Side'

Font.registerEmojiSource({
  format: 'png',
  url: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/',
})

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxPKTU1Kg.ttf',
    },
    {
      src: 'http://fonts.gstatic.com/s/roboto/v15/RxZJdnzeo3R5zSexge8UUaCWcynf_cDxXwCLxiixG1c.ttf',
      fontWeight: 500,
    },
    {
      src: 'http://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOKCWcynf_cDxXwCLxiixG1c.ttf',
      fontWeight: 700,
    },
  ],
})

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    fontFamily: 'Roboto',
  },
  section: {
    width: '100%',
    padding: '0 40px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  col: {
    width: '50%',
    flexGrow: 1,
  },
})

export interface IResume {
  header: IHeader
  side: ISide
  experiences: {
    title: string
    items: Array<Array<IExperience>>
  }
}

const Resume = ({ header, side, experiences }: IResume) => {
  return (
    <Document>
      {experiences.items.map((experience, index) => (
        <Page
          key={index}
          size="A4"
          style={[styles.page, { padding: index > 0 ? '40px 0' : 0 }]}
        >
          {index === 0 && <Header {...header} />}
          <View style={styles.section}>
            <View style={[styles.col, { width: '25%' }]}>
              {index < 2 && <Side {...side} last={index === 1} />}
            </View>

            <View style={styles.col}>
              <Experiences title={experiences.title} items={experience} />
            </View>
          </View>
        </Page>
      ))}
    </Document>
  )
}

const Viewer = ({ translations }: { translations: IResume }) => {
  return (
    <div className="flex w-full h-full min-h-screen flex-col items-center justify-between">
      <PDFViewer className="flex w-full h-full min-h-screen">
        <Resume {...translations} />
      </PDFViewer>
    </div>
  )
}

export default Viewer
