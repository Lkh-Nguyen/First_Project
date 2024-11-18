import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Text from '../text/Text';
import { moderateScale, scale } from '../../libs/reactSizeMatter/scalingUtils';
import { CommonColors, Fonts } from '../../utils/CommonStyles';
import PropTypes from 'prop-types';
const CancelButtonPopup = (props: any) => {
    const { onPress, style, label = "Hủy bỏ", styleLabel } = props;
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={[styles.submitBtn, style]}
        >
            <Text style={[styles.btnLabel, styleLabel]}>{label}</Text>
        </TouchableOpacity>
    );
};

CancelButtonPopup.propTypes = {
    onPress: PropTypes.func,
    style: PropTypes.object,
    label: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    submitBtn: {
        backgroundColor: CommonColors.labelButtonCancelColor,
        width: scale(116),
        height: scale(32),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(4),
        borderColor: '#FF3434',
        borderWidth: 1,
    },
    btnLabel: {
        ...Fonts.defaultMedium,
        fontSize: moderateScale(14),
        color: '#fff',
    },
});

export default CancelButtonPopup;
