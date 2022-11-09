import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News=(props)=>  {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResult] = useState(0)
  
  
 const capitalizeFirstLetter=(string)=> 
 {return string.charAt(0).toUpperCase() + string.slice(1);}


 const updateNews= async ()=>{
  props.setProgress(10);
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
  props.setProgress(30);
  setloading(true)
  
  let data=await fetch(url);
  let parsedData=await data.json()
  props.setProgress(70);
 // console.log(parsedData)
  setarticles(parsedData.articles)
  setloading(false)
  settotalResult(parsedData.totalResults)
  
  props.setProgress(100);
 }

   
    useEffect(() => {
      document.title=`${capitalizeFirstLetter(props.category)} - Glory News`
      updateNews()
     // eslint-disable-next-line
    }, [])
   
   const handleprevclick= async()=>{
      setpage(page-1)
      updateNews() }

 const handleNextclick=async()=>{
   setpage(page+1)
    updateNews()  }
 
   
   // console.log("render")
    return (
      <div className='container my-3' >
        <h1 className='text-center'style={{'paddingTop': '45px'}}>GloryNews - Top  {capitalizeFirstLetter(props.category)} Headlines </h1>

       {(loading===true)&&<Spinner/>} 
        
        
       
       {(loading===false) &&<div className="row">
        {articles.map((e)=>{
     return <div className="col-md-4" key={e.url} > < NewsItem title={e.title} description={e.description} imageUrl={e.urlToImage} NewUrl={e.url} author={e.author} publishedAt={e.publishedAt} source={e.source.name}/></div>
     }   )}
      
     
     </div>}
     <div className="conatiner d-flex justify-content-between">
     <button disabled={page<=1} type="button" className="btn btn-info" onClick={handleprevclick}>&larr;Prev</button>
     <p style={{color:'GrayText'}}>page {page}</p>
     <button type="button" disabled={page+1>totalResults/props.pageSize} className="btn btn-info" onClick={handleNextclick}>next&rarr;</button>
     </div>
     </div>
    )
  
    }
News.defaultProps={
  country:'in',
  pageSize:8,
category:'general',
 }

News.propTypes={
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
 }

export default News

