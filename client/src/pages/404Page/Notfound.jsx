import React from 'react';
import './404Page.css';
import {Link} from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="error-page">
      <div className="container">
        <h1 className="title">404</h1>
        <p className="description">Oops! The page you're looking for doesn't exist.</p>
        <Link to='/home' className="home-link" >Go to Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
