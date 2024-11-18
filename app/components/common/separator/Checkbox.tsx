import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import PropTypes from 'prop-types';
import { scale } from '../../../libs/reactSizeMatter/scalingUtils';
import { CommonColors } from '../../../utils/CommonStyles';

//import SVG
import CheckIcon from '../../../../assets/svg/ic_check_noti.svg';


type CheckboxProps = {
    color?: string;
    active?: boolean;
    containerStyle?: ViewStyle;
    marginRight?: number;
    styleActive?: ViewStyle;
};


const Checkbox = (props: CheckboxProps) => {
    const {
        active = false,
        containerStyle,
        marginRight = scale(10),
        styleActive,
    } = props;
    return (
        <View
            style={[
                active
                    ? [styles.containerActive, styleActive]
                    : styles.container,
                containerStyle,
                {
                    marginRight: marginRight,
                },
            ]}
        >
            {active && <CheckIcon width={scale(12)} color={'#fff'} />}
        </View>
    );
};

Checkbox.propTypes = {
    color: PropTypes.any,
    active: PropTypes.bool,
    containerStyle: PropTypes.object,
};

const styles = StyleSheet.create({
    container: {
        width: scale(20),
        height: scale(20),
        // borderRadius: scale(7.5),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    containerActive: {
        width: scale(20),
        height: scale(20),
        // borderRadius: scale(7.5),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: CommonColors.redColor,
    },
    inner: {
        width: scale(13),
        height: scale(13),
        borderRadius: scale(5.5),
    },
});

export default Checkbox;
