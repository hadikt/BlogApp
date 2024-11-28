'use client';
import { useTheme } from "next-themes";
import { use, useEffect,useState } from "react";


function themecomponent({children}:any) {

    const {theme,setTheme}=useTheme();
    const [mounted,setMounted]=useState(false)
    useEffect(() => 
        setMounted(true)
    , [])
    if(!mounted) return null
  return (
    <div className={theme}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
{children}
      </div>
    </div>
  )
}

export default themecomponent
