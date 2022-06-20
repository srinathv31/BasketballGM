import { Postion } from "../../../../../interfaces/Player";
import { weightedRandomNumberGenerator } from "../../../../randomNumberGenerator";

export default function generatePassing(position: Postion) {
    switch (position){
        case "PG":
            return weightedRandomNumberGenerator(99, 70, 0.7);
        case "SG":
            return weightedRandomNumberGenerator(95, 65, 0.7);
        case "SF":
            return weightedRandomNumberGenerator(95, 65, 0.75);
        case "PF":
            return weightedRandomNumberGenerator(95, 55, 0.8);
        case "C":
            return weightedRandomNumberGenerator(90, 25, 1);
    }
}
