import { StyleSheet, Text, View } from "react-native"
import { colors } from "../constans/theme"

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Built with React Native & Expo
        {'\n'}ⓒ Sylwia Teresa
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    //position: "absolute",
    alignItems: "center",
    marginTop: "auto",
    paddingBottom: 3,
  },
  footerText: {
    fontSize: 12,
    color: colors.foreground,
    textAlign: "center",
  },
})