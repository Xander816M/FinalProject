import { Stack } from "expo-router";
import { SettingsProvider } from "../hooks/useSettings";


export default function RootLayout() {
  return (
    <SettingsProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SettingsProvider>
  );
}
