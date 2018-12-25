import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { 
    Router,
    Stack,
    Scene,
    Actions
} from 'react-native-router-flux';
import Welcome from './containers/Welcome';
import Login from './containers/Login';
import Register from './containers/Register';
import Main from './containers/Main';

export default class Routes extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <Router>
                <Stack key="root">
                    <Scene key="welcome" component={Welcome} title="welcome" hideNavBar={true} initial={true}/>
                    <Scene key="login" component={Login} title="Login" hideNavBar={true}/>
                    <Scene key="register" component={Register} title="Register" hideNavBar={true}/>
                    <Scene key="main" component={Main} title="Main" hideNavBar={true}/>
                </Stack>
            </Router>
        )
    }
}