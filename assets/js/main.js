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

  /* --- contribution chart --- */
  /* Data is refreshed daily by .github/workflows/contributions.yml. */
  var chart = document.getElementById("chart");
  if (chart) {
    var CELL = 11, GAP = 3, RADIUS = 2;

    fetch("/assets/data/contributions.json", { cache: "no-cache" })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .then(function (data) {
        var weeks = data.weeks || [];
        if (!weeks.length) return;

        /* Four levels, scaled against a high percentile so one huge day
           does not flatten the rest of the year into level 1. */
        var counts = [];
        weeks.forEach(function (w) {
          w.forEach(function (d) { if (d.c > 0) counts.push(d.c); });
        });
        counts.sort(function (a, b) { return a - b; });
        var ceiling = counts.length
          ? Math.max(4, counts[Math.floor(counts.length * 0.85)])
          : 4;

        function level(c) {
          if (!c) return 0;
          return Math.min(4, Math.ceil((c / ceiling) * 4));
        }

        var width = weeks.length * (CELL + GAP) - GAP;
        var height = 7 * (CELL + GAP) - GAP;
        var parts = [
          '<svg viewBox="0 0 ' + width + " " + height +
          '" preserveAspectRatio="xMaxYMid meet" role="img" aria-label="' +
          (data.total || 0) + ' contributions between ' + data.start +
          " and " + data.end + '">'
        ];

        weeks.forEach(function (week, x) {
          week.forEach(function (day) {
            var y = new Date(day.d + "T00:00:00Z").getUTCDay();
            parts.push(
              '<rect x="' + (x * (CELL + GAP)) + '" y="' + (y * (CELL + GAP)) +
              '" width="' + CELL + '" height="' + CELL + '" rx="' + RADIUS +
              '" data-level="' + level(day.c) + '">' +
              "<title>" + day.c + (day.c === 1 ? " contribution" : " contributions") +
              " on " + day.d + "</title></rect>"
            );
          });
        });
        parts.push("</svg>");

        /* Legend: the same four steps, less to more. */
        var legend = ['<span>Less</span><svg width="' +
          (5 * (CELL + GAP) - GAP) + '" height="' + CELL +
          '" aria-hidden="true">'];
        for (var i = 0; i < 5; i++) {
          legend.push('<rect x="' + (i * (CELL + GAP)) + '" y="0" width="' + CELL +
            '" height="' + CELL + '" rx="' + RADIUS + '" data-level="' + i + '"/>');
        }
        legend.push("</svg><span>More</span>");

        chart.innerHTML = parts.join("");
        var strip = document.createElement("div");
        strip.className = "chart-legend";
        strip.innerHTML = legend.join("");
        chart.after(strip);

        var total = document.getElementById("chart-total");
        if (total && data.total) {
          total.textContent = data.total.toLocaleString() + " in the last year";
        }

        var section = document.getElementById("code");
        if (section) section.hidden = false;

        /* Newest weeks matter most; start scrolled to them when the grid overflows. */
        chart.scrollLeft = chart.scrollWidth;
      })
      .catch(function () { /* Section stays hidden if the data is unavailable. */ });
  }

  /* --- staggered reveal on load --- */
  var items = document.querySelectorAll(".reveal");
  items.forEach(function (el, i) {
    el.style.transitionDelay = (i * 90) + "ms";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { el.classList.add("in"); });
    });
  });
})();
