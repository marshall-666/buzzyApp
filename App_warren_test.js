import React from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native'

import AnySpcificMeetingObjectives from './comps/AnySpcificMeetingObjectives'
import Ellipse from './comps/Ellipse'
import JoinAGroupCard from './comps/JoinAGroupCard'
import MembersInGroupCard from './comps/MembersInGroupCard'


const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Warren comps</Text>
            {/* <MembersInGroupCard/>
            <MembersInGroupCard/>
            <MembersInGroupCard/>
            <MembersInGroupCard/> */}
            {/* <AnySpcificMeetingObjectives/> */}
            {/* <Ellipse/> */}
            {/* <JoinAGroupCard/> */}
        </SafeAreaView>
    )
}

// export default App

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'lightblue',
    },
  })