import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { commonStyles } from '../commonStyles'
import { Experience, IExperience } from './Experience'

const styles = StyleSheet.create({
  ...commonStyles,
  experience: {
    marginBottom: 10,
    borderBottom: '1px solid rgba(28, 28, 31, 1)',
    fontSize: 10,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
})

export interface IExperiences {
  title?: string
  items: Array<IExperience>
}

export const Experiences = ({ title, items }: IExperiences) => {
  return (
    <View>
      {title && <Text style={styles.experience}>{title}</Text>}

      {items.map((item, index) => (
        <Experience key={index} {...item} />
      ))}
    </View>
  )
}
