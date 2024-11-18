import React from 'react';
import { StyleSheet , TouchableOpacity,  } from 'react-native';
import Text from '../text/Text';
import {
    moderateScale,
    scale,
    verticalScale,
} from '../../libs/reactSizeMatter/scalingUtils';
import { CommonColors, Fonts } from '../../utils/CommonStyles';
import {CANCEL,FONT_NORMAL,PRIMARY,SECONDARY,DANGER,} from '../../utils/Consts';
import PropTypes from 'prop-types';

function CustomButton(props: any) {
    const { title, style, disabled, type, titleStyle } = props;

    const onPress = () => {
        if (typeof props.onPress === 'function') {
            console.log('1');
            props?.onPress();
        }
    };
    const getColor = () => {
        switch (type) {
            case PRIMARY:
                return CommonColors.buttonActive;
            case SECONDARY:
                return CommonColors.secondaryColor;
            case CANCEL:
                return CommonColors.cancelBtnColor;
            case DANGER:
                return CommonColors.alertColor;
        }
    };
    const getColorText = () => {
        switch (type) {
            case PRIMARY:
                return CommonColors.white;
            case SECONDARY:
                return CommonColors.secondaryColor;
            case CANCEL:
                return CommonColors.mainBlue;
            case DANGER:
                return CommonColors.alertColor;
        }
    };

    return (
        <TouchableOpacity
            disabled={false}
            onPress={onPress}
            style={[
                styles.button,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                    backgroundColor: getColor(),
                    borderColor: getColorText(),
                    borderWidth: 1,
                },
                disabled && styles.disabled,
                style ?? null,
            ]}
        >
            <Text
                style={[
                    styles.buttonText,
                    disabled && styles.textDisabled,
                    {
                        color: getColorText(),
                    },
                    titleStyle,
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        fontSize: FONT_NORMAL,
        borderRadius: scale(8),
        height: verticalScale(40),
        paddingHorizontal: scale(10),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    buttonText: {
        color: '#fff',
        fontSize: moderateScale(16),
        ...Fonts.defaultRegular,
    },
    disabled: {
        backgroundColor: CommonColors.disableButton,
    },
    textDisabled: {
        color: '#fff',
    },
});
CustomButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.object,
    titleStyle: PropTypes.object,
};
CustomButton.defaultProps = {
    title: 'Button',
    disable: false,
    type: PRIMARY,
};
export default CustomButton;
