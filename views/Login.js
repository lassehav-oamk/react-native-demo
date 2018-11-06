import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, ScrollView, KeyboardAvoidingView  } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (  
        <View style={styles.container}>            
          <Image source={require("../assets/logo.png")} style={{ resizeMode: 'contain', height: 100, marginTop: 35 }}/>            
          <View style={styles.loginInput}>
            <Text>Username</Text>
            <TextInput style={{paddingBottom: 5 }} textContentType={"username"}/>
            <Text style={{ marginTop: 10}}>Password</Text>
            <TextInput style={{marginBottom: 15, paddingBottom: 5}} textContentType={"password"}/>
            <Button title="OK" onPress={(test) => {console.log("button clicked " + test)}}>Sign in</Button>
          </View>
                                      
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',    
    
  },
  loginInput: {    
    justifyContent: 'center',
    flexDirection: 'column',    
    paddingTop: 15,
    paddingBottom: 20,
    width: 300
  }
  
});
