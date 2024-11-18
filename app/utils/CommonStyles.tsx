
import { Platform } from 'react-native'
import {
    moderateScale,
    scale,
    verticalScale
} from '../libs/reactSizeMatter/scalingUtils'
import Utils from './Utils'

const Fonts = {
    defaultRegular: {
        fontFamily: 'Roboto-Regular'
    },
    defaultBold: {
        fontFamily: 'Roboto-Bold'
    },
    defaultBlack: {
        fontFamily: 'Roboto-Black'
    },
    defaultItalic: {
        fontFamily: 'Roboto-Italic'
    },
    defaultLight: {
        fontFamily: 'Roboto-Light'
    },
    defaultMedium: {
        fontFamily: 'Roboto-Medium'
    },
    defaultLightItalic: {
        fontFamily: 'Roboto-LightItalic'
    },
    defaultMediumItalic: {
        fontFamily: 'Roboto-MediumItalic'
    },
    defaultInter: {
        fontFamily: 'Inter-Regular',
    },
    default: {
        fontFamily: 'Inter-Regular',
        lineHeight: 20,
        fontWeight: '400'
    }
}

class CommonColors {
    // Origin Color

    static black = '#000'

    static white = '#fff'

    static backdropColorBlue = '#EDF1F8'

    static redColor = '#FF2C00'

    static redColorBtn = '#D91F11'

    static tableHeader = '#ECECEE'

    static borderTable = '#D8D7D7'

    static textBlack = '#141414'

    static textBlue = '#3750B2'
    
    static textLink = '#2566E9'

    static textNeutral = '#727272'

    static isActive = '#FBFAF4'

    static borderSelect = '#FFCD29'

    // Main Color

    static mainBlack = '#212121'

    static mainGray = '#727272'

    static borderGray = '#E8E8E8'

    static mainGreen = '#138300'

    static greenColor = '#389E0D'

    static mainRed = '#FF4D4D'

    static mainYellow = '#FFD500'

    static mainBlue = '#3750B2'

    static secondBlue = '#F1F3FE'

    static mainActive = '#3750B2'

    static grayColor = '#BFBFBF'

    // background
    static bgContainer = '#E7EAF7'
    // Component

    static shadowColor = '#000'

    static borderColor = '#000'

    static border = '#C4C4C4'

    // Button

    static cancelBtnColor = '#fff'

    static disableButton = '#808080'

    static buttonActive = CommonColors.mainBlue

    static labelButtonCancelColor = '#FF3434'

    // Text

    static mainText = '#333333'

    static secondaryText = '#808080'

    static textGrayB6 = '#BFBFBF'

    static textColor = '#141414'

    static textBland = '#000000A6'

    static textGray = '#8A8A8A'

    static textWhite = '#fff'

    static textUpdate = '#8B8B8B'
    static textOrange = '#FA541C'
    static textGreen = '#389E0D'

    // background

    static darkModeBgColor = '#14224F'

    static darkModeBgContainerColor = '#0F193B'

    static secondaryColor = '#F9BA09'

    static activeTintColor = '#3750B2'

    static backgroundColorInit = '#DBDBDB'

    static backgroundColorUpdateMode = '#808080'

    static backgroundOnLeaveColor = '#FFF7CC'

    static backgroundGrayColor = '#F2F2F2'

    static bgInputChangePassword = '#FFFEFA'

    static backgroundItem = '#DEF8E2'

    static backgroundWhiteBlue = '#EDF1F8'

    static backgroundLightGray = '#F6F6F6'

    // Header

    static headerBarBgColor = '#FFD500'

    static headerTitleColor = '#303030'

    static headerTextColor = '#131313'

    //Text Input

    static placeholderColor = '#9D9D9D'

    static valid = 'green'

    static invalid = '#EC1C24'

    static borderTextInputColor = '#707070'

    //Modal

    static backdropColor = 'rgba(0, 0, 0, 0.30)'

    static alertColor = '#FF2C00'

    static buttonLabelColor = '#000000'

    // System Color

    static hrmColor = '#EA6D51'

    static buyItemColor = '#82C182'

    static crmColor = '#7E99CA'

    static systemColor = '#EE828A'

    static financialColor = '#B159A0'

    static produceColor = '#19B6CF'

    //Icon

    static iconRightColor = '#595959'

    // Status

    static successColor = CommonColors.mainGreen

    static warningColor = '#F1CE1A'

    static dangerColor = '#FF4D4D'

    static headerModalColr = '#FBFAF4'


    // header detail request
    static backgroundHeader = '#FFFDF5'

    // seperator
    static separator = '#707070'
}


const ShadowStyle = {
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: {
        width: 0,
        height: 2
    },
    elevation: 2
}
const ShadowStyleTabar = {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 30
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3
}
const TextButtonStyle = {
    fontSize: '12@s',
    fontWeight: '500',
    textTransform: 'uppercase',
    color: CommonColors.mainText
}

const SeparatorStyle = {
    width: '100%',
    height: 0.5,
    backgroundColor: CommonColors.separator,
    marginVertical: verticalScale(10)
}

const ButtonPopupStyle = {
    marginRight : scale(12),
    padding: scale(12),
    height: scale(44),
    borderRadius: scale(8),
};

const TextButtonPopup = {
    fontSize: moderateScale(14),
    fontFamily: 'Inter-Regular',
    lineHeight: scale(20),
    fontWeight: '500',
};

const ButtonStyle = {
    padding: scale(12),
    height: scale(44),
    borderRadius: scale(8),
};


class CommonSize {
    static contentPadding = scale(16)

    static headerTitleFontSize = '15@ms'

    static inputHeight = '40@s'

    static inputFontSize = '14@ms'

    static formLabelFontSize = '14@ms'

    static btnSubmitHeight = scale(35)

    static marginBottom = scale(30)

    static paddingHorizontal = scale(16)
    static marginBottomScreen = scale(21)
    static marginTopScreen = verticalScale(30)

    static backdropOpacity = 0.6
}

const CommonStyles = {
    screen: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 2,
        height: 88,
        ...ShadowStyle
    },
    headerTitle: {
        fontSize: moderateScale(16),
        ...Fonts.defaultMedium,
        color: '#333333'
    },
    separatorStyle: {
        height: 1,
        backgroundColor: CommonColors.separator
    }
}

const MARGIN_TOP_BETWEEN_SECTION = scale(5)

export {
    CommonColors,
    CommonSize,
    CommonStyles,
    Fonts,
    ShadowStyle,
    TextButtonStyle,
    SeparatorStyle,
    MARGIN_TOP_BETWEEN_SECTION,
    ShadowStyleTabar,
    ButtonPopupStyle,
    TextButtonPopup,
    ButtonStyle,
}
