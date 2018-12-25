import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {
    Card,
    Button,
} from 'native-base';
var {width, height} = Dimensions.get('window')

export default class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <View style={{
                width: width,
                height: height,
                flex : 1,
                flexDirection : 'column',
                alignItems : 'center',
                justifyContent : 'center',
                backgroundColor : 'white'
            }}>
                <Text style={{fontSize : 25, color : 'black'}}>
                    Login Screen
                </Text>
            </View>
        )
    }
}