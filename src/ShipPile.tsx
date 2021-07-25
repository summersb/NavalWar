import React, { ReactElement } from 'react'

class ShipCard {
	readonly name: string
	readonly country: string
	readonly gunSize: number
	readonly hitPoints: number

	constructor(name: string, country: string, gunSize: number, hitPoints: number) {
		this.name = name
		this.country = country
		this.gunSize = gunSize
		this.hitPoints = hitPoints
	}

	info() {
		return `${this.name} - ${this.country} Gun ${this.gunSize} HitPoints: ${this.hitPoints}`
	}
}

class AircraftCarrierCard extends ShipCard {
	constructor(name: string, country: string, hitPoints: number) {
		super(name, country, 0, hitPoints)
	}

	info() {
		return `${this.name} - ${this.country} HitPoints: ${this.hitPoints}`
	}
}

const shipPile: ShipCard[] = [
	new AircraftCarrierCard('Enterprise', 'United States', 3),
	new ShipCard('West Virgina', 'United States', 16, 5),
	new ShipCard('Washington', 'United States', 16, 9),
	new ShipCard('Iowa', 'United States', 16, 7),
	new ShipCard('Missouri', 'United States', 16, 7),
	new ShipCard('Mississippi', 'United States', 14, 5),
	new ShipCard('South Dakota', 'United States', 16, 9),
	new ShipCard('New Jersey', 'United States', 16, 7),
	new ShipCard('North Carolina', 'United States', 16, 9),
	new ShipCard('Maryland', 'United States', 16, 5),
	new ShipCard('California', 'United States', 14, 5),
	new ShipCard('Pennsylvania', 'United States', 14, 5),
	new ShipCard('Nevada', 'United States', 14, 5),
	new ShipCard('Texas', 'United States', 14, 4),

	new ShipCard('Kirishima', 'Japan', 14, 5),
	new ShipCard('Ise', 'Japan', 14, 5),
	new ShipCard('Musashi', 'Japan', 18, 9),
	new ShipCard('Yamato', 'Japan', 18, 9),
	new AircraftCarrierCard('Shokaku', 'Japan', 3),
	new ShipCard('Nagato', 'Japan', 16, 9),
	new ShipCard('Hyuga', 'Japan', 14, 5),
	new ShipCard('Haruna', 'Japan', 14, 5),
	new ShipCard('Hiei', 'Japan', 14, 5),
	new ShipCard('Fuso', 'Japan', 14, 5),
	new AircraftCarrierCard('Akagi', 'Japan', 3),
	new ShipCard('Mutsu', 'Japan', 16, 9),
	new ShipCard('Kongo', 'Japan', 14, 5),

	new ShipCard('Andrea Doria', 'Italy', 12.6, 4),
	new ShipCard('Giulio Cesare', 'Italy', 12.6, 4),
	new ShipCard('Littorio', 'Italy', 15, 9),
	new ShipCard('Vittoria Veneto', 'Italy', 15, 9),
	new ShipCard('Conte Di Cavour', 'Italy', 12.6, 4),
	new ShipCard('Roma', 'Italy', 14, 9),
	new ShipCard('Caio Duilio', 'Italy', 12.6, 4),

	new ShipCard('Duke of York', 'Great Britain', 14, 9),
	new ShipCard('Hood', 'Great Britain', 15, 5),
	new ShipCard('Repulse', 'Great Britain', 15, 4),
	new ShipCard('Revenge', 'Great Britain', 15, 4),
	new ShipCard('Nelson', 'Great Britain', 16, 9),
	new ShipCard('King George V', 'Great Britain', 14, 9),
	new ShipCard('Warspite', 'Great Britain', 14, 5),
	new ShipCard('Valiant', 'Great Britain', 15, 5),
	new ShipCard('Prince of Wales', 'Great Britain', 14, 9),
	new ShipCard('Rodney', 'Great Britain', 16, 9),
	new AircraftCarrierCard('Ark Royal', 'Great Britain', 3),
	new ShipCard('Ramillies', 'Great Britain', 15, 4),
	new ShipCard('Renown', 'Great Britain', 14, 5),

	new ShipCard('Lutzow', 'Germany', 11, 3),
	new ShipCard('Gneisinau', 'Germany', 11, 5),
	new ShipCard('Scharnhorst', 'Germany', 11, 5),
	new ShipCard('Bismark', 'Germany', 15, 8),
	new ShipCard('Tirpitz', 'Germany', 15, 8),
	new ShipCard('Graf Spee', 'Germany', 11, 3),
	new ShipCard('Scheer', 'Germany', 11, 3),
]

const ShipPile: React.FC = (): ReactElement => {
	return (
		<>
			<div>Ship Pile</div>
			<div>Size {shipPile.length}</div>
			<ul>
				{shipPile.map((s, idx) => (
					<li key={idx}>{s.info()}</li>
				))}
			</ul>
		</>
	)
}

export default ShipPile
