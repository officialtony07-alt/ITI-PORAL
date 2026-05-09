const loginBtn = document.getElementById("loginBtn");
const modal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");

loginBtn.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if(e.target == modal){
    modal.style.display = "none";
  }
};

document.getElementById("loginForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if(username === "student" && password === "1234"){

    alert("Login Successful");

    localStorage.setItem("itiLogin","true");

    modal.style.display = "none"; // ✔ only important fix

  }else{

    alert("Invalid Username or Password");

  }

});