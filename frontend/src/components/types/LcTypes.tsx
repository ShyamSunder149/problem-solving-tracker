export type LcData = {
    [key : string] : any,
    status: string,
    totalSolved: number,
    totalQuestions: number,
    easySolved: number,
    totalEasy: number,
    mediumSolved: number,
    totalMedium: number,
    hardSolved: number,
    totalHard: number,
    ranking: number,
    contributionPoints: number,
    reputation: number
}

export type LcDifficultyData = {
    name : string,
    solved : number,
    total : number
}
