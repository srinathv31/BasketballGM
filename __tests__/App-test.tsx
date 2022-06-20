/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../src/App";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import { generateDraftClass } from "../src/utilities/testing/draftClassGenerator";
import { draftVisualizer } from "../src/utilities/testing/draftVisualizer";

it("renders correctly", () => {
    renderer.create(<App />);
});

it("Creates a new Draft Class", () => {
    const draftClass = generateDraftClass();
    draftClass.forEach(player => {
        if (player.overall > 70) {
            console.log(player);
        }
    });
    draftVisualizer(draftClass);
});
