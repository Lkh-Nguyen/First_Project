import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

import { scale } from '../../libs/reactSizeMatter/scalingUtils';

//import SVG
import CloseIcon from '../../../assets/svg/ic_close.svg';

function ButtonClosePopup(props: any) {
    const { showVisible = () => {}, style } = props;
    return (
        <TouchableWithoutFeedback onPress={() => showVisible(false)}>
            <View style={[styles.btnClose, style]}>
                <CloseIcon width={8} height={8} color="grey" />
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    btnClose: {
        width: scale(20),
        height: scale(20),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(10),
        backgroundColor: 'rgba(220,220,220,0.6)',
        position: 'absolute',
        right: scale(10),
        top: scale(10),
    },
});
export default ButtonClosePopup;
