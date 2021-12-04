import { useState } from '#app'

export const useMasternodes = () => {
    const masternodes = useState('masternodes', () => [])

    const findMasternodes = () => {
        const { history } = useHistory()
        const rewards = history.value
            .filter(h => h.type === 'Mined')
            .map(h => h.amount)

    }

    return { masternodes, findMasternodes }
}