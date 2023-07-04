function lazyLoadImage(entry) {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  }
  
  const images = document.querySelectorAll('img[data-src]');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(lazyLoadImage);
  }, {
    root: null,
    threshold: 0.5,
    rootMargin: '0px 0px 100px 0px'
  });
  
  images.forEach(img => observer.observe(img));
