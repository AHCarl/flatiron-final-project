//TODO 2 : make this
import React from 'react'
import { connect } from 'react-redux'
import { View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

class WorkoutHistoryScreen extends React.Component {

  state = {
    myWorkouts: []
  }

  componentDidMount() {
    this.myWorkoutDates()
  }

  // myWorkoutDates = () => {
  //   let wos = this.state.workouts 
  //   wos.forEach(wo => {
  //     this.state.workoutDates.push(wo["date"])
  //   });
  //   console.log(this.state.workoutDates)
  // }

  myWorkoutDates = () => {
    let wos = this.props.workouts 
    wos.forEach(wo => {
      var oneWo = {}
      var woArr = []
      oneWo.workoutDate = wo["date"]
      wo["exercisesToday"].forEach( eT => {
        woArr.push(eT["exercise"])
        oneWo.exercises = woArr
      })
      this.state.myWorkouts.push(oneWo)
    });
    console.log(this.state.myWorkouts)
  }

  keyExtractor = (item, index) => index

  renderItem = () => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
    />
  )

  render () {

    return (
      // <FlatList
      //   keyExtractor={this.keyExtractor}
      //   data={this.props.workoutDates}
      //   renderItem={this.renderItem}
      // />
      <View></View>
    )
  }
}

const mapStateToProps = (state) => {
  return {workouts: state.user.workouts, workoutDates: state.user.workouts.date}
}

export default connect(mapStateToProps)(WorkoutHistoryScreen)