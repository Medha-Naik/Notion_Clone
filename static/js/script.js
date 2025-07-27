document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.team-nav a');
  const teamImg = document.getElementById('teamImg');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const imagePath = link.getAttribute('data-image');

      if (imagePath && window.STATIC_URL) {
        const fullPath = window.STATIC_URL + imagePath + '?t=' + new Date().getTime();
        teamImg.src = fullPath;

        teamImg.style.display = 'none';
        setTimeout(() => {
          teamImg.style.display = 'block';
          teamImg.onload = () => {}; // Optional: Remove if not needed
          teamImg.onerror = () => console.error('Failed to load image:', fullPath);
        }, 100);
      }
    });
  });
});3