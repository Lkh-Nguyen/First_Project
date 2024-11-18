import React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale, scale,verticalScale } from '../../libs/reactSizeMatter/scalingUtils';
import { CommonColors } from '../../utils/CommonStyles';
import Text from '../text/Text';
import CancelButton from '../button/CancelButtonPopup';
import ConfirmButton from '../button/ConfirmButtonPopup';

import ButtonClosePopup from '../common/ButtonClosePopup';
import { ButtonPopupStyle, TextButtonPopup, Fonts } from '../../utils/CommonStyles';

//import SVG
import InfoIcon from '../../../assets/svg/popup/ic_infor.svg';
const ConfirmResetPassword = (props: any) => {
    const {
        onCloseModal,
        onConfirm,
        onCancel,
    } = props;
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <InfoIcon/>
                <Text style={styles.title}>Yêu cầu cấp lại mật khẩu</Text>
            </View>
            <ButtonClosePopup showVisible={() => onCloseModal()} />
            <Text style={styles.text}>Bạn có chắc chắn muốn yêu cầu cấp lại mật khẩu không?</Text>
            <Text style={styles.text}>Nếu bạn đồng ý chúng tôi sẽ cấp mật khẩu mới và gửi qua email của bạn</Text>
            <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginTop: verticalScale(12),
                }}
            >
                <CancelButton style={styles.cancelButton} onPress={() => onCancel()} label="Hủy bỏ" styleLabel={styles.textCancelButton} />
                <ConfirmButton
                    style={styles.confirmButton}
                    onPress={() => onConfirm()}
                    label="Đồng ý"
                    styleLabel={styles.textConfirmButton}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    head: {
        alignItems: 'center',
        marginBottom: scale(20),
        flexDirection: 'row',
    },
    container: {
        width: scale(353),
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderRadius: scale(8),
        padding: scale(16),
    },
    title: {
        fontSize: moderateScale(16),
        ...Fonts.defaultInter,
        color: CommonColors.textBlack,
        fontWeight: '500',
        lineHeight: scale(24),
        marginLeft: scale(8),
    },
    text: {
        fontSize: moderateScale(12),
        ...Fonts.defaultInter,
        color: CommonColors.textBlack,
        marginBottom: scale(8),
        alignItems: 'center',
        textAlign: 'left',
    },
    cancelButton : {
        ...ButtonPopupStyle,
        backgroundColor: '#ffffff',
        borderColor: CommonColors.textGray,
    },
    confirmButton : {
        ...ButtonPopupStyle,
        backgroundColor: '#186ADE',
    },
    textCancelButton : {
        ...TextButtonPopup,
        color: CommonColors.textGray,
    },
    textConfirmButton : {
        ...TextButtonPopup,
        color: CommonColors.white,
    },
});

export default ConfirmResetPassword;
