export interface PlayerAttributes {
    physical: PlayerPhysicalRatings,
    mental: PlayerMentalRatings,
    offense: OffensivePlayerSkillRatings,
    defense: DefensivePlayerSkillRatings
}

interface PlayerPhysicalRatings {
    speed: number,
    strength: number,
    vertical: number,
    injuryProne: number
}

interface PlayerMentalRatings {
    shotIQ: number,
    playmakingIQ: number,
    discipline: number,
    defensiveIQ: number
}

interface OffensivePlayerSkillRatings {
    close: number,
    midRange: number,
    threePoint: number,
    freeThrow: number,
    layup: number,
    dunk: number,
    postFade: number,
    drawFoul: number,
    ballHandle: number,
    passing: number
}

interface DefensivePlayerSkillRatings {
    interiorDefense: number,
    perimeterDefense: number,
    block: number,
    steal: number,
    offensiveRebound: number,
    defensiveRebound: number
}
