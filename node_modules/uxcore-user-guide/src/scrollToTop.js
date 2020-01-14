let scrollInterval;

export default function scrollToTop(_target) {
  const scrollHeight = window.scrollY;
  const target = Math.ceil(_target);
  const step = (target - scrollHeight) / 200 * 15;
  let scrollCount = 0;
  if (scrollInterval) {
    clearInterval(scrollInterval);
  }
  scrollInterval = setInterval(() => {
    if (Math.abs(window.scrollY - target) > Math.abs(step)) {
      scrollCount += 1;
      window.scrollTo(0, Math.ceil(scrollHeight + step * scrollCount));
    } else {
      window.scrollTo(0, target);
      clearInterval(scrollInterval);
      scrollInterval = undefined;
    }
  }, 15);
}
