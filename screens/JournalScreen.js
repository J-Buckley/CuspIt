import React from 'react';
import { Calendar } from 'react-native-calendars';
import { createStackNavigator } from 'react-navigation';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';


export default class JournalScreen extends React.Component {
  static navigationOptions = {
    title: 'Journal',
  };


  render() {
    return (
          <ScrollView style={styles.container}>
            <View style={{alignItems: 'center'}}>
              <Text>
                Select a day to create a new entry
                {"\n"}{"\n"}
              </Text>
            </View>
            <Calendar 
              //pressable calendar days link to new JournalEntry screen
              onDayPress={(day) => this.props.navigation.navigate('Entry', {day})}
            />
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
