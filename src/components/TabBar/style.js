import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      paddingTop: 20,
    },
    tabBarIcon: {
      width: 26,
      height: 26,
      resizeMode: 'contain',
    },
    tabBarSelectedIcon: {
      width: 26,
      height: 26,
      resizeMode: 'contain',
      tintColor: 'red',
    },
    tabBarStyle: {
      backgroundColor: '#FFF',
    },
    sceneStyle: {
      paddingBottom: 0,
    },
    selectedTitleStyle: {
      color: 'red',
    },
  },
);

export default styles;
