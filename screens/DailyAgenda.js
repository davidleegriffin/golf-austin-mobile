import React, { useState, useEffect } from "react";
import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    ImageBackground, 
    Image, 
    Text, 
    Dimensions,
    Linking,
    ScrollView,
    StatusBar 
    } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

function DailyAgenda({route, navigation}) {
    console.log('route', route);

    const renderItem = (item) => {
        // console.log('rendering', item)
        return (
        <>
            <View>
            <Text>TEST</Text>
            <Text>item.name</Text>
            </View>
        </>
        );
    } 

    return (
    <View style={styles.container}>
        <Agenda
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        onDayPress={(day) => {console.log('day pressed', day)}}
        items={{
            '2021-07-11': [{name: 'item 1 - any js object'}],
            '2021-07-13': [{name: 'item 2 - any js object'}],
            '2021-07-14': [],
            '2021-07-15': [{name: 'item 3 - any js object'}]
        }}
        renderItem={(item, firstItemInDay) => { return (renderItem(item, firstItemInDay))}}
        theme={{
            // ...calendarTheme,
            agendaDayTextColor: 'black',
            agendaDayNumColor: 'green',
            agendaTodayColor: 'red',
            agendaKnobColor: 'blue'
        }}
        // Agenda container style
        style={{}}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default DailyAgenda;