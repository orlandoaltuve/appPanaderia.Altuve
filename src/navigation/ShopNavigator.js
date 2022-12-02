import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import BeradDetailsScreen from "../screens/BreadDetailsScreen";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return (
       
            <Stack.Navigator initialRouteName="Categories" screenOptions={{
                headerStyle: { backgroundColor: COLORS.primary },
                headerTintColor: COLORS.secundary,
                headerTitleStyle: {
                    fontWeight: "bold"
                },
            }}>
                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}
                    options={{
                        title: "Mi panaderia"
                    }} />
                <Stack.Screen name="Bread" component={CategoryBreadScreen}
                    options={({ route }) => ({
                        title: route.params.name,
                    })} />
                <Stack.Screen name="Details" component={BeradDetailsScreen}
                    options={({ route }) => ({
                        title: route.params.name,
                    })} />
            </Stack.Navigator>
     
    )
}