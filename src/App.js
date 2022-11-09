
import React,{useState} from 'react'

import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  
 const apikey=process.env.REACT_APP_ENV
  const [progress, setprogress] = useState(0)
    
const setProgress=(progress)=>{
  setprogress(progress)
 }
 
    return (
<div>
    <BrowserRouter>
    
     <Navbar/>
     
     <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
     <Routes> 
        <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key='general' pageSize={6} country='in' category='general'/>} />
          <Route exact path="/business" element={<News setProgress={setProgress}apikey={apikey}  key='business' pageSize={6} country='in' category='business'/>} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key='entertainment' pageSize={6} country='in' category='entertainment'/>} />
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key='health' pageSize={6} country='in' category='health'/>} />
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key='science' pageSize={6} country='in' category='science'/>} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key='sports' pageSize={6} country='in' category='sports'/>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key='technology' pageSize={6} country='in' category='technology'/>} />
          
      </Routes>
   
     
     </BrowserRouter>
    </div>

     
    )
  
}

export default App