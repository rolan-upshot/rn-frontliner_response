import { React, Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

class Header extends Component  {
    constructor(props){
        super(props);
        progress = props.progress;
    }
    render(){
        return (
            <View>
                <View>
                    <Progress.Bar progress={0.3} width={200} />
                    <Text>Hello world!</Text>
                </View>
                <Text style={{color: "white", fontWeight: "bold"}}>Corrective Feedback</Text>
                <Text style={{color: "white"}}>Monday, Sept 23, 2022 at 10:55am</Text>
            </View>
    );}

};
export default Header;