import React, { useState } from "react";
import { Image } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Auth screens
import Splash from "@screens/auth/Splash";
import Signup from "@screens/auth/Signup";
import Signin from "@screens/auth/Signin";

// App screens
import Home from "@screens/app/Home";
import Favorites from "@screens/app/Favorites";
import Profile from "@screens/app/Profile";
import Settings from "@screens/app/Settings";
import ProductDetails from "@screens/app/ProductDetails";
import CreateListing from "@screens/app/CreateListing";

// Assets & Utils
import { colors } from "@utils/colors";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <Stack.Screen name="CreateListing" component={CreateListing} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "Home") {
            icon = focused
              ? require("./src/assets/tabs/homeActive.png")
              : require("./src/assets/tabs/home.png");
          } else if (route.name === "Favorites") {
            icon = focused
              ? require("./src/assets/tabs/bookmarkActive.png")
              : require("./src/assets/tabs/bookmark.png");
          } else if (route.name === "Profile") {
            icon = focused
              ? require("./src/assets/tabs/profileActive.png")
              : require("./src/assets/tabs/profile.png");
          }

          return <Image style={{ width: 24, height: 24, marginTop: 35 }} source={icon} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { borderTopColor: colors.lightGray }
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white,
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
            </>
          ) : (
            <>
              <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
              <Stack.Screen name="Signup" options={{ headerShown: false }}>{(props) => <Signup {...props} setIsSignedIn={setIsSignedIn} />}</Stack.Screen>
              <Stack.Screen name="Signin" options={{ headerShown: false }}>{(props) => <Signin {...props} setIsSignedIn={setIsSignedIn} />}</Stack.Screen>
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;