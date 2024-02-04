// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Functionality for toggling active state in navigation
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          navLinks.forEach(navLink => navLink.classList.remove('active'));
          this.classList.add('active');
      });
  });

  // Simulating loading trending content
  const trendingContent = document.querySelector('.trending');
  const loader = document.createElement('div');
  loader.classList.add('loader');
  trendingContent.appendChild(loader);

  setTimeout(() => {
      loader.remove();
      // Displaying trending content
      trendingContent.innerHTML = `
          <div class="container">
              <h2>Trending Now</h2>
              <div class="content-item">
                  <img src="movie1.jpeg" alt="Movie 1">
                  <h3>Movie 1</h3>
              </div>
              <div class="content-item">
                  <img src="movie2.jpeg" alt="Movie 2">
                  <h3>Movie 2</h3>
              </div>
              <div class="content-item">
                  <img src="movie3.jpeg" alt="Series 1">
                  <h3>Series 1</h3>
              </div>
          </div>
      `;
  }, 2000);
});
