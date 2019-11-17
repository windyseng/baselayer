import React from 'react'
import { Button, View } from 'react-native'
import { styles } from '../screens/HomeScreen.js'
// import Icon from 'react-native-vector-icons/dist/FontAwesome'

export default class FetchLocation extends React.Component{
  getUserLocationHandler = () => {
    console.log('You pressed me.')
  }

  render() {
    return(
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <Button title="GET LOCATION" onPress={props.onGetLocation} />
      </View>
    )
  }
}


// const getLocationBtn = (
//   <Icon.Button
//     name="location"
//     color= "#ffffff"
//     backgroundColor="#4c4c4b"
//     onPress={this.onGetLocation}
//   >
//     GET LOCATION
//   </Icon.Button>
// );

// const getLocationTextButton = (
//   <Icon.Button name="location" backgroundColor="#4c4c4b">
//     <Text style={{ fontFamily: 'Helvetica Neue', fontSize: 9 }}>
//     GET LOCATION
//     </Text>
//   </Icon.Button>
// );
