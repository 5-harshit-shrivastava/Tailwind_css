import React, {useRef , useState, useMemo ,useCallback} from "react";
import ReactDOM from "react-dom/client"

function App(){ 
    return (
        // <h1 className="bg-red-400 text-5xl rounded-2xl">Hello Coder Army</h1>
        <div className="flex flex-wrap justify-center gap-10">
            <div className="max-w-sm overflow-hidden bg-white shadow-md p-6 mt-4">
                <div>
                    <img className="w-80 h-60 rounded"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkd6hyFRmTnEeEE0Ndfzt5e7ptzr1HbsftZg&s"></img>
               </div>

                <div className="mt-2 font-bold text-2xl text-red-600">
                    <h1>Harshit Shrivastava</h1>
                </div>

                <div className="text-violet-600 mt-2">
                    <p>sexx</p>
                </div>

                <div className="mt-3 flex justify-center ">
                    <button className="bg-sky-400 p-1 rounded-xl text-white hover:bg-red-400">Know More</button>
                </div>
            </div>

            <div className="max-w-sm overflow-hidden bg-white shadow-md p-6 mt-4">
                <div>
                    <img className="w-80 h-60 rounded"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkd6hyFRmTnEeEE0Ndfzt5e7ptzr1HbsftZg&s"></img>
               </div>

                <div className="mt-2 font-bold text-2xl text-red-600">
                    <h1>Arvind Chacha</h1>
                </div>

                <div className="text-violet-600 mt-2">
                    <p>Wealth Hides In "Acres" Not in Accounts</p>
                </div>

                <div className="mt-3 flex justify-center ">
                    <button className="bg-sky-400 p-1 rounded-xl text-white hover:bg-red-400">Know More</button>
                </div>
            </div>

            <div className="max-w-sm overflow-hidden bg-white shadow-md p-6 mt-4">
                <div>
                    <img className="w-80 h-60 rounded"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkd6hyFRmTnEeEE0Ndfzt5e7ptzr1HbsftZg&s"></img>
               </div>

                <div className="mt-2 font-bold text-2xl text-red-600">
                    <h1>Rishi Upadhayay</h1>
                </div>

                <div className="text-violet-600 mt-2">
                    <p>Sab Khilaf Hai Madhav, Sab Harenge Madhav</p>
                </div>

                <div className="mt-3 flex justify-center ">
                    <button className="bg-sky-400 p-1 rounded-xl text-white hover:bg-red-400">Know More</button>
                </div>
            </div>

            <div className="max-w-sm overflow-hidden bg-white shadow-md p-6 mt-4">
                <div>
                    <img className="w-80 h-60 rounded"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkd6hyFRmTnEeEE0Ndfzt5e7ptzr1HbsftZg&s"></img>
               </div>

                <div className="mt-2 font-bold text-2xl text-red-600">
                    <h1>Aditya Gupta</h1>
                </div>

                <div className="text-violet-600 mt-2">
                    <p>Boobs</p>
                </div>

                <div className="mt-3 flex justify-center ">
                    <button className="bg-sky-400 p-1 rounded-xl text-white hover:bg-red-400">Know More</button>
                </div>
            </div>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);