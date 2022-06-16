import { PlayerAttributes } from "./Attributes";
import { StatObject } from "./Stats";

export interface PlayerObject extends Player, PlayerStats, PlayerAttributes, PlayerTraits {
    id: number,
    draftPos: number,
    status: "Active" | "Retired" | "Injured",
    teamNumber: number,
    teams: Record<number, string>,
    salary: Record<number, number>,
}

interface Player {
    name: string,
    position: Postion[],
    height: number,
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

export type Postion = "PG" | "SG" | "SF" | "PF" | "C";

interface PlayerTraits {
    devTrait: DevTrait,
    morale: Morale
    loyalty: LevelsList
    demand: LevelsList
    ambition: LevelsList
}

export type DevTrait = "STAR" | "FAST" | "NORMAL" | "SLOW" | "DECLINE";
export type Morale = "Ecstatic" | "Happy" | "Content" | "Unhappy" | "Estranged";
export type LevelsList = "HIGH" | "MED" | "LOW";
