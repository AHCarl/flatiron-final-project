//TODO 2 : make this
import React from 'react'
import { connect } from 'react-redux'
import { View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

class WorkoutHistoryScreen extends React.Component {

  state = {
    workouts: this.props.workouts,
    workoutDates: []
  }

  componentDidMount() {
    this.myWorkoutDates()
  }

  myWorkoutDates = () => {
    let wos = this.state.workouts 
    wos.forEach(wo => {
      this.state.workoutDates.push(wo["date"])
    });
    console.log(this.state.workoutDates)
  }

  // keyExtractor = (item, index) => index

  // renderItem = () => (
  //   <ListItem
  //     title={item.name}
  //     subtitle={item.subtitle}
  //   />
  // )

  render () {
    console.log(this.state.workouts)

    return (
      // <FlatList
      //   keyExtractor={this.keyExtractor}
      //   data={this.props.workouts}
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