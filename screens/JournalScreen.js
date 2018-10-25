import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Calendar } from 'react-native-calendars';

export default class JournalScreen extends React.Component {
  static navigationOptions = {
    title: 'Journal',
  };

  render() {
    return (
           <ScrollView style={styles.container}>
        <Calendar />
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
