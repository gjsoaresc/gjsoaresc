import { StyleSheet } from '@react-pdf/renderer'

export const commonStyles = StyleSheet.create({
  description: {
    textAlign: 'justify',
  },
  sub: {
    fontSize: 8,
    lineHeight: 1.5,
  },
  sub2: {
    fontSize: 10,
    lineHeight: 1.5,
    fontWeight: 700,
  },
  section: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    flexGrow: 1,
  },
  badge: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: '2px 4px',
    borderRadius: 4,
    marginRight: 4,
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 7,
  },
})
