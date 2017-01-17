var windowOnloadFunction = window.onload;
window.onload = (function()
	{
		if (typeof windowOnloadFunction === "function") {
			windowOnloadFunction() };
			var css=document.createElement("link");
			css.type="text/css"; 
			css.rel="stylesheet";
			css.href="cbstyle.min.css";
			document.body.appendChild(css);

			var newDiv=document.createElement("div");
			newDiv.innerHTML="5b2cb8fc-48ce-473e-9527-3956a0db095a";
			newDiv.id="cbpwrId"; 
			newDiv.style.display="none";
			document.body.appendChild(newDiv);

			var js=document.createElement("script");
			js.type="text/javascript";
			js.charset="UTF-8";
			js.src="cbpower.min.js";
			document.body.appendChild(js);
		});