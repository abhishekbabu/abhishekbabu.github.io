---
permalink: /
layout: splash
title: "Abhishek Babu"
classes: wide
intro: 
  - excerpt: 'Software Engineer. Builder. Learner.'
feature_row:
  - title: "Robinhood"
    excerpt: "Moving billions of dollars across Robinhood's payment infrastructure. Building automated portfolio rebalancing, tax loss harvesting, tax-aware asset transfers, and performance benchmarking for Robinhood Strategies."
  - title: "University of Washington"
    excerpt: "Combined B.S./M.S. in Computer Science with a focus in Data Science and a minor in Math. Graduate Teaching Assistant for Data Visualization and Research Assistant at the Ubiquitous Computing Lab."
  - title: "Off the Clock"
    excerpt: "Running half marathons, playing in a volleyball rec league, collecting vinyl records, and recently getting into disc golf. Always exploring San Francisco's best restaurants, bakeries, and bars."
---


# Abhishek Babu
{: .text-center}

{% include feature_row id="intro" type="center" %}

<div class="feature__wrapper">
  {% for feature in page.feature_row %}
    <div class="feature__item">
      <div class="archive__item">
        <div class="archive__item-body">
          <h2 class="archive__item-title">{{ feature.title }}</h2>
          <div class="archive__item-excerpt">
            <p>{{ feature.excerpt }}</p>
          </div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<div class="social-connect">
  <a href="https://github.com/abhishekbabu" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
  <a href="https://www.linkedin.com/in/abhishek-babu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
  <a href="https://twitter.com/abhishekbabu04" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
  <a href="mailto:abbabu0411@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
  <p style="font-size: 0.8em; color: gray; margin-top: 1em;">&copy; 2026 Abhishek Babu</p>
</div>
