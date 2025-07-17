import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import newsData from "./newsData";
import "./NewsPage.css";

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const newsItem = newsData.find((item) => item.id === Number(id));

  if (!newsItem) {
    return (
      <div className="news-article">
        <div className="article-not-found">
          <h2>Article not found</h2>
          <button onClick={() => navigate("/news")} className="back-button">
            &larr; Back to News
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="news-article">
      <div className="article-container">
        <button onClick={() => navigate("/news")} className="back-button">
          &larr; Back to News
        </button>

        <div className="article-header">
          <span className="article-date">{newsItem.date}</span>
          <h1>{newsItem.title}</h1>
        </div>

        <div className="article-image-container">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="article-image"
          />
        </div>

        <div className="article-content">
          {newsItem.fullContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
