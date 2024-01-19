import React from "react";
import { useEffect, useState } from 'react'
import { peticion } from "../services/AppService";

function News() {

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await peticion();
                console.log('News data:', data); // Log de los datos
                setNews(data.articles);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching news:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {news && news.length > 0 ? (
                        <div>
                            {news.map((article, i) => (
                                <div className="news" key={i}>
                                    <h2>{article.title}</h2>
                                    <p>{article.author}, {article.publishedAt}</p>
                                    <img src={article.urlToImage} alt={article.title} />
                                    <p>{article.description}</p>
                                    <p>{article.content}</p>
                                    <p>Link to complete <a target="_blank" rel="noopener noreferrer" href={article.url}>news</a></p>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Nothing here 😕</p>
                    )}
                </>
            )}
        </>
    )

}

export default News;