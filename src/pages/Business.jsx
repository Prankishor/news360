import axios from 'axios';
import Card from './Cards/Card';
import './Styles/home.css'
import { useState } from 'react';

const Business = () => {

    const [news, setNews] = useState("")
    const getNews = async () => {
        await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ab7a89301bb44e5a8ad9301fbb2df69b')
            .then((res) => {
                console.log(res.data.articles)
                setNews(res.data.articles)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    getNews();

    return (
        <div className='news_container'>
            <h1>Business</h1>
            <div className='news_content'>
                {
                    news ? news.map((items, index) => (
                        <div className='news_cards'>
                            <Card title={items.title} content={items.content} img={items.urlToImage} url={items.url} />
                        </div>
                    ))
                        : "LOADING...."
                }
            </div>
        </div>
    )
}

export default Business;
