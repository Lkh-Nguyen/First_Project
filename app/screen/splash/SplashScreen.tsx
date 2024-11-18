import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { scale } from '../../libs/reactSizeMatter/scalingUtils';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');
import { CommonColors, Fonts } from '../../utils/CommonStyles';
import IcLogo from '../../../assets/icon/LogoIcon';

import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../type/stack/RootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

function SplashScreen() {

    const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    // Navigate to LoginScreen after 5 seconds
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#3750B2', '#7D96F8']}
                style={styles.image}
            >
                <View style={styles.welcome}>
                    <View style={styles.logo}>
                        <IcLogo />
                    </View>
                    <Text style={styles.text_title}>
                        Chào Mừng Quay Trở Lại
                    </Text>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        flex: 1,
    },
    logo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    svgTop: {
        position: 'absolute',
        top: 200,
    },
    text_title: {
        ...Fonts.defaultInter,
        color: '#fff',
        marginTop: 20,
        fontSize: scale(24),
        textAlign: 'center',
    },
});

export default SplashScreen;
