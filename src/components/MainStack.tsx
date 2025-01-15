import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { Home } from "./Home";
import { Activities } from "./Activities";
import { Results } from "./Results";
import { Tips } from "./Tips";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#4CAF50",
                },
                headerTintColor: "#fff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={Home}
                options={{ title: "Carbon Footprint" }}
            />
            <StackNavigator.Screen
                name="Activities"
                component={Activities}
                options={{ title: "Track Activities" }}
            />
            <StackNavigator.Screen
                name="Results"
                component={Results}
                options={{ title: "Your Impact" }}
            />
            <StackNavigator.Screen
                name="Tips"
                component={Tips}
                options={{ title: "Eco Tips" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);