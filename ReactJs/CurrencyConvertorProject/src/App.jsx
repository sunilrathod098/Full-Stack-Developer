/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(fromCurrency)

  const options = Object.keys(currencyInfo);
  console.log("Available currencies:", options);

  if (!options.includes(fromCurrency)) {
    alert(`Currency ${toCurrency.toLowerCase()} not available for conversion.`)
  }

  const swapCurrency = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setConvertedAmount(amount);
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency])
  }

  // const convert = () => {
  //   const rate = currencyInfo[toCurrency];
  //   if (rate) {
  //     setConvertedAmount(amount * rate);
  //   } else {
  //     alert("Conversion rate not found for selected currencies.");
  //   }
  // };
  
  
    return (
      <div
        className="w-full text-black bg-blue-600 text-4xl h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/20205839/pexels-photo-20205839/free-photo-of-coins-on-concrete-in-downtown.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="w-1/2 p-10 bg-white rounded-lg shadow-lg">
          World Currency Converter App
        </div>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-black/0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full text-black mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setAmount(amount)}
                  selectCurrency={fromCurrency}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swapCurrency}
                >
                  Swap
                </button>
              </div>
              <div className="w-full text-black mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setToCurrency(currency)}
                  selectCurrency={toCurrency}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {fromCurrency.toUpperCase()} to{" "}
                {toCurrency.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default App
