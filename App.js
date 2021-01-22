import React, { Component } from 'react';
import firebase from "@react-native-firebase/app";
import database from "@react-native-firebase/database";
import { View, TouchableOpacity, Text } from "react-native";


export default class App extends Component{
  componentDidMount(){
    
    const firebaseConfig = {
      apiKey: "AIzaSyCKk7t-xkHnH7UdKO8mjNEFRbpcRnG_hdM",
      authDomain: "mytestproject-d4096.firebaseapp.com",
      databaseURL: "https://mytestproject-d4096-default-rtdb.firebaseio.com",
      projectId: "mytestproject-d4096",
      storageBucket: "mytestproject-d4096.appspot.com",
      messagingSenderId: "1064056513433",
      appId: "1:1064056513433:web:91bdee5322890148c72908",
      measurementId: "G-KP2JP5E0XT"
    };
    /*    database()
      .ref('/users/556')
      .once('value')
      .then(snapshot => {
        console.log('My read Name=', snapshot.val().name, 'myPassword=', snapshot.val().password);
      }); */


/*      this.onValueChange= database()
      .ref('/users/556')
      .on('value', snapshot => {
        console.log('My read Name=', snapshot.val().name, 'myPassword=', snapshot.val().password);
      }); */
 /*      database().ref('/users/556').update({password:'999'})
      .then(() => console.log('Data is updated'));      
 */
/*this.newReference = database()
.ref('/users')
.push();

console.log('Auto generated key: ', this.newReference.key);

this.newReference.set({name: 'Javid',
  password: '2222222',
})
.*/then(() => console.log('Data updated.'));  
}
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  database().ref('/MyBase').set(
  {Individuals: 'Elmar', Companies: 'BestOfTheBests'}
  )
    .then(() => console.log('Data is inserted'));
}

render() {
  return(
    <View>
      <TouchableOpacity>
        <Text>
          Simple text!
        </Text>
      </TouchableOpacity>
    </View>
  );
}
}
