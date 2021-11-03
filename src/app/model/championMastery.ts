export interface ChampionMastery {
  championId: number,
  championLevel: number,
  championPoints: string,
  lastPlayTime: number,
  championPointsSinceLastLevel: number,
  championPointsUntilNextLevel: number,
  chestGranted: boolean,
  tokensEarned: number,
  summonerId: string,
}
