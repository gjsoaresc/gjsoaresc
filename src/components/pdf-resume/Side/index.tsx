import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { commonStyles } from '../commonStyles'
import { Education } from './Education'
import { Language } from './Language'

const styles = StyleSheet.create({
  ...commonStyles,
  about: {
    marginBottom: 10,
    borderBottom: '1px solid rgba(28, 28, 31, 1)',
    fontSize: 10,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
})

export interface ISide {
  about: {
    title: string
    description: string
  }
  education: {
    title: string
    items: Array<{
      university: string
      course: string
      firstDate: number
      lastDate: number
      type: string
    }>
  }
  languages: {
    title: string
    items: Array<{
      language: string
      level: string
    }>
  }
  skills: {
    title: string
    items: Array<{
      title: string
      techs: Array<string>
    }>
  }
  references: {
    title: string
    description: string
  }
  last?: boolean
}

export const Side = ({
  about,
  education,
  languages,
  skills,
  references,
  last = false,
}: ISide) => {
  return (
    <View>
      {!last && (
        <>
          <Text style={styles.about}>{about.title}</Text>
          <Text style={[styles.sub, styles.description]}>
            {about.description}
          </Text>

          <Text style={[styles.about, { marginTop: 20 }]}>
            {education.title}
          </Text>

          {education.items.map((item, index) => (
            <Education
              key={index}
              university={item.university}
              course={item.course}
              firstDate={item.firstDate}
              lastDate={item.lastDate}
              type={item.type}
            />
          ))}

          <Text style={[styles.about, { marginTop: 10 }]}>
            {languages.title}
          </Text>

          <View style={[styles.section, { paddingRight: 10 }]}>
            {languages.items.map((item, index) => (
              <Language
                key={index}
                language={item.language}
                level={item.level}
              />
            ))}
          </View>

          <Text
            style={[styles.about, { marginTop: skills.items.length ? 20 : 0 }]}
          >
            {references.title}
          </Text>
          <Text style={styles.sub}>{references.description}</Text>
        </>
      )}

      {last && (
        <>
          {skills.items.length && (
            <>
              <Text style={[styles.about]}>{skills.title}</Text>
              <View
                style={{
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  height: 540,
                }}
                wrap={false}
              >
                {skills.items.map((item, index) => (
                  <View
                    key={index}
                    style={[
                      styles.col,
                      {
                        width: '50%',
                        marginBottom: 4,
                      },
                    ]}
                  >
                    <Text style={[styles.sub, { fontWeight: 500 }]}>
                      {item.title}
                    </Text>

                    {item.techs.map((tech, index) => (
                      <Text
                        key={index}
                        style={[
                          styles.sub,
                          {
                            color: 'rgba(0, 0, 0, .6)',
                          },
                        ]}
                      >
                        {tech}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            </>
          )}
        </>
      )}
    </View>
  )
}
