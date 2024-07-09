import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  main: {
    marginTop: 150,
    paddingRight: 24,
    paddingLeft: 24,
    backgroundColor: '#1A1A1A',
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
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  statusFeedback: {
    flexDirection: 'row',
    gap: 10,
  },
  statusTextCreate: {
    color: '#4EA8DE',
    fontWeight: '700',
    fontSize: 14
  },
  statusTextFinish: {
    color: '#8284FA',
    fontWeight: '700',
    fontSize: 14
  },
  statusQuantity: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: '#333333',
    borderRadius: 999
  },
  textStatusQuantity: {
    color: '#fff'
  },
  containerTasks: {
    flex: 1,
    gap: 8,
    marginTop: 18,
  },
  textEmpty: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080'
  },
  containerEmpty: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  taskContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: '#262626',
    borderRadius: 8,
  },
  taskCheckBox: {
    maxWidth: '90%'
  },
  removeTaskButton: {
    marginRight: 10,
  },
  textTask: {
    /* flexShrink: 1, */
  }
});