import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


export default class LogWorkoutScreen extends React.Component {

  static navigationOptions = {
    title: 'Log Workout',
  };

  state = {
    text: '',
    keyboard: 'numbers-and-punctuation',
    testWidth: '99%'
  }

  changeKeyboardOnNewline = (input) => {
    if (input === '\n') {
      this.setState({keyboard: 'numeric'})
    }
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
      <View removeClippedSubviews={false} style={{flex: 1, padding: 8}}>
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
          onChange={(input) => this.changeKeyboardOnNewline(input)}
          onChangeText={(text) => this.setState({text})}
          keyboardType={this.state.keyboard}
        >

        </TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textBox: {
    padding: 4,
    height: 400,
    borderColor: 'gray',
    borderWidth: 2,
    textAlignVertical: 'top'
  }
})