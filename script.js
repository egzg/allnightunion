
  // (1) 마우스 스크롤 액션
  const elementsToObserve = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.8 });

  elementsToObserve.forEach(element => observer.observe(element));

  // (2) 이미지 슬라이드
  const imageUrls = [
    "https://ibb.co/C5zPyzV9",
    "https://ibb.co/LXcPbV2R",
    "https://ibb.co/8L0wwqB2"
  ];

  const slidesContainer = document.getElementById('slidesContainer');
  imageUrls.forEach(url => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.backgroundImage = `url('${url}')`;
    slidesContainer.appendChild(slide);
  });

  let currentIndex = 0;
  const totalSlides = imageUrls.length;  // 슬라이드 수 저장

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;  
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}vw)`; 
  }
  setInterval(showNextSlide, 6000); 
