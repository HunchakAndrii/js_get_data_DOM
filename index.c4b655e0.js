var e=document.querySelectorAll(".population"),t=[];e.forEach(function(e){t.push(e.innerText)});var n=t.map(function(e){return+e.replaceAll(",","")}),r=n.reduce(function(e,t){return e+t},0),o=r/n.length;document.querySelector(".total-population").textContent=r.toString().split("").reverse().map(function(e,t){return t%3==0&&0!==t?"".concat(e,","):e}).reverse().join(""),document.querySelector(".average-population").textContent=o.toString().split("").reverse().map(function(e,t){return t%3==0&&0!==t?"".concat(e,","):e}).reverse().join("");
//# sourceMappingURL=index.c4b655e0.js.map
