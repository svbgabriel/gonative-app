import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f95c5c',
  },
  titleBox: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  post: {
    backgroundColor: '#fff',
    margin: 20,
    marginBottom: 0,
    borderRadius: 3,
    padding: 20,
  },
  postTitle: {
    fontWeight: 'bold',
  },
  postText: {
    marginTop: 5,
  },
});
