window.matchMedia("(max-width: 1024px)").matches&&document.body.appendChild(createJS("/script/m-com.js")),window.matchMedia("(min-width: 1025px)").matches&&(document.body.appendChild(createJS("/script/com.js")),document.body.appendChild(createJS("/script/index.js")));let chosen,heroparam,autohero,heroscrollcount,autohero_active,intro_active,nav_aniactive,reason_active,proc_active,tech_active,faq_active,who_we_active,sno,herobtn=document.querySelector("#k > a"),navList=document.querySelectorAll(".-m"),tempnavList=Array.from(navList),point=document.querySelectorAll("#b > p:nth-child(odd)"),rocket=document.querySelector("#h"),servicescont=document.querySelector("#-q"),servslidescroll=servicescont.scrollWidth/8,heroslide=document.getElementById("-k"),heroslidescroll=heroslide.offsetHeight,intro_text=document.querySelectorAll("#l>p > span"),chev=document.querySelector(".e"),navcont=document.querySelector("#b"),whyhead1=document.querySelector("#-c > h1"),whyhead2=document.querySelector("#-c > h2"),rhead=document.querySelectorAll(".-u"),reasons=document.querySelectorAll("._j"),prochead1=document.querySelector("#v > h1"),prochead2=document.querySelector("#v > h2"),procs=document.querySelectorAll(".-q"),proc_img=document.querySelector("#-j"),techh1=document.querySelector("#-i > h1"),techs=document.querySelector(".o"),faq_bg=document.getElementById("-v"),faqs=document.querySelectorAll(".-n"),faqh1=document.querySelector("#f > h1"),faq_btn=document.querySelector("#f > a"),graph=document.querySelector("#--"),who_we=document.querySelector("#y > div"),connect_head=document.querySelector("#g > p:nth-child(1)"),connect_ptags=document.querySelectorAll("#g >.-j"),follow_head=document.querySelector("#g > p:nth-child(8)"),sm_icon=document.querySelectorAll("#i.-d");function reorderNav(e){return chosen=tempnavList[e],tempnavList.splice(e,1),tempnavList.splice(3,0,chosen),chosen}function updateNav(e){chosen=reorderNav(e),tempnavList.forEach(((e,t)=>{const o=document.createElement("p");o.className="-m",o.id=tempnavList[t].id,o.textContent=tempnavList[t].textContent;const n=navList[t];o.classList.toggle("nav-ani"),rocket.classList.toggle("_q"),toggleclasspointer(),n.parentNode.replaceChild(o,n),setTimeout((()=>{o.classList.toggle("nav-ani"),rocket.classList.toggle("_q"),toggleclasspointer()}),250)})),serviceSlider(chosen.id),navEvent()}function navEvent(){navList=document.querySelectorAll(".-m"),navList.forEach(((e,t)=>{e.addEventListener("click",(()=>{updateNav(t)}),{once:!0})}))}function toggleclasspointer(){point.forEach((e=>{e.classList.toggle("k")}))}function serviceSlider(e){"md"===e?sno=0:"wd"===e?sno=1:"dd"===e?sno=2:"ui"===e?sno=3:"seo"===e?sno=4:"ss"===e?sno=5:"dm"===e?sno=6:"bauto"===e&&(sno=7),servicescont.scrollTo(sno*servslidescroll,0)}function heroscroll(e){heroscrollcount<5?1===e?heroslide.scrollBy(0,heroslidescroll):heroslide.scrollBy(0,-heroslidescroll):(clearInterval(autohero),toggglehero()),heroscrollcount+=1}function toggglehero(){heroparam=heroparam?0:1,autohero=setInterval((()=>{heroscroll(heroparam)}),2e3),heroscrollcount=0,autohero_active=!0}navEvent(),toggglehero();const nameInput=document.getElementById("c-name"),phoneInput=document.getElementById("q"),emailInput=document.getElementById("c-email"),reqInput=document.getElementById("creq"),sendButton=document.getElementById("send-btn");function setWarning(e,t){e.style.borderColor="red",e.value="",e.setAttribute("placeholder",t),e.addEventListener("focus",(function(){this.style.borderColor="#4E4FEB"}),{once:!0})}function isValidEmail(e){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)}function clearquote(){nameInput.value="",phoneInput.value="",emailInput.value="",reqInput.value=""}sendButton.addEventListener("click",(()=>{if(phoneInput.value.length>10||10!==phoneInput.value.length)return void setWarning(phoneInput,"10 digits only");if(!isValidEmail(emailInput.value))return void setWarning(emailInput,"Invalid Email");if(nameInput.value.length>100)return void setWarning(nameInput,"Try shorter name");if(""===reqInput.value)return void setWarning(reqInput,"Requirement?");validated=!0;const e=new FormData;e.append("cname",nameInput.value),e.append("cphone",phoneInput.value),e.append("cemail",emailInput.value),e.append("creq",reqInput.value),clearquote(),fetch("/server/getform.php",{method:"POST",body:e}).then((e=>e.json())).then((e=>{1===e?alert("Thanks for your interest :)\n We will contact you soon"):alert("Sorry :( we failed to get your request.\nKindly Try Again.")})).catch((e=>{}))}));