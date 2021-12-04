import Papa from "papaparse"
import { useState } from '#app'

export const useHistory = () => {
    const file = useState('file', () => null)
    const history = useState('history', () => [])

    const processFile = () => {
        return new Promise((resolve, reject) => {
            Papa.parse(file.value, {
                complete: (resp) => {
                    if (resp.data) {
                        resp.data.slice(1, resp.data.length).forEach((line) => {
                            const historyLine = {
                                confirmed: line[0],
                                date: line[1],
                                type: line[2],
                                label: line[3],
                                address: line[4],
                                amount: parseFloat(line[5]),
                                id: line[6],
                            };
                            history.value.push(historyLine);
                        });
                    }
                    resolve()
                },
                error() {
                    reject
                }
            });
        })
    }

    const findRewards = () => {
        const rewards = history.value
            .filter(h => h.type === 'Mined')
            .map(h => h.amount)
        console.log(rewards)
    }

    return {
        file,
        history,
        processFile,
        findRewards
    }
}
