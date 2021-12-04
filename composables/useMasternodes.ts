import { useState } from '#app'

export const useMasternodes = () => {
    const masternodes = useState('masternodes', () => [])
    const masternodesLoaded = useState('masternodesLoaded', () => false)

    const findMasternodes = () => {
        const { history } = useHistory()
        const masternodesTransactions = history.value.filter(h => h.type === 'Mined')
        const masternodesAddresses = [...new Set(masternodesTransactions.map(t => t.address))]
        console.log(masternodesAddresses)

        masternodesAddresses.forEach(_address => {
            masternodes.value.push({
                address: _address,
                history: masternodesTransactions.filter(_transaction => _transaction.address === _address)
            })
        })
        masternodesLoaded.value = true
    }

    return { masternodes, masternodesLoaded, findMasternodes }
}