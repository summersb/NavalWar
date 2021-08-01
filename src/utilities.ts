import type {Card} from './Types'

const shuffleDeck = (array: Card[]): void => {
	let currentIndex: number = array.length

	// While there remain elements to shuffle…
	while (currentIndex) {

		// Pick a remaining element…
		const randomIndex:number = Math.floor(Math.random() * currentIndex--)

		// And swap it with the current element.

		const t: Card = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = t
	}
}

export default shuffleDeck
