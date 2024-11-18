import React from 'react';
import {StyleSheet, TouchableOpacity } from 'react-native';
import Text from '../text/Text';
import { moderateScale, scale } from '../../libs/reactSizeMatter/scalingUtils';
import { CommonColors, Fonts } from '../../utils/CommonStyles';
import PropTypes from 'prop-types';
const ConfirmButtonPopup = (props: any) => {
    const {
        onPress,
        style,
        styleLabel,
        label = 'Đồng ý',
        disabled = false,
    } = props;
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={[styles.submitBtn, style, { opacity: disabled ? 0.5 : 1 }]}
            disabled={disabled}
        >
            <Text style={[styles.btnLabel, styleLabel]}>{label}</Text>
        </TouchableOpacity>
    );
};

ConfirmButtonPopup.propTypes = {
    onPress: PropTypes.func,
    style: PropTypes.object,
    label: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    submitBtn: {
        width: scale(116),
        height: scale(32),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: CommonColors.mainGreen,
        borderRadius: scale(6),
        // marginRight: scale(20),
        borderWidth: scale(1),
        borderColor: CommonColors.mainGreen,
    },
    btnLabel: {
        ...Fonts.defaultMedium,
        fontSize: moderateScale(14),
        color: '#fff',
    },
});

export default ConfirmButtonPopup;
