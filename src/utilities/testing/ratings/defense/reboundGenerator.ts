import { randomNumberGenerator } from "../../../randomNumberGenerator";

export function generateReboundRating(height: number) {
    const playerReboundConstraints: Record<number, { min: number, max: number }> = {
        77: { min: 40, max: 67 },
        80: { min: 60, max: 81 },
        82: { min: 70, max: 91 },
        84: { min: 70, max: 96 },
        91: { min: 70, max: 100 }
    }
    let selectedKey = 77;
    Object.keys(playerReboundConstraints).every(heightClass => {
        if (height < +heightClass) {
            selectedKey = +heightClass;
            return false;
        }
        return true;
    });
    return randomNumberGenerator(playerReboundConstraints[selectedKey].max, playerReboundConstraints[selectedKey].min);
}
