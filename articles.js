const articles = [
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('articles-container');
    if (container) {
      articles.forEach(article => {
        const div = document.createElement('div');
        div.className = 'article';
        div.innerHTML = `<h2><a href="article.html?id=${article.id}">${article.title}</a></h2>`;
        container.appendChild(div);
      });
    }
  });
  