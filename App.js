import { React, Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Header   from './components/header';

const MainApp = () => {
	var acc = 0;
	var total_timer = 20;
	[data, setData] = useState(0);

useEffect( ()=>{
    const interval = setInterval( () => {
    	++acc;
    	if (acc === total_timer){
    	 	clearInterval(interval);
    	} // end if   
    	else {
		var	progress = acc/total_timer;
			setData(progress);
    		console.log(acc);
    		console.log(data);
    	} // end else
    }, 1000); // end const interval 
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