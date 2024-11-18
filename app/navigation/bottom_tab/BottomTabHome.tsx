import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TimeKeepingScreen from "../../screen/bottom_screen/category/TimeKeepingScreen";
import LoginScreen from "../../screen/login/LoginScreen";
import { PhanHe, RootBottomTabParamList, ThongBao, TinNhan, TrangChu } from "../../type/bottom_tab/RootBottomTabParamList";
import SplashScreen from "../../screen/splash/SplashScreen";
import { CommonColors, Fonts } from "../../utils/CommonStyles";
import { moderateScale, verticalScale } from "../../libs/reactSizeMatter/scalingUtils";

import Ionicons from 'react-native-vector-icons/Ionicons';
import TestScreen from "../../screen/test/TestScreen";

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTabHome = () =>{ 
    return(
        <Tab.Navigator 
            screenOptions={({route}) =>({
                tabBarIcon: ({focused, color,size}) =>{

                    
                    if(route.name == TrangChu){
                        return (<Ionicons name="home-outline" color={ focused ? CommonColors.activeTintColor: CommonColors.textGray} size={25} />)
                    }else if(route.name == ThongBao){
                        return (<Ionicons name="notifications-outline" color={focused ? CommonColors.activeTintColor : CommonColors.textGray} size={25}/>)
                    }
                    else if(route.name == TinNhan){
                        return (<Ionicons name="chatbubbles-outline" color={focused ? CommonColors.activeTintColor : CommonColors.textGray} size={25}/>)
                    }
                    else if(route.name == PhanHe){
                        return (<Ionicons name="grid-outline" color={focused ? CommonColors.activeTintColor : CommonColors.textGray} size={25}/>)
                    }
                },
                tabBarActiveTintColor: CommonColors.activeTintColor,
                tabBarInactiveTintColor: CommonColors.textGray,
                headerShown: false,
                tabBarLabelStyle:{
                    fontSize: moderateScale(16),
                    fontWeight: 400,
                    marginBottom: verticalScale(10),
                },
                tabBarStyle:{
                    height: verticalScale(70),
                    paddingVertical: verticalScale(10),
                }
        
        })}>
            <Tab.Screen name="Trang chủ" component={TimeKeepingScreen} />
            <Tab.Screen name="Thông báo" component={LoginScreen}/>
            <Tab.Screen name="Tin nhắn" component={TestScreen}/>
            <Tab.Screen name="Phân hệ" component={SplashScreen}/>
        </Tab.Navigator>   
    );
}

export default BottomTabHome;
