const API_URL = process.env.REACT_APP_API_URL;

export async function getFeaturedArticles() {
  const res = await fetch(`${API_URL}/articles/featured`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}