// Scroll to top button
// Adapted from: https://w3collective.com/scroll-to-top-button-javascript/


document.addEventListener('DOMContentLoaded', function () {
  const scrollTop = function () {
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "&uarr;";
  scrollBtn.setAttribute("id", "scroll-btn");
  document.body.appendChild(scrollBtn);
  const scrollBtnDisplay = function () {
  window.scrollY > window.innerHeight
    ? scrollBtn.classList.add("show")
    : scrollBtn.classList.remove("show");
	};
	window.addEventListener("scroll", scrollBtnDisplay);
	const scrollWindow = function () {  
		if (window.scrollY != 0) {
			setTimeout(function () {
			window.scrollTo(0, window.scrollY - 500);
				scrollWindow();
			}, 10);
		}
	};
	scrollBtn.addEventListener("click", scrollWindow);
	};
	scrollTop();
});