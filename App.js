import { React, Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Header   from './components/header';

class MainApp extends Component {
  constructor(props){
	  super(props);
      var total_timer = 20; //seconds.
      var acc = 0;

  }
 // componentDidMount(){
    //   useEffect( ()=> 
    //   {
    //     	const interval = setInterval( () => {
    //       	++acc;
    //     	if (acc === total_timer){
    //         	clearInterval(interval);
    //         } // end if   
    //         else {
    //         	setData(acc/total_timer);
    //            // console.log(acc);
    //         } // end else
    //       }, 2000); // end const interval 

    //   });
//  }
  
  render(){
	  return(
    <View style={[styles.container, {flexDirection: "column", backgroundColor:"#7F88DB" }]}>
        <View style={{ flex: 1  }}>
		<Header> </Header>
        </View>
        <View style={{ flex: 5, backgroundColor: "darkorange" }} />
        <View style={{ flex: 2, backgroundColor: "green" }} />
    </View>
  );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
export default MainApp;