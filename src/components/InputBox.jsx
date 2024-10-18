import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    CurrencyOptions = [],
    selectCurrency = "usd",  //doesnt matter what i give here name we can override later
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {


    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1
                    bg-gray-100 cursor-pointer
                     outline-none"
                    disabled={currencyDisable}
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>


                    {/* while looping in jsx in react always use key else perfomace degrades */}
                    {/* options to be displayed in that input field  */}
                    {CurrencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}


                </select>
            </div>
        </div>
    );
}

export default InputBox; 