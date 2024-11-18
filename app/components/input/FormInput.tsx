import React, { useEffect, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { scale, verticalScale } from '../../libs/reactSizeMatter/scalingUtils'
import { CommonColors, Fonts } from '../../utils/CommonStyles'
import { BORDER_RADIUS_FORM, FONT_NORMAL, PADDING_HORIZONTAL } from '../../utils/Consts'

import { TextButtonPopup } from '../../utils/CommonStyles'
import { genValidate } from '../../utils/Validator'
import Ionicons from 'react-native-vector-icons/Ionicons';

//import SVG
// import Eye from '../../../assets/svg/login/eye-fill.svg'
// import EyeSlash from '../../../assets/svg/login/eye-slash-fill.svg'

const HEIGHT = verticalScale(38)

export default function FormInput(props: any) {

    const {
        control,
        placeHolder,
        fieldName,
        icon,
        format = 'text',
        secureTextEntry,
        rules = [],
        positionError = 'left',
        multiline = false,
        edittable,
        keyboardType = 'default',
        onChangeText = () => {},
        minHeight = HEIGHT,
        inputStyle,
        wrapIconStyle,
        wrapInputStyle,
        defaultValue
    } = props
    const [secureText, setSecureText] = useState(secureTextEntry)

    const onShowSecure = () => {
        setSecureText(!secureText)
    }

    
    return (
        <Controller
            control={control}
            rules={rules}
            render={({ field: { onChange, onBlur, value, name }, fieldState: {error} }) => {
                return (
                    <View>
                        <View
                            style={[
                                styles.wrapInput,
                                // eslint-disable-next-line react-native/no-inline-styles
                                {
                                    borderColor: error
                                        ? CommonColors.labelButtonCancelColor
                                        : CommonColors.borderColor,
                                    backgroundColor: edittable == false ? '#F2F2F2' : '#fff',
                                    minHeight: minHeight
                                },
                                wrapInputStyle
                            ]}
                        >
                            {icon ? (
                                <View style={[styles.wrapIcon, wrapIconStyle]}>
                                    <View
                                        // eslint-disable-next-line react-native/no-inline-styles
                                        style={{
                                            width: scale(18),
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {icon}
                                    </View>
                                </View>
                            ) : (
                                <View style={{ paddingLeft: 10 }} />
                            )}
                            <View style={{flexDirection: 'row'}}>
                                <TextInput
                                    autoCapitalize="none"
                                    style={[
                                        styles.input,
                                        // eslint-disable-next-line react-native/no-inline-styles
                                        {
                                            paddingVertical: multiline ? verticalScale(8) : 0,
                                            textAlign: format == 'number' ? 'right' : 'left',
                                            height: multiline ? verticalScale(76) : 'auto',
                                            textAlignVertical: multiline ? 'top' : 'center'
                                        },
                                        inputStyle
                                    ]}
                                    editable={edittable}
                                    onBlur={onBlur}
                                    placeholder={placeHolder}
                                    placeholderTextColor="#ccc"
                                    onChangeText={text => {
                                            onChange(text)
                                            onChangeText(text)
                                    }}
                                    value={value}
                                    secureTextEntry={secureText}
                                    multiline={multiline}
                                    keyboardType={keyboardType}
                                />
                                {fieldName == "password" && <TouchableOpacity
                                    onPress={() => setSecureText(!secureText)}
                                    style={{ padding: 8, marginRight: scale(10) }}
                                >
                                    <Ionicons
                                        name={secureText ? 'eye-off' : 'eye'}
                                        size={24}
                                        color="#333" // Màu của icon
                                    />
                                </TouchableOpacity>}
                            </View>

                            <View>
                                <View>
                                    {secureTextEntry && (
                                        <View
                                            style={{
                                                width: scale(30),
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                marginRight: scale(5)
                                            }}
                                        >
                                            {secureText ? (
                                                <TouchableOpacity
                                                    hitSlop={{
                                                        top: 20,
                                                        left: 20,
                                                        right: 20,
                                                        bottom: 20
                                                    }}
                                                    activeOpacity={1}
                                                    onPress={onShowSecure}
                                                >
                                                    {/* <Eye
                                                        width={scale(14)}
                                                        height={scale(10)}
                                                        color={CommonColors.placeholderColor}
                                                    /> */}
                                                </TouchableOpacity>
                                            ) : (
                                                <TouchableOpacity
                                                    hitSlop={{
                                                        top: 20,
                                                        left: 20,
                                                        right: 20,
                                                        bottom: 20
                                                    }}
                                                    activeOpacity={1}
                                                    onPress={onShowSecure}
                                                >
                                                    {/* <EyeSlash
                                                        width={scale(14)}
                                                        height={scale(14)}
                                                        color={CommonColors.placeholderColor}
                                                    /> */}
                                                </TouchableOpacity>
                                            )}
                                        </View>
                                    )}
                                </View>
                            </View>
                        </View>
                        {error && (
                            <Text
                                style={[
                                    styles.errors,
                                    {
                                        textAlign: positionError || 'right'
                                    }
                                ]}
                            >
                                {error && <Text style={{color: 'red'}}>{error.message || "error"}</Text>}
                            </Text>
                        )}
                    </View>
                )
            }}
            name={fieldName}
        />
    )
}

const styles = StyleSheet.create({
    wrapInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: BORDER_RADIUS_FORM,
        borderWidth: 1,
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
    input: {
        paddingRight: 12,
        flex: 1,
        color: '#424242',
        fontSize: FONT_NORMAL,
        padding: 0,
        margin: 0
    },
    wrapIcon: {
        borderColor: CommonColors.separator,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: scale(48)
    },
    errors: {
        marginTop: scale(5),
        color: CommonColors.redColor,
        ...Fonts.defaultLight,
        fontSize: scale(12)
    }
})
