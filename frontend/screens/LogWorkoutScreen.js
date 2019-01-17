import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


export default class LogWorkoutScreen extends React.Component {

  static navigationOptions = {
    title: 'Log Workout',
  };

  state = {
    bodyWeight: '180',
    log: '',
    testWidth: '99%'
  }

  componentDidMount () {
    /* Evidently, resizing triggers something that makes copy-paste work.
     * Timeout is mandatory for this hack, doesn't work otherwise.
     */
    setTimeout(() => {
      this.setState({testWidth: '100%'})
    }, 100)
  }

  render() {
    return (
      <View style={{flex: 1, padding: 6}}>
        {/* <TextInput style={styles.bodyWeightInput} defaultValue={this.state.bodyWeight}
        onChangeText={(bodyWeight) => this.setState({bodyWeight})}>
        </TextInput> */}
        <Text style={{fontSize: 12}}>Bodyweight:</Text>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: "space-between"}}>
          <TextInput style={styles.bodyWeightInput} value={this.state.bodyWeight}
            maxLength={3} onChangeText={(bodyWeight) => this.setState({bodyWeight})}/>
          <Button title={"Log It!"} buttonStyle={styles.logButton} onPress={() => console.log('Logged!')}/>
        </View>
        <TextInput style={
          { width: this.state.testWidth,
            padding: 4,
            height: 400,
            borderColor: 'lightgrey',
            borderWidth: 2,
            textAlignVertical: 'top'
          }
        }
          multiline={true}
          placeholder="Start logging!"
          onChangeText={(log) => this.setState({log})}
          keyboardType={this.state.keyboard} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bodyWeightInput: {
    width: 66,
    maxHeight: 33,
    borderColor: 'lightgrey',
    borderWidth: 2,
    marginBottom: 5, 
  },
  logButton: {
    backgroundColor: '#ffb042',
    bottom: 11,
    height: 40
  }
})