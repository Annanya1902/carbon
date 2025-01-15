import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type HomeProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function Home({ navigation }: HomeProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-3xl mb-8 font-bold text-center text-green-700">
                Carbon Footprint Calculator
            </label>
            <button
                className="bg-green-600 text-white p-4 rounded-lg mb-4 w-3/4 text-center"
                onTap={() => navigation.navigate("Activities")}
            >
                Track Activities
            </button>
            <button
                className="bg-green-600 text-white p-4 rounded-lg mb-4 w-3/4 text-center"
                onTap={() => navigation.navigate("Results")}
            >
                View Impact
            </button>
            <button
                className="bg-green-600 text-white p-4 rounded-lg w-3/4 text-center"
                onTap={() => navigation.navigate("Tips")}
            >
                Get Eco Tips
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
    },
});