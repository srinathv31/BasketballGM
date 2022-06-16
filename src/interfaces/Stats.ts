export interface StatObject {
    total: number,
    postseasonTotal: number,
    averages: StatAvg,
    [gameNumber: number]: number | "DNP"
}

interface StatAvg {
    [season: number]: number,
    postseason: number
}
