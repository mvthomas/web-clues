import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import colors from '../services/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import VideoPlayer from './videoPlayer';
const height = Dimensions.get("window").height

export default function ListItem(props) {
    const {data, index} = props
    const [like, setLike] = useState(false);

    const likeClick=(index)=>{
        let newData
        newData=like?false:true
        setLike(newData)
    }

    return (
        <View style={styles.background}>
            <View style={styles.infoSection}>
                <View style={styles.details}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.subTitle}>{data.subtitle}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                </View>
                <View style={styles.actions}>
                    <View style={styles.actionIcons}>
                        <Text style={{color:colors.darkGrey}}>{data.isRate}/5</Text>
                    </View>
                    <View style={styles.actionIcons}>
                        <Icon name={"user"} size={24} color={colors.darkGrey} />
                    </View>
                    <View style={styles.actionTextView}>
                        <Text style={styles.actionText}>Thomas</Text>
                    </View>
                    <TouchableOpacity style={styles.actionIcons} onPress={()=>{likeClick(index)}}>
                        <Icon name={"heart"} size={24} color={like?colors.red:colors.darkGrey} />
                    </TouchableOpacity>
                    {
                        (like || data.liLiked>=1)&&
                        <View style={styles.actionTextView}>
                            <Text style={styles.actionText}>{like?(Number(data.liLiked)+1):data.liLiked}</Text>
                        </View>
                    }
                    <TouchableOpacity disabled style={styles.actionIcons}>
                        <Icon name={"comments"} size={24} color={colors.darkGrey} />
                    </TouchableOpacity>
                    <TouchableOpacity disabled style={styles.actionIcons}>
                        <Icon name={"flag"} size={24} color={colors.darkGrey} />
                    </TouchableOpacity>
                    <TouchableOpacity disabled style={styles.actionIcons}>
                        <Icon name={"share"} size={24} color={colors.darkGrey} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.videoPlayer}>
                <VideoPlayer uri={data.sources}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        display:'flex', 
        backgroundColor:'transparent', 
        flex:1, 
        width:'100%',
        height:height
    },
    infoSection: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-end',
    },
    details:{
        flex:0.75,
        marginVertical:40,
        marginHorizontal:40,
    },
    actions:{
        flex:0.25,
        marginVertical:40,
        marginLeft:30,
    },
    title:{
        fontSize:15,
        color:colors.white,
        fontWeight:"700"
    },
    subTitle:{
        fontSize:14,
        color:colors.yellow,
        fontWeight:"500",
        marginVertical:15
    },
    description:{
        fontSize:14,
        color:colors.grey,
        fontWeight:"500"
    },
    actionIcons:{
        width:45,
        height:45,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.white,
        borderRadius:90,
        marginTop:20
    },
    actionTextView:{
        width:45,
        justifyContent:'center',
        alignItems:'center',
        color:colors.white,
        marginTop:5,
    },
    actionText:{
        color:colors.white,
        fontSize:13,
        fontWeight:"600",
        width:55,
        textAlign:'center'
    },
    videoPlayer:{
        display:'flex',
        flex:1,
        position:'absolute',
        width:'100%',
        height:'100%',
        height:height,
        top:0,
        left:0,
        zIndex:-1,
    }
})