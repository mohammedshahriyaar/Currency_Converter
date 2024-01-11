import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'
function App() {

  const [amount, setAmount] = useState()
  const [from, setFrom] =useState("usd")
  const [to ,setTo] = useState("inr")
  const [convertedAmount, setconvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from) 
  
  const options = Object.keys(currencyInfo) //options is currencyoptions

  const swap = () =>
  {
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)

  }

  const convert = ()=>setconvertedAmount(amount * currencyInfo[to]) //to convert given freq to that
  
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-start items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/693858/pexels-photo-693858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 ml-2 mr-96">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            CurrencyOptions={options}
                            onCurrencyChange={ (currency) => {
                              setFrom(currency)
                            }}
                            selectCurrency={from}
                            onAmountChange={(amount)=>setAmount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-gray-600 text-white px-3.5 py-1"
                            onClick={swap}
                        >
                            Swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            CurrencyOptions={options}
                            onCurrencyChange={ (currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable

                        />
                    </div>
                    <button type="submit" className="w-full bg-gray-600 text-white px-4 py-3 rounded-lg">
                        Convert { from.toUpperCase()} to { to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
)
}

export default App
