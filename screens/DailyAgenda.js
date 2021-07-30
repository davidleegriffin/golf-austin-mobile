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
    let calDates = {};
    
    const selectedDay = route.params.day.dateString;
    // console.log('selectedDay', selectedDay);

    
    for (let i=0; i<365; i++) {
        const tomorrow = new Date(selectedDay);
        tomorrow.setDate(tomorrow.getDate() + i);
        let month = '' + tomorrow.getMonth();
        let day = '' + tomorrow.getDate();
        let year = tomorrow.getFullYear();
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        let alteredDate = [year, month, day].join('-');
        // console.log('tomorrow', alteredDate);
        calDates[`${alteredDate}`] = [];
    }
    // console.log('calDates', calDates);

    const marker = route.params.marker;
    // console.log('marker', marker);

    const renderItem = (item) => {
        // console.log('item', item.name);
        return (
        <>
            <View>
            <Text>TEST</Text>
            <Text>item.name</Text>
            </View>
        </>
        );
    } 


  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>+</Text>
      </View>
    );
  }

    return (
    <View style={styles.container}>
        <Agenda
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        // onDayPress={(day) => {console.log('day pressed', day)}}
        items={
            calDates
            // '{`${selectedDay}`}': [{name: 'item 1 - any js object'}],
            // '2021-07-19': [{name: 'item 2 - any js object'}],
            // '2021-07-20': [],
            // '2021-07-21': [{name: 'item 3 - any js object'}]
        }
        renderItem={(item, firstItemInDay) => { return (renderItem(item, firstItemInDay))}}
        renderEmptyDate={() => {return (renderEmptyDate())}}
        selected={`${selectedDay}`}
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
        width: '100%',
        height: '100%',
        marginTop: 50,
        paddingTop: '20%',
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30,
    },
});

export default DailyAgenda;