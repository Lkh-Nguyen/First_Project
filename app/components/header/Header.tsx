import React from 'react';
import { StatusBar, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { CommonSize, CommonStyles } from '../../utils/CommonStyles';
import { scale } from '../../libs/reactSizeMatter/scalingUtils';
import { DARK_MODE } from '../../utils/Consts';
import BackButton from '../button/BackButton';
import { CommonColors, Fonts } from '../../utils/CommonStyles';

const Header = ({
    left,
    center,
    right,
    backTitle,
    textCenter,
    isBack = true,
    showStatusBar = true,
    headerStyle,
    centerStyle,
    rightStyle,
    leftStyle,
    barStyle = 'light-content',
    centerContainer,
    handleBack,
}) => {
    return (
        <View style={[CommonStyles.header, headerStyle]}>
            {showStatusBar && (
                <StatusBar
                    backgroundColor="transparent"
                    translucent
                    barStyle={barStyle}
                />
            )}

            <View style={[styles.left, leftStyle]}>
                {left ? (
                    left
                ) : (
                    <>
                        {isBack && (
                            <View style={{ flexDirection: 'row' }}>
                                <BackButton
                                    handleBack={handleBack}
                                    style={{ paddingRight: scale(10) }}
                                />
                                <Text
                                    style={{
                                        ...Fonts.defaultRegular,
                                        fontSize: scale(16),
                                        lineHeight: scale(20),
                                        color: '#000000DE',
                                    }}
                                >
                                    {backTitle && backTitle}
                                </Text>
                            </View>
                        )}
                    </>
                )}
            </View>

            {centerContainer ? (
                centerContainer
            ) : (
                <View style={[styles.center, centerStyle]}>
                    <Text numberOfLines={1}>
                        {center ? (
                            center
                        ) : (
                            <>
                                {textCenter && (
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text
                                            style={{
                                                ...Fonts.defaultBold,
                                                fontSize: scale(16),
                                                lineHeight: scale(20),
                                                color: CommonColors.white,
                                            }}
                                        >
                                            {textCenter}
                                        </Text>
                                    </View>
                                )}
                            </>
                        )}
                    </Text>
                </View>
            )}

            <View style={[styles.right, rightStyle]}>{right}</View>
        </View>
    );
};

Header.propTypes = {
    left: PropTypes.any,
    center: PropTypes.any,
    right: PropTypes.any,
    backTitle: PropTypes.string,
    textCenter: PropTypes.string,
    isBack: PropTypes.bool,
    showStatusBar: true,
    headerStyle: PropTypes.object,
    centerStyle: PropTypes.object,
    rightStyle: PropTypes.object,
    leftStyle: PropTypes.object,
    barStyle: PropTypes.string,
    centerContainer: PropTypes.element,
    handleBack: PropTypes.func,
};

const styles = StyleSheet.create({
    left: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: scale(16),
    },
    right: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scale(16),
    },
    center: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        bottom: 0,
        paddingHorizontal: scale(50),
        zIndex: -1,
    },
});

export default Header;
