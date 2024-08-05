import { calculateInvestmentResults, formatter } from '../util/investment'

export default function TablePrediction({ data }) {
    console.log(data)
    const listData = calculateInvestmentResults({
        initialInvestment: data.initialInvesment,
        annualInvestment: data.annualInvesment,
        expectedReturn: data.expctedReturn,
        duration: data.duration
    })
    
    let initialInvesment;
    if (listData.length > 0) {
        initialInvesment = listData[0].valueEndOfYear - listData[0].interest * listData[0].year - listData[0].annualInvestment
    }
    

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
                const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvesment
                const totalAmountInvested = item.valueEndOfYear - totalInterest
                return (
                    <tr key={item.year}>
                        <th>{item.year}</th>
                        <th>{formatter.format(item.valueEndOfYear)}</th>
                        <th>{formatter.format(item.interest)}</th>
                        <th>{formatter.format(totalInterest)}</th>
                        <th>{formatter.format(totalAmountInvested)}</th>
                    </tr>
                )
            })
            }

        </tbody>
    </table>)
}