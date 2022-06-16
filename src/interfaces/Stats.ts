export interface StatObject {
    total: number,
    postseasonTotal: number,
    averages: StatAvg
}

interface StatAvg {
    [season: number]: number,
    postseason: number
}
