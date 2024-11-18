import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import {
    moderateScale,
    scale,
    verticalScale,
} from '../../libs/reactSizeMatter/scalingUtils';
import Text from "../text/Text"
import ButtonClosePopup from '../common/ButtonClosePopup';
import { CommonColors } from '../../utils/CommonStyles';

import ConfirmIcon from '../../../assets/svg/popup/ic_confirm.svg';

type PasswordResetSuccessPopupProps = {
    onCloseModal: () => void
}
const PasswordResetSuccessPopup = (props: PasswordResetSuccessPopupProps) => {
    const { onCloseModal } = props;
    return (
        <View style={[styles.container]}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <View style={styles.icon}>
                    <ConfirmIcon />
                </View>
                <Text style={styles.text1}>Xác nhận cấp lại mật khẩu thành công</Text>
            </View>
            <ButtonClosePopup showVisible={() => onCloseModal()} />
            <Text style={styles.text2}>Hãy kiểm tra trong thư của bạn để nhận được mật khẩu mới.</Text>
        </View>
    );
};
PasswordResetSuccessPopup.defaultProps = {
    showVisible: () => {},
};

PasswordResetSuccessPopup.propTypes = {
    showVisible: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: scale(8),
        padding: scale(16),
        width: scale(353),
    },
    icon: {
        width: scale(24),
        height: scale(24),
        backgroundColor: CommonColors.successColor,
        borderRadius: scale(12),
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        fontSize: moderateScale(15),
        fontFamily: 'Inter-Regular',
        color: CommonColors.textBlack,
        fontWeight: '500',
        lineHeight: scale(24),
        marginLeft: scale(8),
    },
    text2: {
        fontSize: moderateScale(14),
        fontFamily: 'Inter-Regular',
        color: CommonColors.textBlack,
        fontWeight: '400',
        lineHeight: scale(16),
        marginTop: verticalScale(20),
    },
});

export default PasswordResetSuccessPopup;
