import React from 'react';
import { AsyncStorage, Button, Picker, StyleSheet, Text, TextInput, View} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { createMaterialTopTabNavigator} from 'react-navigation';


export class JournalEntry extends React.Component {
  static navigationOptions = {
    title: 'New entry'
  };

  render() {
    //get day params
    const dayInfo = this.props.navigation.getParam('day', 'New Entry');

    return (
        //<Text>{JSON.stringify(dayInfo)}</Text>
        //{"\n" }{"\n"}
        //check the dayInfo param for the selected day
        //<Text>daySearch</Text>
      <View style={styles.container}>
        <Text style={styles.textBoxes}>Enter a brief description of your meal</Text>
        {"\n"}{"\n"}
        <View style={styles.container}>
          <TextInput multiline = {true} maxLength = {200} style = {styles.searchInput} placeholder = 'Meal desription'/>
        </View>
      </View>
    );
  }
}

export class Hunger extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      pickerSelection: 'Default value'
    }
  }
  render() {
    return(
    <View style={styles.container}>
      <Picker
        selectedValue={this.state.pickerSelection}
        style={{ backgroundColor: 'afafafa', height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) => this.setState({pickerSelection: itemValue})}>
        <Picker.Item label="Very hungry" value="Veryhungry" />
        <Picker.Item label="Hungry" value="hungry" />
        <Picker.Item label="Peckish" value="peckish" />
        <Picker.Item label="Grazing" value="grazing" />
      </Picker>
    </View>
    );
  }
}

export class Mood extends React.Component {
  render() {
    return(
    <View style={styles.container}>
      <Text>Mood status here</Text>
    </View>
    );
  }
}

export default createMaterialTopTabNavigator({
  JournalEntry: JournalEntry,
  Hunger: Hunger,
  Mood: Mood,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    textAlign: 'center',
    alignItems: 'center',
  },
  textBoxes: {
    textAlign: 'center',
  },
  searchInput:
  {
    height:240,
    width:250,
    fontSize:18,
    borderWidth:1,
    color:'black',
    borderColor:'85d3dc',
    borderRadius:1,
  }

});

//Setting up async database calls

_storeData = async () => {
  try {
    await AsyncStorage.setItem('@FoodJournal:key', 'New journal entry');
  } catch (error) {
    // Error saving data
  }
}

_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('TASKS');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
   } catch (error) {
     // Error retrieving data
   }
}