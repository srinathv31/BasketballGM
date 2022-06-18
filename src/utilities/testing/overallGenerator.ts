import { PlayerAttributes } from "../../interfaces/Attributes";
import { Postion } from "../../interfaces/Player";
import pgWeights from "./weights/pgWeights";

export function generateOverall(position: Postion, categoryOveralls: PlayerAttributes) {
    const positionWeights: Record<Postion, PlayerAttributes> = {
        "PG": pgWeights,
        "SG": pgWeights,
        "SF": pgWeights,
        "PF": pgWeights,
        "C": pgWeights,
    };

    let totalWeightedOverall = 0;
    Object.entries(categoryOveralls).map(stat => {
        if (stat[0] === "overall"){
            return;
        }
        const category = stat[0] as "physical" | "mental" | "offense" | "defense";
        const categoryWeight = positionWeights[position][category].categoryWeight!;
        const categoryRatings = Object.entries(categoryOveralls[category]);
        const categoryRatingsWeights = Object.entries(positionWeights[position][category]);
        const categoryWeightedOverall = categoryRatings.map((rating, index) => rating[1]*categoryRatingsWeights[index][1]).reduce((a,b) => a+b)*categoryWeight;
        totalWeightedOverall += categoryWeightedOverall;
    });
    return Math.round(totalWeightedOverall);
}
