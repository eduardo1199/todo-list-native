import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    flexDirection: 'column',
  },
  main: {
    marginTop: 150,
    paddingRight: 24,
    paddingLeft: 24,
    backgroundColor: '#333333',
    flexDirection: 'column',
    height: '100%',
  },
  input: {
    padding: 16,
    backgroundColor: '#262626',
    color: '#FFFFFF',
    borderRadius: 6,
    flex: 1,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

    marginTop: -25
  },
  button: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

    backgroundColor: '#1E6F9F',
    color: '#FFFFFF',
    borderRadius: 6
  }
});