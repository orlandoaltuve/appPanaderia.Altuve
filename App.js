
import {useFonts} from "expo-font"
import ShopNavigator from './src/navigation/ShopNavigator';
import BottonTabNavigator from "./src/navigation/BottonTabNavigator";

export default function App() {
const [fontsLoaded]=useFonts({
  "PermanentMarker":require("./src/assets/fonts/PermanentMarker-Regular.ttf")
})

if(!fontsLoaded){
  return null
}
  return<BottonTabNavigator/>;
}

