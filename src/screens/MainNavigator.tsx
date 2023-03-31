import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image } from "react-native";
import  Home  from './Home';
import { Config } from './Config';
import { Pix } from './Pix';
import { LimitAdjustment } from './LimitAdjustment';
import  Credit  from './Credit';


const MainNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Home"

        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="Config"
                component={Config}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Pix"
                component={Pix}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LimitAdjustment"
                component={LimitAdjustment}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="Credit"
                component={Credit}
                options={{ headerShown: false }}

            />
        </Stack.Navigator>
    );
};


export default MainNavigator;
