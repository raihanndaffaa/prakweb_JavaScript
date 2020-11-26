function validasi() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if (user == "" && pass == "") {
		alert('Username dan Password Tidak Boleh Kosong');
		return false;
	}
	else if (pass.length < 8){
		alert('Password Kurang Dari 8');
		return false;
	}
	else if (user == "raihanndaffaa" && pass == "raihanndaffaa"){
		alert('Anda Berhasil Login');
		window.location = "home.html";
		return false;
	}else{
		alert("Username / Password Anda Salah, Coba Lagi");
	}
		
}