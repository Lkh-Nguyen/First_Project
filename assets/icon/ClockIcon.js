import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import IconClock from '../svg/request/ic_clock.svg';

export default function ClockIcon(props) {
    const { color = '#707070', width, height } = props;
    return (
        <View>
            <IconClock width={width} height={height} color={color} />
        </View>
    );
}

const styles = StyleSheet.create({});
