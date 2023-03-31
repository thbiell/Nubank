import { Image, ScrollView, StyleSheet, Text, View, Switch } from "react-native";
import React from 'react';
import { StatusBar } from "expo-status-bar";

import Janela from "../../assets/Janela.png";


export function Config() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>
      <Image source={Janela} style={styles.image} />
      <StatusBar style="dark" />
      <View style={styles.container2}>
        <Switch
          trackColor={{ false: "#C4C4C4", true: "#820AD0" }}
          thumbColor={isSwitchOn ? "#5C0098" : "#A3A3A3"}
          onValueChange={onToggleSwitch}
          value={isSwitchOn}
          style={{marginTop: 50}}
          
        />
        <Text style={styles.title}>Modo Noturno</Text>
        <Text style={styles.description}>O modo noturno melhora sua experiência no aplicativo durante a noite, e em telas OLED, te ajuda a economizar bateria.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F0F5",
    alignItems: "center",
  },
  image: {
    marginHorizontal: 75,
    marginTop: 90,
    marginBottom: 56,
    resizeMode: "contain",
  },
  container2: {
    flex: 1,
    backgroundColor: "#Fff",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 36,
    marginBottom: 15,
    marginTop:20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 44,
    color: "#B8B8B8",
    letterSpacing: 1,
    lineHeight: 21,
  },
});
