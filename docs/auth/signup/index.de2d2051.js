null!=Cookies.get("token")&&(window.location.href="/dashboard");const signupForm=document.getElementById("signup-form");function displayWarning(e){var n=document.getElementById("warningBox");n.innerHTML=e,n.style.display="block"}signupForm.onsubmit=()=>{const e=document.getElementById("username").value,n=document.getElementById("email").value,t=document.getElementById("password").value;let a=new Request("https://fairfield-programming.herokuapp.com/user/signup",{method:"POST",body:JSON.stringify({email:n,password:t,username:e}),headers:new Headers({"Content-Type":"application/json"})});return fetch(a).then((e=>{200==e.status?e.json().then((e=>{Cookies.set("token",e.token),alert("Email has been sent to you, Please view it to validate your email address. ( The email will expire in 4 days )"),window.location.href="/dashboard"})):403==e.status?displayWarning("Account Already Exists."):displayWarning("Invalid Username, Email or Password.")})).catch((e=>{displayWarning("Internal Error- Try Reloading the Page.")})),!1};
//# sourceMappingURL=index.de2d2051.js.map