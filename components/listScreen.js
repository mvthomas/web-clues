import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, FlatList } from 'react-native'
import ListItem from './listItem';
const height = Dimensions.get("window").height

export default function ListScreen() {

    const [data, setData] = useState([
            {
                "description": "Big Buck Bunny tells the story of a giant rabbit",
                "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "subtitle": "By Blender Foundation",
                "title": "Big Buck Bunny",
                "isRate": "4",
                "liLiked": "2",
                "id":1
            },
            {
                "description": "The first Blender Open Movie from 2006",
                "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                "subtitle": "By Blender Foundation",
                "title": "Elephant Dream",
                "isRate": "3.5",
                "liLiked": "1",
                "id":2
            },
            {
                "description": "The first Blender Open Movie from 2006",
                "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
                "subtitle": "By Google",
                "title": "For Bigger Joyrides",
                "isRate": "2",
                "liLiked": "1",
                "id":3
            },
            {
                "description": "Introducing Chromecast",
                "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
                "subtitle": "By Google",
                "title": "For Bigger Meltdowns",
                "isRate": "1",
                "liLiked": "0",
                "id":4
            },
            {
                "description": "The Smoking Tire meets",
                "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
                "subtitle": "By Google",
                "title": "What care can you get for a grand?",
                "isRate": "0",
                "liLiked": "1",
                "id":5
            }]);

    const likeClick=(index)=>{
        let newData = { ...data };
        newData[index].liLiked=newData[index].isLiked?Number(newData[index].liLiked)-1:Number(newData[index].liLiked)+1
        newData[index].isLiked=newData[index].isLiked?false:true
        setData(newData)
    }

    const renderList=(item)=>{
        return (
            <ListItem likeClick={(index)=>likeClick(index)} index={item.index} data={item.item}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                style={styles.container}
                renderItem={item=>renderList(item)}
                keyExtractor={item => item.id.toString()}
                snapToInterval={height}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                pagingEnabled
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        backgroundColor:'transparent', 
        flex: 1,
        width:'100%',
        height:height
    }
});

