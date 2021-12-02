import { useFonts } from "expo-font";

export default fonts =>{
    let [fontsLoaded]= useFonts({
        'Poppins': require('../../assets/fonts/Poppins-Medium.ttf')
    })
}