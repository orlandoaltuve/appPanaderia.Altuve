import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/colors";
import OrdersScreen from "../screens/OrdersScreen";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return (

        <Stack.Navigator initialRouteName="Orders"
            screenOptions={{
                headerStyle: { backgroundColor: COLORS.primary },
                headerTintColor: COLORS.secundary,
                headerTitleStyle: {
                    fontWeight: "bold"
                },
            }}>
            <Stack.Screen
                name="Orders"
                component={OrdersScreen}
                options={{
                    title: "Ordenes"
                }} />

        </Stack.Navigator>

    )
}