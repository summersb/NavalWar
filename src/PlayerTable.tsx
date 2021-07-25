import React, { ReactElement } from 'react'
import ActiveShips from './ActiveShips'
import DeepSixPile from './DeepSixPile'
import PlayerHand from './PlayerHand'

const PlayerTable: React.FC = (): ReactElement => {
	return (
		<>
			<PlayerHand />
			<ActiveShips />
			<DeepSixPile />
		</>
	)
}

export default PlayerTable
