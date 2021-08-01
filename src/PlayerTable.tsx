import React, { ReactElement } from 'react'
import ActiveShips from './ActiveShips'
import DeepSixPile from './DeepSixPile'
import PlayerHand from './PlayerHand'
import SpecialCardsPlayed from './SpecialCardsPlayed'

const PlayerTable: React.FC = (): ReactElement => {
	return (
		<>
			<PlayerHand />
			<SpecialCardsPlayed />
			<ActiveShips />
			<DeepSixPile />
		</>
	)
}

export default PlayerTable
