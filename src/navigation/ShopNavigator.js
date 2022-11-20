import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import BeradDetailsScreen from "../screens/BreadDetailsScreen";

const Stack= createNativeStackNavigator();

export default ShopNavigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={CategoriesScreen}/>
                <Stack.Screen name="Bread" component={CategoryBreadScreen}/>
                <Stack.Screen name="Details" component={BeradDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}