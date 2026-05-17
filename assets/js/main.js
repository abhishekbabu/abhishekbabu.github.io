/* Theme toggle + staggered entrance. No dependencies. */
(function () {
  "use strict";

  var root = document.documentElement;

  /* --- theme toggle --- */
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* Follow the OS theme until the user makes an explicit choice. */
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", function (e) {
    try { if (localStorage.getItem("theme")) return; } catch (err) {}
    root.setAttribute("data-theme", e.matches ? "dark" : "light");
  });

  /* --- staggered reveal on load --- */
  var items = document.querySelectorAll(".reveal");
  items.forEach(function (el, i) {
    el.style.transitionDelay = (i * 90) + "ms";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { el.classList.add("in"); });
    });
  });
})();
