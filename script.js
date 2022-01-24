const body = document.body;
const documentElement = document.documentElement;
const progressBarEl = document.getElementById('progressBar');

const scrollTop = () => Math.max(body.scrollTop, documentElement.scrollTop);
const handleOnScroll = () => {
  const scrollAmount = scrollTop() / (documentElement.scrollHeight - documentElement.clientHeight);
  const scrollPercentage = Math.round(scrollAmount * 100);
  
  progressBarEl.style.width = `${scrollPercentage}%`
};

window.addEventListener('scroll', handleOnScroll);