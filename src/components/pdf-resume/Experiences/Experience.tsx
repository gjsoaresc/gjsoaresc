import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { JSX, Key } from 'react'
import { commonStyles } from '../commonStyles'

const styles = StyleSheet.create({
  ...commonStyles,
  subExperience: {
    marginTop: 6,
    paddingLeft: 18,
    borderLeft: '1px dotted rgba(28, 28, 31, 1)',
  },
})

interface IGeneralExperience {
  position?: string
  firstDate?: string | number
  lastDate?: string | number
  techs?: Array<string>
  description?: string
}

export interface IExperience extends IGeneralExperience {
  company?: string
  subs?: Array<IGeneralExperience>
}

export const Experience = ({
  company,
  position,
  firstDate,
  lastDate = 'Present',
  techs,
  description,
  subs,
}: IExperience) => (
  <View style={{ marginBottom: company ? 10 : 0 }}>
    <View style={styles.section}>
      {company && <Text style={[styles.sub2, styles.col]}>{company}</Text>}
      {firstDate && lastDate && company && (
        <Text
          style={[styles.sub, styles.col, { width: '50%', textAlign: 'right' }]}
        >
          {firstDate} - {lastDate}
        </Text>
      )}
    </View>

    {position && (
      <View style={styles.section}>
        <Text style={[styles.sub, styles.col, { color: 'rgba(0, 0, 0, .6)' }]}>
          {position}
        </Text>
        {firstDate && lastDate && !company && (
          <Text
            style={[
              styles.sub,
              styles.col,
              { width: '50%', textAlign: 'right' },
            ]}
          >
            {firstDate} - {lastDate}
          </Text>
        )}
      </View>
    )}

    {techs && (
      <View
        style={[
          styles.section,
          { margin: '3px 0 4px 0', justifyContent: 'flex-start' },
        ]}
      >
        {techs.map((tech, index) => (
          <View key={index} style={styles.badge}>
            <Text style={{ lineHeight: 'initial' }}>{tech}</Text>
          </View>
        ))}
      </View>
    )}

    {description && (
      <Text style={[styles.sub, styles.description]}>{description}</Text>
    )}

    {subs &&
      subs.map(
        (
          sub: JSX.IntrinsicAttributes & IGeneralExperience,
          index: Key | null | undefined
        ) => (
          <View key={index} style={styles.subExperience}>
            <Experience {...sub} />
          </View>
        )
      )}
  </View>
)
