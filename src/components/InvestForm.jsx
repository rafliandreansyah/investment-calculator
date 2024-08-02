import Input from "./Input.jsx"

export default function InvestForm({
    initialInvesmentHandler,
    annualInvesmentHandler,
    expectedReturnHandler,
    durationHandler
}) {
    return (
        <div id="user-input">
            <div className="input-group">
                <Input labelName="initial invesment" onChangeInput={(value) => initialInvesmentHandler(value)} />
                <Input labelName="annual invesment" onChangeInput={(value) => annualInvesmentHandler(value)} />
            </div>
            <div className="input-group">
                <Input labelName="expected return" onChangeInput={(value) => expectedReturnHandler(value)} />
                <Input labelName="duration" onChangeInput={(value) => durationHandler(value)} />
            </div>
        </div>
    )
}