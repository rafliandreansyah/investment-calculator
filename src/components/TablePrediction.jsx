import { calculateInvestmentResults, formatter } from '../util/investment'

export default function TablePrediction({ data }) {
    console.log(data)
    const listData = calculateInvestmentResults({
        initialInvestment: data.initialInvesment,
        annualInvestment: data.annualInvesment,
        expectedReturn: data.expctedReturn,
        duration: data.duration
    })

    return (listData.length > 0 && <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Invest Value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {listData.map((item) => {
                console.log('item: ' + item)
                return (
                    <tr key={item.year}>
                        <th>{item.year}</th>
                        <th>{formatter.format(item.valueEndOfYear)}</th>
                        <th>{formatter.format(item.interest)}</th>
                        <th>{formatter.format(item.annualInvestment)}</th>
                        <th>{formatter.format(item.valueEndOfYear - item.annualInvestment)}</th>
                    </tr>
                )
            })
            }

        </tbody>
    </table>)
}