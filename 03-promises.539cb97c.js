!function(){var e=document.querySelector('input[name = "delay"]'),o=document.querySelector('input[name = "step"]'),n=document.querySelector('input[name = "amount"]');function t(e,o){var n=Math.random()>.3;return new Promise((function(t,c){setTimeout((function(){n?(console.log("Success"),t({position:e,delay:o})):(console.log("Error"),c({position:e,delay:o}))}),o)}))}document.querySelector("form").addEventListener("submit",(function(u){u.preventDefault();var a=e.value,l=o.value,i=n.value;t().then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))})),console.log(a,l,i),c(e,o,n),e.value="",o.value="",n.value=""}));var c=function(){for(var c=0,u=1;u<n;u+=1)1===u?c=e:c+=o.value,t(u,c)}}();
//# sourceMappingURL=03-promises.539cb97c.js.map