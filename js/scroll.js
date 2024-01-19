(function () {
	var doc = document.documentElement;
	var w = window;

	var prevScroll = w.scrollY || doc.scrollTop;
	var curScroll;
	var direction = 0;
	var prevDirection = 0;

	var header = document.getElementById("header");
	var dropdown = document.querySelector(".dropdown-menu");

	var checkScroll = function () {
		/*
		 ** Find the direction of scroll
		 ** 0 - initial, 1 - up, 2 - down
		 */

		curScroll = w.scrollY || doc.scrollTop;
		if (curScroll > prevScroll) {
			//scrolled up
			direction = 2;
		} else if (curScroll < prevScroll) {
			//scrolled down
			direction = 1;
		}

		if (direction !== prevDirection) {
			toggleHeader(direction, curScroll);
		}
		//When at top of page close header
		if (window.scrollY == 0) header.classList.add("hide");
		//Close Dropdown when scrolld
		try {
			if (dropdown.classList.contains("show"))
				dropdown.classList.remove("show");
		} catch {}
		prevScroll = curScroll;
	};

	var toggleHeader = function (direction, curScroll) {
		if (direction === 2 && curScroll > 208) {
			//replace 52 with the height of your header in px
			header.classList.add("hide");

			prevDirection = direction;
		} else if (direction === 1) {
			header.classList.remove("hide");
			prevDirection = direction;
		}
	};

	window.addEventListener("scroll", checkScroll);
})();
