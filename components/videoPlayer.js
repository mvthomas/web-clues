import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Video from 'react-native-video';
import colors from '../services/colors';

export default function VideoPlayer(props) {
    return (
        <View style={styles.container}> 
            <Video source={{uri: props.uri, type: "mp4" }}   
                ref={(ref) => {
                    this.player = ref
                }}        
                volume={1.0}
                resizeMode={"cover"}
                muted={true}
                paused={false}
                repeat={true}
                playInBackground={false}
                playWhenInactive={false}                  
                onBuffer={this.onBuffer}                
                onError={this.videoError}               
                style={[styles.container,styles.backgroundVideo]} />
        </View>
        
    )
}

var styles = StyleSheet.create({
    container:{
        display:"flex",
        flex:1,
    },
    backgroundVideo: {
        backgroundColor:colors.black
    },
  });