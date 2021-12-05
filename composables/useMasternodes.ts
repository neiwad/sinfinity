import { useState } from '#app'
import { computed } from "vue"

const reducer = (previousValue, currentValue) => previousValue + currentValue;

export const useMasternodes = () => {
    const masternodes = useState('masternodes', () => [])
    const masternodesLoaded = useState('masternodesLoaded', () => false)

    const roi = computed(() => {
        return masternodes.value.length
            ? parseInt(masternodes.value.map(m => m.roi).reduce(reducer) / masternodes.value.length)
            : null
    })

    const findMasternodes = () => {
        const { history } = useHistory()
        const masternodesTransactions = history.value.filter(h => h.type === 'Mined')
        const masternodesAddresses = [...new Set(masternodesTransactions.map(t => t.address))]

        masternodesAddresses.forEach(_address => {
            const masternodeHistory = masternodesTransactions.filter(_transaction => _transaction.address === _address)
            const rewards = masternodeHistory.map(h => { return parseInt(h.amount) }).reduce(reducer)
            const roi = parseInt((rewards - 100000) / 100000 * 100)
            masternodes.value.push({
                address: _address,
                history: masternodeHistory,
                rewards: rewards,
                burned: 100000,
                roi: roi,
                color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
            })
        })
        masternodesLoaded.value = true
    }

    return { masternodes, masternodesLoaded, roi, findMasternodes }
}