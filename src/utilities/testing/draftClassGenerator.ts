import { DevTrait, LevelsList, Morale, PlayerObject, Postion } from "../../interfaces/Player";
import { randomNumberGenerator } from "../randomNumberGenerator";
import firstNameList from "../../assets/firstNameList.json";
import lastNameList from "../../assets/lastNamesList.json";
import collegeNamesList from "../../assets/collegeNamesList.json";
import { generateOverall } from "./overallGenerator";
import { generateHeight } from "./vitals/heightGenerator";
import { generateWeight } from "./vitals/weightGenerator";

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
    const playerRatings = generatePlayerRatings();
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

function generatePlayerRatings() {
    const physicalRatings = generatePhysicalRatings();
    const mentalRatings = generateMentalRatings();
    const offensiveRatings = generateOffensiveRatings();
    const defensiveRatings = generateDefensiveRatings();
    const categoryOveralls = { overall: 70, physical: physicalRatings.ratings, mental: mentalRatings.ratings, offense: offensiveRatings.ratings, defense: defensiveRatings.ratings };
    const overall = generateOverall("PG", categoryOveralls);
    return { overall: overall, physicalRatings: physicalRatings.ratings, mentalRatings: mentalRatings.ratings, offensiveRatings: offensiveRatings.ratings, defensiveRatings: defensiveRatings.ratings };
}

function generatePhysicalRatings()  {
    const physicals = { speed: randomNumberGenerator(99, 50), strength: randomNumberGenerator(99, 25), vertical: randomNumberGenerator(99, 20), injuryProne: randomNumberGenerator(99, 15) };
    const total = Object.values(physicals).reduce((a,b) => a+b);
    return { ratings: physicals, overall: Math.floor(total/Object.keys(physicals).length) };
}

function generateMentalRatings() {
    const mentals = { shotIQ: randomNumberGenerator(99, 20), playmakingIQ: randomNumberGenerator(99, 20), discipline: randomNumberGenerator(99, 15), defensiveIQ: randomNumberGenerator(99, 20) };
    const total = Object.values(mentals).reduce((a,b) => a+b);
    return { ratings: mentals, overall: Math.floor(total/Object.keys(mentals).length) };
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
    const total = Object.values(offense).reduce((a,b) => a+b);
    return { ratings: offense, overall: total/Object.keys(offense).length };
}

function generateDefensiveRatings() {
    const defense = {
        interiorDefense: randomNumberGenerator(99, 20),
        perimeterDefense: randomNumberGenerator(99, 20),
        block: randomNumberGenerator(99, 20),
        steal: randomNumberGenerator(99, 20),
        offensiveRebound: randomNumberGenerator(99, 20),
        defensiveRebound: randomNumberGenerator(99, 20)
    };
    const total = Object.values(defense).reduce((a,b) => a+b);
    return { ratings: defense, overall: total/Object.keys(defense).length };
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
