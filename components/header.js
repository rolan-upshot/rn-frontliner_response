import { React, Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

const Header= (props) =>  {
    data = props.progress; 
    return (
            <View>
                <View>
                    <Progress.Bar progress={data} width={200} />
                </View>
                <Text style={{color: "white", fontWeight: "bold"}}>Corrective Feedback</Text>
                <Text style={{color: "white"}}>Monday, Sept 23, 2022 at 10:55am</Text>
            </View>
    );

};
export default Header;