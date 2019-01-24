//TODO 2 : make this
import React from 'react'
import { connect } from 'react-redux'
import { View, FlatList, Text} from 'react-native'
import { ListItem, Header } from 'react-native-elements'
import SignOutIcon from '../components/SignOutIcon'

class WorkoutHistoryScreen extends React.Component {
  
  static navigationOptions = {
    header: null
  }

  state = {
    myWorkouts: []
  }

  componentDidMount() {
    this.myWorkoutDates()
    this.render()
  }

  myWorkoutDates = () => {
    let wos = this.props.workouts 
    wos.forEach(wo => {
      var oneWo = {}
      var woArr = []
      oneWo.workoutDate = wo["date"]
      wo["exercisesToday"].forEach( eT => {
        woArr.push(eT["exercise"])
        woArr.join(" ")
        oneWo.exercises = woArr
      })
      this.state.myWorkouts.push(oneWo)
    });
    console.log(this.state.myWorkouts)
  }


  keyExtractor = (item, index) => index.toString()

 
  

  renderItem = ({item}) => (
    <ListItem
      title={item.workoutDate.slice(0,10)}
      subtitle={<Text>{item.exercises}</Text>}
    />
  )

  render () {
    return (
      <View style={{flex: 1}}>
        <Header centerComponent={{ text: 'Sign Up', style: { color: '#fff' } }} rightComponent={<SignOutIcon />}/>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.myWorkouts}
          renderItem={this.renderItem}
        >
        </FlatList>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {workouts: state.user.workouts, workoutDates: state.user.workouts.date}
}

export default connect(mapStateToProps)(WorkoutHistoryScreen)