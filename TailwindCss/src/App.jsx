import { useState } from "react";

function App(props) {
  
const [open, setOpen]=useState(false);
const [theme,setTheme]=useState("light");  
  return(
  
  <div className={`${theme} min-h-screen justify-between text-slate-900 dark:bg-slate-900 dark:text-white`}>
  {/* Navbvar */}
<div className="flex items-center justify-between text-slate-900 dark:bg-slate-900 dark:text-white p-4">
  <div className="font-bold">Logo</div>

  {/* Desktop Nav */}
  <div className="hidden sm:flex gap-2">
    <span className="mr-2">Home</span>
    <span className="mr-2">About</span>
    <span className="mr-2">Contact</span>
    <button className="text-xl cursor-pointer" onClick={()=>setTheme(theme==="light" ? "dark" : "light")}>
      {theme=== "light" ? "⏾" : "🔆"}
    </button>
    </div>

    <button className="text-xl cursor-pointer sm:hidden" 
    onClick={()=>setOpen(!open)}>☰</button>
 
</div>
 {/* Mobile Nav */}
  {open &&(
  <div className="flex flex-col items-center gap-2 bg-slate-900 text-white dark:text-white p-4 sm:hidden">
    <span className="mr-2">Home</span>
    <span className="mr-2">About</span>
    <span className="mr-2">Contact</span>
    <button className="text-xl cursor-pointer sm:hidden" onClick={()=>setTheme(theme==="light" ? "dark" : "light")}>
      {theme=== "light" ? "⏾" : "🔆"}
    </button>
  </div>
  )
}

<div className="grid dark:bg-slate-900  text-white dark:text-white grid-cols-1 sm:grid-cols-2 p-6 gap-6 text-center font-semibold text-2xl sm:text-sm">
  <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500" >Feature One</div>
  <div className="bg-slate-500 p-4 rounded hover:bg-slate-600" >Feature Two</div>
  <div className="bg-slate-500 p-4 rounded hover:bg-slate-600" >Feature Three</div>
  <div className="bg-slate-500 p-4 rounded hover:bg-slate-600" >Feature Four</div>
  <div className="bg-slate-500 p-4 rounded hover:bg-slate-600" >Feature Five</div>
  <div className="bg-slate-500 p-4 rounded hover:bg-slate-600" >Feature Six</div>
</div>
</div>
  
  );
}

// 1->0.25 rem
//center
export default App
