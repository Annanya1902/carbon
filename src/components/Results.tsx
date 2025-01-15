import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { RouteProp } from "@react-navigation/core";

type ResultsProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Results">,
    route: RouteProp<MainStackParamList, "Results">,
};

export function Results({ navigation, route }: ResultsProps) {
    const footprint = route.params?.footprint || 0;
    const impact = getImpactLevel(footprint);

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-6 font-bold text-center">
                Your Carbon Footprint
            </label>

            <label className="text-4xl mb-8 font-bold text-center text-green-700">
                {footprint.toFixed(2)} CO₂e
            </label>

            <label className="text-xl mb-4 text-center">
                Impact Level: {impact}
            </label>

            <button
                className="bg-green-600 text-white p-4 rounded-lg mt-4"
                onTap={() => navigation.navigate("Tips")}
            >
                View Reduction Tips
            </button>
        </flexboxLayout>
    );
}

function getImpactLevel(footprint: number): string {
    if (footprint < 5) return "Low Impact 🌱";
    if (footprint < 10) return "Moderate Impact 🌿";
    return "High Impact 🌳";
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
});