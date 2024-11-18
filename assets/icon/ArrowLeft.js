import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LeftIcon from '../svg/arow/ic_arrow_left.svg';

export default function ArrowLeftIcon(props) {
    const { color = '#707070', width, height } = props;
    return (
        <View>
            <LeftIcon width={width} height={height} color={color} />
        </View>
    );
}

const styles = StyleSheet.create({});
