import { DevTrait, LevelsList, Morale, PlayerObject, Postion } from "../../interfaces/Player";
import { randomNumberGenerator } from "../randomNumberGenerator";
import firstNameList from "../../assets/firstNameList.json";
import lastNameList from "../../assets/lastNamesList.json";
import collegeNamesList from "../../assets/collegeNamesList.json";
import { generateOverall } from "./overallGenerator";
import { generateHeight } from "./vitals/heightGenerator";
import { generateWeight } from "./vitals/weightGenerator";
import { generateReboundRating } from "./ratings/defense/reboundGenerator";
import generateBlockRating from "./ratings/defense/blockGenerator";

export function generateDraftClass() {
    const draftClassList: PlayerObject[] = [];
    const draftClassPopulation = randomNumberGenerator(80, 72);
    while (draftClassList.length < draftClassPopulation) {
        draftClassList.push(generateNewPlayer(draftClassList.length));
    }
    return draftClassList;
}

function generateNewPlayer(listLength: number): PlayerObject {
    const playerPosition: Postion[] = ["PG"]
    const playerHeight = generateHeight(playerPosition[0]);
    const playerWeight = generateWeight(playerHeight);
    const playerRatings = generatePlayerRatings(playerHeight);
    const playerTraits = generatePlayerTraits();
    const newPlayer: PlayerObject = {
        id: (listLength) + 1,
        draftPos: 0,
        status: "Active",
        teamNumber: randomNumberGenerator(99),
        teams: { 2022: "" },
        salary: { 2022: 0 },
        name: generateName(),
        position: playerPosition,
        height: playerHeight,
        weight: playerWeight,
        age: randomNumberGenerator(24, 19),
        college: generateCollege(),
        GP: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        MIN: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        PTS: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        "FG%": { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        "3P%": { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        "FT%": { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        REB: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        AST: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        BLK: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        STL: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        "3PM": { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        PF: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        TO: { total: 0, postseasonTotal: 0, averages: { postseason: 0 } },
        overall: playerRatings.overall,
        physical: playerRatings.physicalRatings,
        mental: playerRatings.mentalRatings,
        offense: playerRatings.offensiveRatings,
        defense: playerRatings.defensiveRatings,
        devTrait: playerTraits.devTrait,
        morale: playerTraits.morale,
        loyalty: playerTraits.loyalty,
        demand: playerTraits.demand,
        ambition: playerTraits.ambition
    };
    return newPlayer;
}

function generateName() {
    const firstName = firstNameList[randomNumberGenerator(firstNameList.length)];
    const lastName = lastNameList[randomNumberGenerator(lastNameList.length)];
    return `${firstName} ${lastName}`;
}

function generatePosition() {
    const positionList: Postion[] = ["PG", "SG", "SF", "PF", "C"];
    const positions: Postion[] = [];
    positions.push(positionList[randomNumberGenerator(positionList.length)]);
    return positions;
}

// function generateHeight() {
//     return randomNumberGenerator(86, 60);
// }

// function generateWeight() {
//     return randomNumberGenerator(350, 170);
// }

function generateCollege() {
    return `${collegeNamesList[randomNumberGenerator(collegeNamesList.length)]}`;
}

function generatePlayerRatings(height: number) {
    const physicalRatings = generatePhysicalRatings();
    const mentalRatings = generateMentalRatings();
    const offensiveRatings = generateOffensiveRatings();
    const defensiveRatings = generateDefensiveRatings(height);
    const categoryOveralls = { overall: 70, physical: physicalRatings, mental: mentalRatings, offense: offensiveRatings, defense: defensiveRatings };
    const overall = generateOverall("PG", categoryOveralls);
    return { overall: overall, physicalRatings: physicalRatings, mentalRatings: mentalRatings, offensiveRatings: offensiveRatings, defensiveRatings: defensiveRatings };
}

function generatePhysicalRatings()  {
    const physicals = { speed: randomNumberGenerator(99, 50), strength: randomNumberGenerator(99, 25), vertical: randomNumberGenerator(99, 20), injuryProne: randomNumberGenerator(99, 15) };
    return physicals;
}

function generateMentalRatings() {
    const mentals = { shotIQ: randomNumberGenerator(99, 20), playmakingIQ: randomNumberGenerator(99, 20), discipline: randomNumberGenerator(99, 15), defensiveIQ: randomNumberGenerator(99, 20) };
    return mentals;
}

function generateOffensiveRatings() {
    const offense = { 
        close: randomNumberGenerator(99, 20),
        midRange: randomNumberGenerator(99, 20),
        threePoint: randomNumberGenerator(99, 20),
        freeThrow: randomNumberGenerator(99, 20),
        layup: randomNumberGenerator(99, 20),
        dunk: randomNumberGenerator(99, 20),
        postFade: randomNumberGenerator(99, 20),
        drawFoul: randomNumberGenerator(99, 20),
        ballHandle: randomNumberGenerator(99, 20),
        passing: randomNumberGenerator(99, 20)
    };
    return offense;
}

function generateDefensiveRatings(height: number) {
    const defense = {
        interiorDefense: height < 77 ? randomNumberGenerator(75, 35) : randomNumberGenerator(100, 50),
        perimeterDefense: height > 81 ? randomNumberGenerator(80, 35) : randomNumberGenerator(100, 50),
        block: generateBlockRating(height),
        steal: randomNumberGenerator(100, 35),
        offensiveRebound: generateReboundRating(height),
        defensiveRebound: generateReboundRating(height)
    };
    return defense;
}

function generatePlayerTraits() {
    const devTraits: DevTrait[] = ["STAR", "FAST", "NORMAL", "SLOW"];
    const moraleList: Morale[] = ["Ecstatic", "Happy", "Content", "Unhappy"];
    const levelsList: LevelsList[] = ["HIGH", "MED", "LOW"];
    return { 
        devTrait: devTraits[randomNumberGenerator(devTraits.length)],
        morale: moraleList[randomNumberGenerator(moraleList.length)],
        loyalty: levelsList[randomNumberGenerator(levelsList.length)],
        demand: levelsList[randomNumberGenerator(levelsList.length)],
        ambition: levelsList[randomNumberGenerator(levelsList.length)] 
    };
}
