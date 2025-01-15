import * as React from "react";
import { StyleSheet } from "react-nativescript";

const ecoTips = [
    "Use public transportation or bike when possible",
    "Switch to LED light bulbs",
    "Reduce, reuse, and recycle waste",
    "Use a reusable water bottle",
    "Turn off lights when leaving a room",
    "Use cold water for laundry when possible",
    "Start composting organic waste",
    "Use energy-efficient appliances",
];

export function Tips() {
    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-2xl mb-6 font-bold text-center">
                    Eco-Friendly Tips
                </label>

                <stackLayout className="w-full">
                    {ecoTips.map((tip, index) => (
                        <label
                            key={index}
                            className="p-4 mb-4 bg-white rounded-lg shadow text-lg"
                            text={`${index + 1}. ${tip}`}
                        />
                    ))}
                </stackLayout>
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
});