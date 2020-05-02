import React, { Component } from 'react';
import { View, Text } from 'react-native'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    // componentDidMount() {

    // }

    // shouldComponentUpdate(nextProps, nextSate) {

    // }

    // componentWillUnmount() {

    // }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Login Screen</Text>
            </View>
        )
    }

}