import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type ActivitiesProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Activities">,
};

export function Activities({ navigation }: ActivitiesProps) {
    const [transport, setTransport] = React.useState(0);
    const [energy, setEnergy] = React.useState(0);
    const [waste, setWaste] = React.useState(0);

    const calculateFootprint = () => {
        const total = (transport * 0.2) + (energy * 0.5) + (waste * 0.3);
        navigation.navigate("Results", { footprint: total });
    };

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-xl mb-6 font-bold text-center">
                    Track Your Daily Activities
                </label>

                <stackLayout className="w-full p-4">
                    <label className="text-lg mb-2">Transport (km/day)</label>
                    <textField
                        keyboardType="number"
                        className="p-2 mb-4 border rounded"
                        text={transport.toString()}
                        onTextChange={(args) => setTransport(Number(args.value))}
                    />

                    <label className="text-lg mb-2">Energy Usage (kWh/day)</label>
                    <textField
                        keyboardType="number"
                        className="p-2 mb-4 border rounded"
                        text={energy.toString()}
                        onTextChange={(args) => setEnergy(Number(args.value))}
                    />

                    <label className="text-lg mb-2">Waste Generated (kg/day)</label>
                    <textField
                        keyboardType="number"
                        className="p-2 mb-4 border rounded"
                        text={waste.toString()}
                        onTextChange={(args) => setWaste(Number(args.value))}
                    />

                    <button
                        className="bg-green-600 text-white p-4 rounded-lg mt-4"
                        onTap={calculateFootprint}
                    >
                        Calculate Impact
                    </button>
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