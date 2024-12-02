// 'use client';
// import { useTheme } from "next-themes";
// import {  useEffect,useState } from "react";


// function Themecomponent({children}:any) {

//     const {theme,setTheme}=useTheme();
//     const [mounted,setMounted]=useState(false)
//     useEffect(() => 
//         setMounted(true)
//     , [])
//     if(!mounted) return null
//   return (
//     <div className={theme}>
//       <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
// {children}
//       </div>
//     </div>
//   )
// }

// export default Themecomponent
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeComponentProps {
  children: React.ReactNode;
}

function ThemeComponent({ children }: ThemeComponentProps) {
  const { theme } = useTheme(); // Removed `setTheme` if unused to avoid lint errors
  const [mounted, setMounted] = useState(false);

  // Ensures the component mounts properly on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until the client-side is fully mounted
  if (!mounted) return null;

  return (
    <div className={theme}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default ThemeComponent;
