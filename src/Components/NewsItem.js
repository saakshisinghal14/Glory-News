import React from 'react'
import '../index.css'
const NewsItem=(props)=> {

  
    // let mystyle={
    //   width: "286px",
    //   height: "210px", 
      
    // }
    
    let {title,description,imageUrl,NewUrl,publishedAt,author,source}=props
    return (
      <div className='my-2'>
        <div className="card">
          <div> 
        <span className=" position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
    {source} </span>
  <img src={imageUrl!=null?imageUrl: "https://ichef.bbci.co.uk/news/1024/branded_news/60D6/production/_127009742_gettyimages-1232582143.jpg"}className="card-img-top card" alt="..."/>
  <div className=" card-body" >
    <h5 className="card-title">{title}  </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By- {author==null?"unknown":author} On: {new Date(publishedAt).toUTCString()}</small></p>
    <a href={NewUrl} target="blank" className="btn btn-primary btn-sm">Read More</a>
  </div>
  </div>
  
</div>
      </div>
    )
  }


export default NewsItem
