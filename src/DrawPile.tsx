import React, { ReactElement } from 'react'

class PlayCard {
	info() {
		return this.constructor.name
	}
}

class SalvoCard extends PlayCard {
	readonly gunSize: number
	readonly damage: number

	constructor(gunSize: number, damage: number) {
		super()
		this.gunSize = gunSize
		this.damage = damage
	}

	info() {
		return `Salvo Gun Size ${this.gunSize} Damage ${this.damage}`
	}
}

class MineSweeperCard extends PlayCard {}

class RepairCard extends PlayCard {}

class DestroyerSquadronCard extends PlayCard {}

class SmokeCard extends PlayCard {}

class SpecialCard extends PlayCard {}

class MineFieldCard extends SpecialCard {
	readonly damage: number

	constructor(damage: number) {
		super()
		this.damage = damage
	}

	info() {
		return `MineField Damage ${this.damage}`
	}
}

class SubmarineCard extends SpecialCard {}

class TorpedoBoatCard extends SpecialCard {}

class AdditionalDamageCard extends SpecialCard {
	readonly damage: number
	constructor(damage: number) {
		super()
		this.damage = damage
	}

	info() {
		return `${this.constructor.name} Damage ${this.damage}`
	}
}

class AdditionalShipCard extends SpecialCard {}

const cards: PlayCard[] = [
	new AdditionalDamageCard(1),
	new AdditionalDamageCard(1),
	new AdditionalDamageCard(1),
	new AdditionalDamageCard(1),
	new AdditionalDamageCard(2),
	new AdditionalDamageCard(2),
	new DestroyerSquadronCard(),
	new DestroyerSquadronCard(),
	new TorpedoBoatCard(),
	new TorpedoBoatCard(),
	new AdditionalShipCard(),
	new AdditionalShipCard(),
	new AdditionalShipCard(),
	new AdditionalShipCard(),
	new AdditionalShipCard(),
	new AdditionalShipCard(),
	new AdditionalShipCard(),
	new AdditionalShipCard(),
	new SmokeCard(),
	new SmokeCard(),
	new SmokeCard(),
	new SmokeCard(),
	new SmokeCard(),
	new SmokeCard(),
	new MineFieldCard(1),
	new MineFieldCard(1),
	new MineFieldCard(2),
	new MineFieldCard(2),
	new RepairCard(),
	new RepairCard(),
	new RepairCard(),
	new RepairCard(),
	new SubmarineCard(),
	new SubmarineCard(),
	new MineSweeperCard(),
	new MineSweeperCard(),
]

type SalvoSetup = {
	[key: string]: SalvoAmmo[]
}

type SalvoAmmo = {
	size: number
	number: number
}

const setupSalvo: SalvoSetup = {
	'18': [
		{ size: 4, number: 2 },
		{ size: 3, number: 2 },
		{ size: 2, number: 2 },
	],
	'16': [
		{ size: 4, number: 2 },
		{ size: 3, number: 6 },
		{ size: 2, number: 4 },
		{ size: 1, number: 2 },
	],
	'15': [
		{ size: 3, number: 6 },
		{ size: 2, number: 6 },
		{ size: 1, number: 2 },
	],
	'14': [
		{ size: 3, number: 2 },
		{ size: 2, number: 8 },
		{ size: 1, number: 10 },
	],
	'12.6': [
		{ size: 2, number: 4 },
		{ size: 1, number: 4 },
	],
	'11': [
		{ size: 2, number: 2 },
		{ size: 1, number: 8 },
	],
}

Object.keys(setupSalvo).forEach((gunSize) => {
	const ammo: SalvoAmmo[] = setupSalvo[gunSize]
	ammo.forEach((a) => {
		for (let i = 0; i < a.number; i++) {
			cards.push(new SalvoCard(Number(gunSize), a.size))
		}
	})
})

const DrawPile: React.FC = (): ReactElement => {
	return (
		<>
			<div>Draw Pile</div>
			<div>Size {cards.length}</div>
			<ul>
				{cards.map((c, idx) => (
					<li key={idx}>{c.info()}</li>
				))}
			</ul>
		</>
	)
}

export default DrawPile
