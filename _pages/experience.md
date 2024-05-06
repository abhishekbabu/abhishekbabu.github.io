---
permalink: /experience
title: "Experience"
layout: single
---
## [Robinhood](https://robinhood.com/us/en/){:target="_blank"}
**Software Engineer**\
Menlo Park, CA\
Aug 2022 - Present
- **Team:** Money Movement
- Currently building seamless and integrated payment features for the [Robinhood Gold Credit Card](https://robinhood.com/creditcard/){:target="_blank"}
- Built and launched Robinhood’s instant bank deposit payment rail, known in the industry as [Request for Payment](https://www.moderntreasury.com/learn/request-for-payment){:target="_blank"}, bringing in >$1B in deposit volume since launch
- Re-architected a highly extensible and resilient payments state machine framework that is now used by multiple payment rails at Robinhood
- Led numerous engineering initiatives to reduce tech debt and improve efficiency across the entire payments stack:
    - Sharded Robinhood’s ACH bank transfer completion Airflow DAG that processes ∼300k transfers from NACHA files everyday, reducing processing time from ∼1h45m to ∼35m and ensuring that users’ funds are settled before market open for trading
    - Deprecated and deleted remnants of Robinhood’s legacy ACH bank transfer logic from a previously monolithic architecture and moved it to the newer internal payments service as part of a high-risk migration without causing a single outage
    - Improved the max P90 latency of one of the highest traffic endpoints in the Robinhood app that shows users’ bank accounts from ∼845ms to ∼142ms by rewriting the looping logic efficiently
- **Skills:** Golang, Python, Apache Kafka, Apache Airflow, Kubernetes, Docker, AWS, PostgreSQL, Grafana, Humio, Postman

## [Cledge](https://cledge.org/){:target="_blank"}
**Lead Software Engineer**\
Seattle, WA\
Jun 2021 - Oct 2021
- Built the user profiling functionality and a heuristic content recommendation algorithm using Flutter and a Cloud Firestore database on Firebase
- Developed database management consoles using Node.js and React.js, resulting in a 75% reduction in data entry time for content developers
- Built a Python data pipeline using Apache Spark to populate an Azure Cognitive Search Index with data from the [College Scorecard](https://collegescorecard.ed.gov/){:target="_blank"} and [IPEDS](https://nces.ed.gov/ipeds/){:target="_blank"} datasets
- Built an automated Python web scraper using Selenium to scrape non-copyrighted college campus images from Google Images
- Cledge was picked up by [Microsoft for Startups](https://startups.microsoft.com/){:target="_blank"} in July 2021
- **Skills:** Python, Microsoft Azure, Firebase, Apache Spark, Pandas, TypeScript, JavaScript, HTML, CSS, Selenium, Node.js, Express, React.js, Jupyter, Flutter

## [P&#227;rv.ai](https://www.linkedin.com/company/parvai/){:target="_blank"}
**Software Engineer Intern**\
Redmond, WA\
Jun 2020 - Sep 2020
- Developed both static and dynamic web content to showcase Parv.ai, an educational startup platform that harnesses artificial intelligence and machine learning techniques to perform content recommendation algorithms on MOOCs from providers including Udemy and edX
- **Skills:** Microsoft Azure, JavaScript, HTML, CSS, Node.js, React.js

## [CodeDay](https://www.codeday.org/){:target="_blank"}
**CodeLabs Intern**\
Remote\
Jul 2020 - Aug 2020
- Built a resume classification platform to predict job categories of resumes using NLP techniques
- Implemented a data processing pipeline to extract meaningful content from resume text
- Conducted project development in an Agile environment
- Developed a multi-class convolutional neural network to classify processed resumes, achieving 87% test accuracy
- Integrated the data processing pipeline and neural network in a web server deployed on Heroku
- **Skills:** Python, TensorFlow, NLTK, JavaScript, HTML, CSS, Node.js, Express, Jupyter

## [Tata Consultancy Services](https://www.tcs.com/){:target="_blank"}
**Software Engineer Intern**\
Bellevue, WA\
Aug 2019 - Sep 2019
- Developed a cross platform application on a Raspberry Pi 4 to snapshot a conference room at regular intervals and gain insights into conference room usage throughout the work day
- Leveraged Cognitive Services’ Computer Vision API and Face API for human detection and facial recognition analysis on snapshots
- Populated a key-value store and a data lake with time-stamped analysis results and snapshots
- Implemented offline human detection with Haar Cascade classifiers to optimize API calls, reducing application cost by 90%
- Documented product development process and dependencies
- **Skills:** Microsoft Azure, OpenCV, C#, Raspberry Pi
