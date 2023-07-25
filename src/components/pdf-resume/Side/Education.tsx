import { StyleSheet, Text, View } from '@react-pdf/renderer'

import { commonStyles } from '../commonStyles'

const styles = StyleSheet.create({
  ...commonStyles,
})

interface IEducation {
  university: string
  course: string
  firstDate: string | number
  lastDate: string | number
  type: string
}

export const Education = ({
  university,
  course,
  firstDate,
  lastDate = 'Present',
  type,
}: IEducation) => (
  <View style={{ marginBottom: 10 }}>
    <View style={styles.section}>
      <Text style={[styles.sub, styles.col, { fontWeight: 700 }]}>
        {university}
      </Text>
      <Text
        style={[styles.sub, styles.col, { width: '50%', textAlign: 'right' }]}
      >
        {type}
      </Text>
    </View>

    <View style={styles.section}>
      <Text style={[styles.sub, styles.col]}>{course}</Text>
      <Text
        style={[styles.sub, styles.col, { width: '50%', textAlign: 'right' }]}
      >
        {firstDate} - {lastDate}
      </Text>
    </View>
  </View>
)
