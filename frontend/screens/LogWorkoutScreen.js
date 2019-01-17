import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'



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
      <View removeClippedSubviews={false} style={{flex: 1, padding: 6}}>
        {/* <TextInput style={styles.bodyWeightInput} defaultValue={this.state.bodyWeight}
        onChangeText={(bodyWeight) => this.setState({bodyWeight})}>
        </TextInput> */}
        <FormLabel>Bodyweight:</FormLabel>
        <FormInput inputStyle={styles.bodyWeightInput} onChangeText={(bodyWeight) => this.setState({bodyWeight})}/>
        <TextInput style={
          { width: this.state.testWidth,
            padding: 4,
            height: 400,
            borderColor: 'gray',
            borderWidth: 2,
            textAlignVertical: 'top'
          }
        }
          multiline={true}
          selectTextOnFocus={true}
          placeholder="Start logging!"
          onChangeText={(log) => this.setState({log})}
          keyboardType={this.state.keyboard}
        >

        </TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bodyWeightInput: {
    width: 66,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    marginBottom: 5
  }
})