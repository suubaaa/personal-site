import { useEffect, useState } from "react";

export default function Taskbar() {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(interval);
        }, []);
    
    return(
        <div>
            <div className="flex justify-between fixed bottom-0 w-full h-8 bg-blue-700">
                <div className="w-20 h-full bg-green-600 rounded-r-md flex items-center px-2">
                    <img src="/start.png" />
                    <p className="text-white text-center text-lg italic" >start</p>
                </div>
                <div className="w-fit h-full bg-blue-500 rounded-l-xs flex items-center px-2">
                    <p className="text-white text-center font-light text-sm">{time}</p>
                </div>
            </div>
        </div>
    )
}