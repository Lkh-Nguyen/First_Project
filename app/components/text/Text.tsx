import React, { Component } from 'react';
import { Text, TextProps, StyleSheet, TextStyle } from 'react-native';
import { CommonColors, Fonts } from '../../utils/CommonStyles';
import { FONT_NORMAL } from '../../utils/Consts';

const EMPTY = '';

interface AppTextProps extends TextProps {
    style?: TextStyle | TextStyle[];
    onPress?: () => void;
    children?: React.ReactNode;
}

class AppText extends Component<AppTextProps> {
    render() {
        const { style, onPress, children } = this.props;
        const themeTextColor = CommonColors.mainText;

        return (
            <Text
                {...this.props}
                allowFontScaling={false}
                ellipsizeMode="tail"
                onPress={onPress}
                style={[styles.text, { color: themeTextColor }, style]}
            >
                {children !== null && children !== undefined ? children : EMPTY}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: FONT_NORMAL,
        ...Fonts.defaultRegular,
        color: CommonColors.mainBlack,
    },
});

export default AppText;
