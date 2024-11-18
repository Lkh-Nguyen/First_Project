import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import IconClock from '../svg/request/ic_clock.svg';
import ICLOGO from '../svg2/outfiz/logo.svg';

export default function IcLogo(props) {
    const { width = 100.001, height = 38.922 } = props;
    return (
        <View >
            <ICLOGO width={width} height={height} />
        </View>
    );
}

const styles = StyleSheet.create({});
