var sld_nmbr = 1;
			slds(sld_nmbr);
			function arws(n) {
				slds(sld_nmbr += n);
			}
			function sld_nm(n) {
				slds(sld_nmbr = n);
			}
			function slds(n) {
				var i;
				var slides = document.getElementsByClassName("s|ids");
				var dots = document.getElementsByClassName("ndictr");
				if (n > slides.length) { sld_nmbr = 1 }
				if (n < 1) { sld_nmbr = slides.length }
				for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
				for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace(" chng", "");}
				slides[sld_nmbr - 1].style.display = "block";
				dots[sld_nmbr - 1].className += " chng";
			}