/* Added By Adithya */


import React from "react";
import {ScrollView, Image,View } from "react-native";


import {
    Layout,
    TopNav,
    Button,
    Text,
    themeColor,
    useTheme,
} from "react-native-rapi-ui";

import { Ionicons } from "@expo/vector-icons";


export default function ({ navigation }) {
    const { isDarkmode } = useTheme();
    return (
        <Layout>
            <TopNav
                middleContent="Crop Information"
                leftContent={
                    <Ionicons
                        name="chevron-back"
                        size={20}
                        color={isDarkmode ? themeColor.white100 : themeColor.black}
                    />
                }
                leftAction={() => navigation.goBack()}
            />
            <ScrollView>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
            
            <Image source={{uri:'https://www.google.com/maps/d/thumbnail?mid=1lr9EyoJhSVRYP_A7j34lNyC8Nkg'}}  style={{width: '100%', height: 300}} />

                <Text
                    size='lg'
                    fontWeight="bold"
                    style={{
                        marginLeft: 5,
                        padding:10
                    }}
                >
                    Weather Information
                </Text>
                
                
                
                <View style={{ flexDirection: "column",paddingVertical:20}}>

                <View style={{ flexDirection: "row",paddingVertical:10}}>
                <Text style={{paddingHorizontal:10,paddingVertical:10}}>Temperature:30C</Text>
                <Text style={{paddingHorizontal:10,paddingVertical:10}}>Humidity:80%</Text>
                </View>

                <View style={{ flexDirection: "row",paddingVertical:10}}>
                <Text style={{paddingHorizontal:10,paddingVertical:10}}>Precipitation: 65%</Text>
                <Text style={{paddingHorizontal:30,paddingVertical:10}}>Rainfall: 89%</Text>
                </View>
                
                </View>
                
                

                <View style={{ padding: 10}}>
                <Button
                    style={{ marginTop: 10}}
                    text="Click Here To do crop Prediction"
                    status="info"
                    onPress={() =>{}}
                />
                </View>
                {/* This text using ubuntu font */}



            
            </View>
            </ScrollView>
            
        </Layout>
    );
}
