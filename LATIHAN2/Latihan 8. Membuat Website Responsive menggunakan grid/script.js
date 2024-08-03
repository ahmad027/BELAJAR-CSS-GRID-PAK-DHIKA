const menuToggle = document.querySelector('.menu-toggle');

const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  navUl.classList.toggle('slide');
});

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');

  const fetchImages = async () => {
    try {
      const response = await fetch(
        'https://api.unsplash.com/photos?per_page=10',
        {
          headers: {
            Authorization:
              'Client-ID 89AomeS4Zo-eKjPTsI39QDpMYzeYpeab8URIGtpYHEI',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }

      const images = await response.json();

      images.forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.small;
        imgElement.alt = image.alt_description || 'Unsplash Image';
        gallery.appendChild(imgElement);
      });
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  fetchImages();
});
