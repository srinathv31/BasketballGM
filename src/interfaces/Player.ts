import { PlayerAttributes } from "./Attributes";
import { StatObject } from "./Stats";

export interface PlayerObject extends Player, PlayerStats, PlayerAttributes, PlayerTraits {
    draftPos: number,
    status: "Active" | "Retired" | "Injured",
    teamNumber: number,
    teams: Record<number, string>,
    salary: Record<number, number>,
}

interface Player {
    name: string,
    position: Postion[],
    height: string,
    weight: number,
    age: number,
    college: string,
}

interface PlayerStats {
    GP: StatObject,
    MIN: StatObject,
    PTS: StatObject,
    "FG%": StatObject,
    "3P%": StatObject,
    "FT%": StatObject,
    REB: StatObject,
    AST: StatObject,
    BLK: StatObject,
    STL: StatObject,
    "3PM": StatObject,
    PF: StatObject,
    TO: StatObject
}

type Postion = "PG" | "SG" | "SF" | "PF" | "C";

interface PlayerTraits {
    devTrait: "STAR" | "FAST" | "NORMAL" | "SLOW" | "DECLINE",
    morale: "Ecstatic" | "Happy" | "Content" | "Unhappy" | "Estranged"
    loyalty: "HIGH" | "MED" | "LOW"
    demand: "HIGH" | "MED" | "LOW"
    ambition: "HIGH" | "MED" | "LOW"
}
