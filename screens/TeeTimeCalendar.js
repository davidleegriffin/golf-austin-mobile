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

function TeeTimeCalendar({route, navigation}) {
    // console.log('route', route.params.marker);
    const marker = route.params.marker;

    function getAgenda({day, marker}) {
        // console.log(day.dateString);
        navigation.navigate("DailyAgenda", {day, marker});
    }

// const today = new Date();
// console.log('today', today);
// const tomorrow = new Date();
// tomorrow.setDate(tomorrow.getDate() + 1);
// console.log('tomorrow', tomorrow);

    return (
        <>
            <View style={styles.container}>
                {/* <Text>CALENDAR</Text> */}
                <CalendarList
                style={{
                    paddingTop: 100,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                }}
                markingType={'custom'}
                markedDates={{ 
                    '2021-07-16': {
                        customStyles: { 
                            container: {
                                backgroundColor: 'rgba(55,205,55,0.65)',
                                borderWidth: 1,
                            },
                        text: {
                            color: 'black',
                            fontWeight: 'bold'
                            }
                        }
                    },
                    '2021-07-12': {
                        customStyles: { 
                            container: {
                                backgroundColor: 'lightyellow',
                                borderWidth: 1,
                            },
                        text: {
                            color: 'black',
                            fontWeight: 'bold'
                            }
                        }
                    },
                }}
                showWeekNumbers={true}
                  // Enable horizontal scrolling, default = false
                horizontal={true}
                  // Enable paging on horizontal, default = false
                pagingEnabled={true}
                  // Set custom calendarWidth.
                calendarWidth={409}
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={1}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={12}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}
                //   ...calendarParams
                minDate={new Date()}
                onDayPress={(day) => {getAgenda({day, marker})}}
                />
               
            </View>
        </>
    )
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        height: 100,
    },
});
export default TeeTimeCalendar;