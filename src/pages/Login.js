import React, { Component } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';
 
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
  render() {
    return (
        <ScrollView style={styles.scroll}>
            <Container>
                <Button 
                    label="Forgot Login/Pass"
                    styles={{button: styles.alignRight, label: styles.label}} 
                    onPress={this.press.bind(this)} />
            </Container>
            <Container>
                <Label text="Username or Email" />
                <TextInput
                    style={styles.textInput}
                />
            </Container>
            <Container>
                <Label text="Password" />
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                />
            </Container>
            <Container>
                <Button 
                    styles={{button: styles.transparentButton}}
                    onPress={this.press.bind(this)}
                >
                    <View style={styles.inline}>
                        <Icon name="facebook-official" size={30} color="#3B5699" />
                        <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text> 
                        <Text style={styles.buttonBlueText}>with Facebook</Text>
                    </View>
                </Button>
            </Container>
            <View style={styles.footer}>
                <Container>
                    <Button 
                        label="Sign In"
                        styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
                        onPress={this.press.bind(this)} />
                </Container>
                <Container>
                    <Button 
                        label="CANCEL"
                        styles={{label: styles.buttonBlackText}} 
                        onPress={this.press.bind(this)} />
                </Container>
            </View>

        </ScrollView>
    );
  }
  press() {
  //execute any code here
    console.log('button pressed')
  }
  
}
const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#E1D7D8',
        padding: 30,
        flexDirection: 'column'
    },
    label: {
    color: '#0d8898',
    fontSize: 18
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 40,
        fontSize: 18,
        backgroundColor: '#FFF'
    },
    transparentButton: {
        marginTop: 30,
        borderColor: '#3B5699',
        borderWidth: 2
    },
    buttonBlueText: {
        fontSize: 18,
        color: '#3B5699'
    },
    buttonBigText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    },
    buttonWhiteText: {
        fontSize: 18,
        color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 18,
        color: '#595856'
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
    footer: {
        marginTop: 50
    }


});
