import Header from "@/components/Header";
import { Tabs } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Main() {
  return (
    <>
      <Tabs 
        screenOptions={{
          header: () => <Header />
        }} 
      />
      <StatusBar barStyle='dark-content' /> 
    </>
  );
}