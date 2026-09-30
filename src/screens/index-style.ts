import { colors } from "@/Styles/colors"
import { fontFamily } from "@/Styles/fontsFamily"
import { TextSize } from "@/Styles/textSize"
import { Platform, StyleSheet } from "react-native"


export const styles = StyleSheet.create({

  container: {
    backgroundColor: colors.background.primary,
    flex: 1,
    
  },
  label: {
    fontSize: TextSize.label,
    fontFamily: fontFamily.semibold, 
    color: colors.primary
  },

  title:{
    fontSize: TextSize.title,
    fontFamily: fontFamily.semibold,
    color:colors.text.primary,
  }, 
  
    subtitle: {
        fontSize:TextSize.subtitle,
        fontFamily: fontFamily.regular,
        color: colors.secondary,
    },

    content: {
        paddingTop:Platform.OS === "android" ? 54 : 64, 
        paddingHorizontal: 24,
    },
    
    titleContent: {
        paddingTop: 28,
        marginBottom: 32,
    }
    
})