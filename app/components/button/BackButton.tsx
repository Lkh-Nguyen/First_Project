import React, { useCallback } from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native';
import IconBack from '../../../assets/svg/header/ic_back.svg';
import Text from '../text/Text';
import {
    moderateScale,
    scale,
    verticalScale,
} from '../../libs/reactSizeMatter/scalingUtils';
import { CommonColors, Fonts } from '../../utils/CommonStyles';


export default function BackButton(props: any) {
    const { isShowBackLabel = true, handleBack, color = CommonColors.black, label } = props;

    const handlePress = () => {
    };

    return (
        <TouchableOpacity
            hitSlop={{ top: 20, right: 20, left: 20, bottom: 20 }}
            onPress={handlePress}
        >
            <View style={[{ flexDirection: 'row' }, props.style]}>
                {
                    <IconBack
                        color={color || CommonColors.white}
                        width={scale(10)}
                        height={scale(20)}
                    />
                }
                {isShowBackLabel && label && (
                    <Text
                        style={{
                            marginLeft: scale(8),
                            fontSize: moderateScale(16),
                            color: CommonColors.headerTextColor,
                            ...Fonts.defaultMedium,
                        }}
                    >
                        {label || 'Back'}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );
}
