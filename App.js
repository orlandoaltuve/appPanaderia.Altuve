
import {useFonts} from "expo-font"
import ShopNavigator from './src/navigation/ShopNavigator';
import BottonTapNavigator from "./src/navigation/BottonTapNavigator";

export default function App() {
const [fontsLoaded]=useFonts({
  "PermanentMarker":require("./src/assets/fonts/PermanentMarker-Regular.ttf")
})

if(!fontsLoaded){
  return null
}
  return<BottonTapNavigator/>;
}

