    /* eslint-disable react/prop-types */
    /* eslint-disable no-unused-vars */
    import React, { useId } from "react";

    function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "USD",
    amountDisable = false,
    currencyDisable = false,
    className = "text-black",
    }) {
    const amountInputId = useId();

    return (
        <div className={`bg-gray-400 p-4 rounded-md text-lg flex ${className}`}>
        <div className="w-1/2">
            <label
            htmlFor={amountInputId}
            className="text-black/100 mb-4 inline-block"
            >
            {label}
            </label>
            <input
            id={amountInputId}
            className="outline-none text-black/100 w-full bg-transparent py-2"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
                onAmountChange && onAmountChange(Number(e.target.value))
            }
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black mb-1 w-full">Currency type</p>
            <select
            className="rounded-lg px-1 py-1 bg-gray-500 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
            >
            {currencyOptions.map((currency) => (
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
