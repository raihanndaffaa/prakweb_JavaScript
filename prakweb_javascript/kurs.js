			function kurs() {

		let user = document.getElementById("kurs").value;

		if (user == 1) {
			input = document.getElementById("nilai").value;
			nilai = 9915;
			hitung = nilai * input;
			document.getElementById("rupiah").value = 'Rp.' + hitung;
		}else if (user == 2) {
			input = document.getElementById("nilai").value;
			nilai = 13472;
			hitung = nilai * input;
			document.getElementById("rupiah").value = 'Rp' + hitung;
		}else if (user == 3) {
			input = document.getElementById("nilai").value;
			nilai = 874;
			hitung = nilai * input;
			document.getElementById("rupiah").value = 'Rp.' + hitung;
		}else if (user == 4) {
			input = document.getElementById("nilai").value;
			nilai = 120;
			hitung = nilai * input;
			document.getElementById("rupiah").value = 'Rp.'+ hitung;
		}else if (user == 5) {
			input = document.getElementById("nilai").value;
			nilai = 15888;
			hitung = nilai * input;
			document.getElementById("rupiah").value = 'Rp' + hitung;
		}else if (user == 6) {
			input = document.getElementById("nilai").value;
			nilai = 3592;
			hitung = nilai * input;
			document.getElementById("rupiah").value = 'Rp.' + hitung;
		}
	}