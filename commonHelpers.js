import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as d}from"./assets/vendor-77e16229.js";const n=document.querySelector(".timer"),l=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]");let m;o.disabled=!0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(console.log(t[0]),t[0]<new Date)return o.disabled=!0,d.error({title:"Error",message:"Please choose a date in the future",position:"topRight"});o.disabled=!1,m=t[0]}};f(l,y);function p(t){const s=Math.floor(t/864e5),e=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:e,minutes:i,seconds:h}}o.addEventListener("click",()=>{const t=setInterval(()=>{const r=m-Date.now();if(r<=0)return clearInterval(t),d.success({title:"Countdown Finished",message:"Timer has ended!",position:"topRight"});const{days:a,hours:u,minutes:c,seconds:s}=p(r);n.querySelector(".js-days").textContent=e(a),n.querySelector(".js-hours").textContent=e(u),n.querySelector(".js-minutes").textContent=e(c),n.querySelector(".js-seconds").textContent=e(s);function e(i){return String(i).padStart(2,"0")}},1e3);o.disabled=!0,l.disabled=!0});
//# sourceMappingURL=commonHelpers.js.map
