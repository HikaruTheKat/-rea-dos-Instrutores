VanillaTilt.init(document.querySelectorAll(".instrutores-card"),{max:25,speed:400,glare:!0,"max-glare":.3});const openGameBtn=document.getElementById("openGame"),gamePopup=document.getElementById("gamePopup"),closePopupBtn=document.getElementById("closePopup");let gameInitialized=!1;openGameBtn.addEventListener("click",()=>{gamePopup.classList.add("active"),gameInitialized||(iniciarJogo(),gameInitialized=!0)}),closePopupBtn.addEventListener("click",()=>{gamePopup.classList.remove("active");const a=document.getElementById("gameCanvas").getContext("2d");a.clearRect(0,0,400,400)});function iniciarJogo(){function a(){const a=Math.random()*(g.height/2);return{x:g.width,top:a,bottom:a+q}}function b(){h.beginPath(),h.arc(j,i,k,0,2*Math.PI),h.fillStyle="yellow",h.fill(),h.closePath()}function c(){o.forEach(a=>{h.fillStyle="green",h.fillRect(a.x,0,p,a.top),h.fillRect(a.x,a.bottom,p,g.height-a.bottom)})}function d(){o.forEach(b=>{b.x-=r,60>b.x&&40<b.x+p&&(i-k<b.top||i+k>b.bottom)&&(t=!0),0>b.x+p&&(o.shift(),o.push(a()),s++)})}function e(){h.fillStyle="black",h.font="16px Arial",h.fillText(`Score: ${s}`,10,20)}function f(){return t?(h.fillStyle="black",h.font="20px Arial",void h.fillText("Game Over! Pressione Space ou clique para reiniciar",50,200)):void(h.clearRect(0,0,g.width,g.height),n+=l,i+=n,(i+k>g.height||0>i-k)&&(t=!0),d(),b(),c(),e(),requestAnimationFrame(f))}const g=document.getElementById("gameCanvas"),h=g.getContext("2d");let i=g.height/2,j=50;const k=10;let l=.4,m=-8,n=0;const o=[],p=30,q=100,r=2;let s=0,t=!1;o.push(a()),window.addEventListener("keydown",b=>{"Space"!==b.code||t||(n=m),t&&("Space"===b.code||"Enter"===b.code)&&(t=!1,s=0,o.length=0,o.push(a()),i=g.height/2,n=0,f())}),window.addEventListener("click",()=>{t?(t=!1,s=0,o.length=0,o.push(a()),i=g.height/2,n=0,f()):n=m}),f()}