import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { Component, useState } from 'react';
import { Alert, Button, Platform, StatusBar, StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { firebase_config, owm_apikey } from './secrets';
import ForecastCard from './components/ForecastCard';

// export default class App extends React.Component{
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: '',
//       password: '',
//     };
//   }

//   onLogin() {
//     const { username, password } = this.state;

//     Alert.alert('Credentials', `${username} + ${password}`);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           value={this.state.username}
//           onChangeText={(username) => this.setState({ username })}
//           placeholder={'Username'}
//           style={styles.input}
//         />
//         <TextInput
//           value={this.state.password}
//           onChangeText={(password) => this.setState({ password })}
//           placeholder={'Password'}
//           secureTextEntry={true}
//           style={styles.input}
//         />

//         <Button
//           title={'Login'}
//           style={styles.input}
//           onPress={this.onLogin.bind(this)}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });


// import FetchLocation from './components/FetchLocation'

// import * as firebase from 'firebase';
// // import { fdatasync } from 'fs';
// const firebaseConfig = {
//   apiKey: firebase_config.apiKey,
//   authDomain: firebase_config.authDomain,
//   databaseURL: firebase_config.databaseURL,
//   storageBucket: firebase_config.storageBucket,
// }

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // firebase.analytics();

// const zip = 10007
// const country = "us"

// export default class App extends React.Component {

// 	constructor(props){
// 		super(props);

// 		this.state = {
// 			// latitude: 0,
// 			// longitude: 0,
// 			// forecast: [],
//       // error:'',
//       temp: null,
// 		};
// 	}

// 	componentDidMount(){
// 		// Get the user's location
//     // this.getLocation();
//     axios
//     .get( `http://api.openweathermap.org/data/2.5/weather?q=${zip},${country}&appid=${owm_apikey}&units=imperial`)
//     .then(res => {
//       const data = res.data
//       this.setState({temp: data.main.temp})
//     })
// 	}

// 	getLocation(){
// 		// Get the current position of the user
// 		navigator.geolocation.getCurrentPosition(
// 			(position) => {
// 				this.setState(
// 					(prevState) => ({
// 					latitude: position.coords.latitude,
// 					longitude: position.coords.longitude
// 					}), () => { this.getWeather(); }
// 				);
// 			},
// 			(error) => this.setState({ forecast: error.message }),
// 			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
// 		);
// 	}

// 	getWeather(){

// 		// Construct the API url to call
// 		let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + this.state.latitude + '&lon=' + this.state.longitude + '&units=metric&appid=' + owm_apikey;

// 		// Call the API, and set the state of the weather forecast
// 		fetch(url)
// 		.then(response => response.json())
// 		.then(data => {
// 			this.setState((prevState, props) => ({
// 				forecast: data
// 			}));
// 		})
//   }

//   Matcher(temp) {
//     if(temp >= 90 && temp <= 110 ) {
//       return 'toasty'
//     }else if (temp >= 80) {
//       return 'tropical'
//     }else if (temp >= 70) {
//       return 'temperate'
//     }else if(temp >= 55 && temp <= 65) {
//       return 'chilly'
//     } else if(temp >=35 && temp <= 55) {
//       return 'frosty'
//     } else if(temp >=0 && temp <= 35) {
//       return 'tundra'
//     }
//   }

// 	render() {
// 		return (
// 			<HomeScreen />
// 		);
// 	}
// }



//CODE FROM REACT NATIVE WITH TABS
  export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false);


  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
        {/* <FetchLocation onGetLocation={props.getUserLocationHandler} /> */}
      </View>
    );
  }


async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
