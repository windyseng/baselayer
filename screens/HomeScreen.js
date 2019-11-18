import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { MonoText } from '../components/StyledText';
// import FetchLocation from '../components/FetchLocation';
import {
  Alert,
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Baselayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
         <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <Text style={styles.baselayerText}>BASELAYER</Text>
          <Text style={styles.sloganText}>Getting out of bed is hard enough.</Text>
          <Text style={styles.sloganText}>We're here to help.</Text>
      <View style={styles.welcomeContainer}>
      <Image source={require('../assets/images/baselayer_1.png')} style={styles.welcomeImage}/>
      </View>

      <View style={styles.LoginButton}>
      <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
      <Button
          title="LOG IN" color='white'
          // onPress={() => Alert.alert('Logging In')}
          onPress={this.onLogin.bind(this)}
          />

      </View>

      <View>
        <Text style={styles.signUpText}>Not registered?  Sign up below.</Text>
      </View>
      <View style={styles.signUpButton}>
      <Button
          title="SIGN UP" color='white'
          onPress={() => Alert.alert('Signing up')}
        />
    </View>
      </ScrollView>
      </View>

    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgb(48,48,48)',
  },
  card:{
    backgroundColor:'rgba(56, 172, 236, 1)',
    borderWidth:0,
    borderRadius:20
  },
  baselayerText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 0.15,
    textAlign: 'center',
    fontFamily:'Helvetica Neue',
    color: '#fff'
  },
  sloganText: {
    fontStyle: 'italic',
    fontSize: 17,
    fontFamily:'Helvetica Neue',
    color: '#A9A9A9',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: .38,
  },
  welcomeImage: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
    // marginTop: 0,
    // marginBottom: 1
  },
  LoginButton:{
    padding: 1,
    color: 'rgb(255,255,255)',
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily:'Helvetica Neue',
    letterSpacing: 0.25,
    backgroundColor: '#A9A9A9',
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#rgb(48,48,48)',
    marginTop: 1,
    marginBottom: 0,
  },
  input:{
    padding: 1,
    color: '#A9A9A9',
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily:'Helvetica Neue',
    letterSpacing: 0.25,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#rgb(48,48,48)',
    marginTop: 1,
    marginBottom: 0,
  },
  signUpText: {
    fontStyle: 'italic',
    fontSize: 15,
    fontFamily:'Helvetica Neue',
    color: '#A9A9A9',
    lineHeight: 24,
    textAlign: 'center',
    // marginTop: 1,
  },
  signUpButton:{
    padding: 1,
    color: 'rgb(255,255,255)',
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily:'Helvetica Neue',
    letterSpacing: 0.25,
    backgroundColor: '#A9A9A9',
    borderWidth: 3,
    borderRadius: 2,
    borderColor: '#rgb(48,48,48)',
    marginTop: 1,
    marginBottom: 1
  },
  getLocationBtn:{
    padding: 10,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily:'Helvetica Neue',
    letterSpacing: 0.25,
    backgroundColor: '#A9A9A9',
    borderWidth: 2,
    borderRadius: 2,
    marginBottom: 1
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={styles.contentContainer}>
//         <View style={styles.welcomeContainer}>
//           <Image
//             source={
//               __DEV__
//                 ? require('../assets/images/robot-dev.png')
//                 : require('../assets/images/robot-prod.png')
//             }
//             style={styles.welcomeImage}
//           />
//         </View>

//         <View style={styles.getStartedContainer}>
//           <DevelopmentModeNotice />

//           <Text style={styles.getStartedText}>Get started by opening</Text>

//           <View
//             style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
//             <MonoText>screens/HomeScreen.js</MonoText>
//           </View>

//           <View>
//             <Image source={baselayerPic} style={{width: 110, height: 180}}/>
//           </View>

//           <Text style={styles.getStartedText}>
//             Baselayer: It's cold outside.  Getting out of bed is hard enough.  We're here to help.
//           </Text>
//         </View>

//         <View style={styles.helpContainer}>
//           <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
//             <Text style={styles.helpLinkText}>
//               Help, it didn’t automatically reload!
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>

//       <View style={styles.getLocationBtn}>
//           <FetchLocation onGetLocation={this.getUserLocationHandler} />
//        </View>

//       <View style={styles.tabBarInfoContainer}>
//         <Text style={styles.tabBarInfoText}>
//           This is a tab bar. You can edit it in:
//         </Text>

//         <View
//           style={[styles.codeHighlightContainer, styles.navigationFilename]}>
//           <MonoText style={styles.codeHighlightText}>
//             navigation/MainTabNavigator.js
//           </MonoText>
//         </View>
//       </View>
//     </View>
//   );
// }

// HomeScreen.navigationOptions = {
//   header: null,
// };

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use
//         useful development tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }

// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/development-mode/'
//   );
// }

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
//   );
// }
