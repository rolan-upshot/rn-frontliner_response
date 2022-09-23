import { React, Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Header   from './components/header';

const MainApp = () => {
	var cntr = 0;
	[data, setData] = useState(0);
	var timer_interval_ms = 250;
	time_limit = 20;
	var total_beats = time_limit * 1000/timer_interval_ms;

useEffect( ()=>{
    const interval = setInterval( () => {
    	++cntr;
    	if (cntr > total_beats){
    	 	clearInterval(interval);
    	} // end if   
    	else {
		var	progress = cntr/total_beats;
			setData(progress);
    		console.log(cntr);
    		console.log(progress);
    	} // end else
    }, timer_interval_ms); // end const interval 
}, []);
  
	return(
    <View style={[styles.container, {flexDirection: "column", backgroundColor:"#7F88DB" }]}>
        <View style={{ flex: 1  }}>
		<Header progress={data}> </Header>
        </View>
        <View style={{ flex: 5, backgroundColor: "darkorange" }} />
        <View style={{ flex: 2, backgroundColor: "green" }} />
    </View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
export default MainApp;