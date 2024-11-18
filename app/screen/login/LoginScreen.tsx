import { Dimensions, Image, Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FormProvider, useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';


import FormInput from '../../components/input/FormInput';
import { CommonColors, Fonts, ShadowStyle } from '../../utils/CommonStyles';
import { moderateScale, scale, verticalScale } from '../../libs/reactSizeMatter/scalingUtils';
import Checkbox from '../../components/common/separator/Checkbox'
import CustomButton from '../../components/button/CustomButton';
import ConfirmResetPassword from '../../components/popup/ConfirmResetPassword';
import PasswordResetSuccessPopup from '../../components/popup/PasswordResetSuccessPopup';

//import SVG, Images
import SvgTop from '../../../assets/svg/login/svg-top.svg';
import SvgBottom from '../../../assets/svg/login/svg-bottom.svg';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../type/stack/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import Utils from '../../utils/Utils';

import { useDispatch, useSelector } from 'react-redux';
import LoginAction from '../../redux/login/action';
import AppConfig from '../../utils/AppConfig';
import Toast from 'react-native-toast-message';

const { height } = Dimensions.get('window');

type NavigationPop = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () =>{
    
    const navigation = useNavigation<NavigationPop>();
    
    const methods = useForm();
    const {
        control,
        handleSubmit,
        formState: {errors},
        watch
    } = methods;

    const dispatch = useDispatch();
    const watchedUsername = watch('username');
    const watchedPassword = watch('password');

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() =>{
        setUsername(watchedUsername);
        setPassword(watchedPassword);
    },[watchedUsername, watchedPassword]);
    
    const onSignInPressed = (data: any) => {
        let dataSubmit = {
            Username: username,
            Password: Utils.MD5(password),
            LatOfMap: Utils.getLocation()[0],
            LongOfMap: Utils.getLocation()[1],
            Browser: AppConfig.BROWER,
            PlayerId: AppConfig.PLAYER_ID,
            Serial: AppConfig.SERIAL_NUMBER,
            CaptchaToken: 'fvzzdv123cfrfrgsfwefhtyuyiuou',
        };
            try {
                dispatch({
                    type: LoginAction.SIGN_IN,
                    data: dataSubmit,
                    callback: (MsgNo: any) => {
                        console.log(MsgNo);
                        if (MsgNo.toString() == "200") {
                            navigation.navigate('Home');
                            Toast.show({
                                type: 'success', // kiểu thông báo, có thể là 'success', 'error', 'info'
                                position: 'top', // vị trí: 'top', 'bottom'
                                text1: 'Đăng nhập thành công!', // Tiêu đề
                                text2: 'Chúc một ngày tốt lành.', // Nội dung
                                visibilityTime: 3000,
                                topOffset: verticalScale(95),
                            });
                        }
                        else{
                            Toast.show({
                                type: 'error',
                                text1: 'Vui lòng thử lại!', // Tiêu đề
                                text2: 'Tên đăng nhập hoặc mật khẩu không chính xác.', // Nội dung
                                visibilityTime: 3000,
                                position: 'top',
                                topOffset: verticalScale(30),
                                autoHide: true,
                            });
                        }
                    },
                });
        } catch (e) {
        }
    }
    
    


    const [showConfirm, setShowConfirm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const _handleRequestChangePassword = () => {
        setShowSuccess(true);
        setShowConfirm(false);
    };

    return(
        <KeyboardAwareScrollView>


            <Modal
               animationIn={'zoomIn'}
               animationOut={'lightSpeedOut'}
               backdropTransitionOutTiming={0}
               // eslint-disable-next-line react-native/no-inline-styles
               style={{ margin: 0 }}
               hasBackdrop={true}
               backdropColor={'#303030'}
               backdropOpacity={0.4}
               isVisible={showConfirm}
           >
               <ConfirmResetPassword
                   onConfirm={() => _handleRequestChangePassword()}
                   onCancel={() => setShowConfirm(false)}
                   onCloseModal={() => setShowConfirm(false)}
               />
           </Modal>

            <Modal
               animationIn={'zoomIn'}
               animationOut={'lightSpeedOut'}
               backdropTransitionOutTiming={0}
               // eslint-disable-next-line react-native/no-inline-styles
               style={{ margin: 0 }}
               hasBackdrop={true}
               backdropColor={'#303030'}
               backdropOpacity={0.4}
               isVisible={showSuccess}
           >
               <PasswordResetSuccessPopup
                   onCloseModal={() => setShowSuccess(false)}
               />
           </Modal>


            <FormProvider {...methods}>
                <View style={styles.container}>
                    <View style={styles.svgTop}>
                        <SvgTop />
                    </View>
                    <Toast/>
                    <TouchableWithoutFeedback
                        onPress={() => Keyboard.dismiss()}
                    >
                        <View style={{ flex: 1 }}>
                            <View style={{ height: scale(200) }} />
                            <View style={styles.boxLogin}>
                                <View style={styles.body}>

                                    {/*Logo*/}
                                    <View style={styles.logoContainer}>
                                        <Image source={require('../../../assets/images/logo.png')}/>
                                        <View style={styles.line} />
                                    </View>

                                    {/*Form Input*/}
                                    <FormProvider {...methods}>
                                        <View style={styles.formInput}>
                                            <Text style={styles.textLabel}>Tên đăng nhập</Text>
                                            <FormInput
                                                fieldName="username"
                                                placeHolder="Nhập tài khoản"
                                                secureTextEntry={false}
                                                inputStyle={{
                                                    minHeight:
                                                        verticalScale(44),
                                                }}
                                                rules={{
                                                    required: "Bạn chưa điền vào ô này",
                                                    minLength: {
                                                        value: 8,
                                                        message: "Nhập đủ trên 8 kí tự"
                                                    }
                                                }}
                                                control={control}
                                            />
                                        </View>

                                        <View style={styles.formInput}>
                                            <Text style={styles.textLabel}>Mật khẩu</Text>
                                            <FormInput
                                                fieldName="password"
                                                placeHolder="Nhập mật khẩu"
                                                secureTextEntry={true}
                                                inputStyle={{
                                                    minHeight:
                                                        verticalScale(44),
                                                }}
                                                rules={{
                                                    required: "Bạn chưa điền vào ô này",
                                                    minLength: {
                                                        value: 8,
                                                        message: "Nhập đủ trên 8 kí tự"
                                                    }
                                                }}
                                                control={control}
                                            />
                                        </View>
                                    </FormProvider>

                                    {/*ForgetPassword, Save Pasword*/}
                                    <View style={styles.actionContainer}>
                                        <View style={styles.checkboxContainer}>
                                            <TouchableOpacity
                                                 onPress={()=> {setRememberMe(!rememberMe);}}
                                            >
                                                <Checkbox
                                                    active={rememberMe}
                                                    styleActive ={styles.styleCheckboxActive}
                                                    containerStyle={styles.checkbox}
                                                />
                                            </TouchableOpacity>
                                            <Text style={styles.textCheckbox}>Ghi nhớ đăng nhập</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => setShowConfirm(true)}>
                                            <Text style={styles.textForgotPassword}>Quên mật khẩu?</Text>
                                        </TouchableOpacity>
                                    </View>

                                    {/* button Login */}
                                    <View style={styles.button}>
                                        <CustomButton
                                            onPress={handleSubmit(onSignInPressed)}
                                            title="Login"
                                            titleStyle={{
                                                ...Fonts.defaultBold,
                                                color: CommonColors.textWhite,
                                            }}
                                            // eslint-disable-next-line react-native/no-inline-styles
                                            style={{
                                                backgroundColor: 'transparent',
                                                zIndex: 999,
                                            }}
                                        />
                                    </View>

                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.svgBottom}>
                        <SvgBottom />
                    </View>
                </View>
            </FormProvider>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: height,
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    svgTop: {
        width: scale(1223),
        height: scale(263.303),
        opacity: 0.9,
        position: 'absolute',
        top: '7%',
    },
    svgBottom: {
        width: scale(1223),
        height: scale(263.303),
        opacity: 0.9,
        position: 'absolute',
        backgroundColor: '#fff',
        bottom: '3%',
        zIndex: -1,
    },
    boxLogin: {
        width: '100%',
        height: scale(500),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: scale(200),
        height: scale(200),
    },
    formInput: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        marginTop: verticalScale(16),
        width: '85%',
    },
    textLabel: {
        ...Fonts.defaultBold,
        color: '#5B5B5B',
        textAlign: 'left',
        fontSize: moderateScale(16),
        fontStyle: 'normal',
        lineHeight: scale(24),
        marginBottom: verticalScale(8),
    },
    button: {
        backgroundColor: CommonColors.mainActive,
        marginTop: verticalScale(48),
        width: scale(311),
        alignSelf: 'center',
        ...ShadowStyle,
        borderRadius: scale(8),
        marginBottom: verticalScale(68),
    },
    body: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        borderBottomColor: CommonColors.borderTable,
        borderBottomWidth: 1,
        paddingBottom: verticalScale(16),
        position: 'relative',
        alignItems: 'center',
    },
    line : {
        height: scale(2),
        backgroundColor: CommonColors.textBlue,
        width: scale(52),
        position: 'absolute',
        bottom: -3,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    forgotPassword: {
        color: CommonColors.mainRed,
        ...Fonts.defaultMedium,
    },
    actionContainer : {
        marginTop: verticalScale(16),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal : scale(28),
    },
    checkboxContainer : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        borderRadius: scale(100),
        borderColor: CommonColors.borderColor,
        borderWidth: scale(1),
        marginRight: scale(10),
    },
    styleCheckboxActive : {
        backgroundColor: CommonColors.mainBlue,
        borderWidth: 0,
        borderColor: CommonColors.mainBlue,
        borderRadius: 100,
    },
    textCheckbox: {
        fontFamily: "Roboto-Bold",
        fontSize: moderateScale(14),
        fontWeight: '400',
        lineHeight: scale(16),
        textAlign: 'left',
        color: CommonColors.textBlack,
    },
    textForgotPassword: {
        fontSize: moderateScale(14),
        fontWeight: '400',
        lineHeight: scale(16),
        textAlign: 'left',
        color: CommonColors.textBlue,
    },
    errors: {
        marginTop: scale(5),
        textAlign: 'right',
        color: CommonColors.redColor,
        ...Fonts.defaultLight,
    },
});

export default LoginScreen;