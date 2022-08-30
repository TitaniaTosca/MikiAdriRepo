function load_main(){
		window.location.href = "index.html";
}
function pass() {
  let pwd = prompt("Jelszó:");
  if (pwd != "muc") {
    pass();
  }
  else{
	  load_main();
  }
}
pass();