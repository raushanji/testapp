import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    // shouldComponentUpdate(nextProps, nextSate) {

    // }

    // componentWillUnmount() {

    // }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
                <Text>Home screen</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('login')}} style={{paddingHorizontal: 20, paddingVertical: 8, borderColor: 'green', borderWidth: 1, backgroundColor: 'green', borderRadius: 8}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }

}