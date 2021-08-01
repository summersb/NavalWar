export class Card {
	info():string {
		return this.constructor.name
	}
}

export class PlayCard extends Card {
}

export class ShipCard extends Card {
	readonly name: string
	readonly country: string
	readonly gunSize: number
	readonly hitPoints: number

	constructor(name: string, country: string, gunSize: number, hitPoints: number) {
		super()
		this.name = name
		this.country = country
		this.gunSize = gunSize
		this.hitPoints = hitPoints
	}

	info():string {
		return `${this.name} - ${this.country} Gun ${this.gunSize} HitPoints: ${this.hitPoints}`
	}
}

export interface GameConfig {
	playerType: PlayerType
	score: number
	shipDeck: ShipCard[]
	playDeck: PlayCard[]
	noAdditionalShips: boolean
	gunneryOnly: boolean
	specialPlay: boolean
	increaseCarnage: boolean
	nightAction: boolean
	kamikaze: boolean
}

export enum PlayerType {
	THREE = 1,
	FOUR = 2,
	FOUR_TWO_TF = 3,
	FIVE = 4,
	SIX = 5,
	SIX_TWO_TF = 6,
	SIX_THREE_TF = 7,
	SEVEN = 8,
	EIGHT = 9,
	EIGHT_TWO_TF = 10,
	EIGHT_FOUR_TF = 11,
	NINE = 12,
	NINE_THREE_TF = 13
}
