import React, { useState } from "react";
import { Link } from "react-router-dom";
import newsData from "./newsData.js";
import "./NewsPage.css";
import { Helmet } from "react-helmet";


const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 3;

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="news-page">
      <Helmet>
        <title>News | EcoPlantProtein</title>
        <meta
          name="description"
          content="News."
        />
      </Helmet>
      <div className="news-header">
        <h1>Latest News & Updates</h1>
        <p>Stay updated with our latest achievements and milestones</p>
      </div>

      <div className="news-grid">
        {currentNews.map((news) => (
          <div key={news.id} className="news-card">
            <div className="news-image-container">
              <img src={news.image} alt={news.title} className="news-image" />
            </div>
            <div className="news-content">
              <span className="news-date">{news.date}</span>
              <h2 className="news-title">{news.title}</h2>
              <p className="news-excerpt">{news.excerpt}</p>
              <div className="read-more-container">
                <Link to={`/news/${news.id}`} className="read-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(newsData.length / newsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`page-number ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default NewsPage;
