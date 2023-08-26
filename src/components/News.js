import React, {useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News=(props)=>{
const [articles,setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults, setTotalResult] = useState(0)
 
  const  updateNews=async()=>{
    props.setProgress(0)
const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
setLoading(true)
    let data = await fetch(url);
    let parsdData = await data.json();
    setArticles(parsdData.articles)
    setTotalResult(parsdData.totalResults)
    setLoading(false)
     
    props.setProgress(100)
  }
  // useEffect(() => {
  // updateNews();

  // }, [])
  
const fetchMoreData = async() => {
  
const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
setPage(page+1)
let data = await fetch(url);
 let parsdData = await data.json();
 console.log(parsdData);
 setArticles(articles.concat(parsdData.articles))
   setTotalResult(parsdData.totalResults)


};
    return (
      <>
        <h1 className="text-center" style={{margin:'40px,0px', marginTop:'90px'}}>NewsWallaha - Top HeadLines</h1>
      { loading && <Spinner/>} 
     <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          { articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url} author={element.author} 
                  date={element.publishedAt} source={element.source.name}
                />
              </div>  
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
       </>
      
    );
  
}
News.defaultProps = {
  country:'in',
  pageSize:8,
  category:'general',
 }
  News.propTypes = {
   country: PropTypes.string,
   pageSize: PropTypes.number,
   category: PropTypes.string,
 }
 

export default News;
