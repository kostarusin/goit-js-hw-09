!function(){var t={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]")};t.startButton.addEventListener("click",(function(){t.startButton.disabled=!0,n=setInterval(o,1e3)})),t.stopButton.addEventListener("click",(function(){t.startButton.disabled=!1,clearInterval(n)}));var n=null;function o(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}}();
//# sourceMappingURL=01-color-switcher.fe789bfc.js.map
