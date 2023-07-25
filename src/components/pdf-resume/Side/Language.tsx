import { StyleSheet, Text, View } from '@react-pdf/renderer'

import { commonStyles } from '../commonStyles'

const styles = StyleSheet.create({
  ...commonStyles,
})

interface ILanguage {
  language: string
  level: string
}

export const Language = ({ language, level }: ILanguage) => (
  <View style={{ marginBottom: 10 }}>
    <View style={[styles.section, { flexDirection: 'column' }]}>
      <Text style={[styles.sub, styles.col, { fontWeight: 700 }]}>
        {language}
      </Text>
      <Text style={[styles.sub, styles.col, { width: '50%' }]}>{level}</Text>
    </View>
  </View>
)
