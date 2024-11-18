
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./app/screen/splash/SplashScreen";
import LoginScreen from "./app/screen/login/LoginScreen";
import { enableScreens } from "react-native-screens";
import { RootStackParamList } from "./app/type/stack/RootStackParamList";
import BottomTabHome from "./app/navigation/bottom_tab/BottomTabHome";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import { initConfigAxios } from "./app/adapter/AxiosConfig";
import TestScreen from "./app/screen/test/TestScreen";
// Enable screen optimizations
enableScreens();

const Stack = createStackNavigator<RootStackParamList>();
const App = () =>{

  return (
    <Provider store={store}>  
      <NavigationContainer
      >
        <Stack.Navigator 
          screenOptions={{headerShown: false}}
          initialRouteName="Splash"
        >
          <Stack.Screen name="Test" component={TestScreen}/>
          <Stack.Screen name="Splash" component={SplashScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Home" component={BottomTabHome}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
