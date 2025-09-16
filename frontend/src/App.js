import React, { useEffect, useState } from 'react';
import { getFeaturedArticles } from './api';

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFeaturedArticles()
      .then(data => setArticles(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Featured Articles</h1>
      {error && <p style={{color:'red'}}>Error: {error}</p>}
      <ul>
        {articles.map(a => <li key={a.id}>{a.title}</li>)}
      </ul>
    </div>
  );
}

export default App;