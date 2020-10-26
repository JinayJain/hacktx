![logo](https://i.imgur.com/hqo1gpF.png)

Created by Jinay Jain, Kincent Lan, Joy Liu, and Daniel Moon.

Winner of **Best Use of Google Cloud 1st Prize**

## Inspiration
Given the latest presidential debates, we were both inspired and frustrated by the lack of information provided and wanted to create an application that can help people hold their representatives in government accountable. 

Most people don't even know who their Congressional Representative is, so our tool would not only allow for quick searches of Representatives and Senators, but also gather and showcase invaluable data regarding how these politicians who represent their people in government vote on the issues they care about.

## What it does
With the divided government we have come to know today, social policies and reform have never been more important. Polidex is a political wiki to help citizens hold their congressional representatives accountable. 

Polidex has numerous features, including:
* **Easy access to pre-existing data.** Previously, while the data on representatives are open-source through websites such as congress.gov, these information are difficult to read/find for the general public. Polidex consolidates this information and displays it in a trackable, searchable manner. 
* **Simple search/filter option.** Polidex gives people a way to keep up with what their representatives are voting for as well as the kinds of issues that the representatives have voted for in the past, allowing people to find their representatives by keywords in a search bar, sorting by name, state, political affeliation, etc. The search shows a condensed summary of all candidates that satisfy the filter, and each summary card can be expanded to a more detailed profile showing all information related to a particular politician.
* **Polidex score: unique insights analyzed from each profile.** In the profile, in addition to giving more detailed information, the website also provides users with news articles and media related to the politician to help them learn about current events. Polidex summarizes this information into a Polidex score which indicates how often a congressperson votes with their party.
* **vote.org:** promoting and quick access to voting resources!

## How we built it
There were many components that we had to tackle for this project. After coming up with the idea, we decided that building a web application would be most appropriate for maximum accessibility.

![tech stack](https://media.discordapp.net/attachments/767856329628450826/769952789950365707/image0.png)

We built the front-end with React and Ant Design, created regional sorts/displays with the Google Maps APIs, used express.js and node.js for the backend. With the Google API, representatives can be displayed regionally outside of the search function. We felt that this was important as most people do not even know who their representatives are today. We used a query to Google News to get relevant news for each representative. Afterwards, we used the [ProPublica Congress API](https://projects.propublica.org/api-docs/congress-api/) to find the data for all the various members of congress and the senate, as well as their voting data to display to the public and spread awareness. We used the data to calculate the individual Polidex scores. Lastly, we used Firebase as a simple database to store user ratings of certain politicians to help gauge the popularity and reliability of each representative in Congress.

## Challenges we ran into
At first, the biggest obstacle we stumbled across was gathering data for the application. We thought the only option was to data scrape clerk.house.gov for information using BS4. However, we quickly realized that with enough searching through the archives of congress.gov, and other government run sites, we could download the XML files to process from said site. This proved hard and tedious to do. Eventually we stumbled across an API that helped us extrapolate more data to feed into our application. In doing so, we ran into some challenges with rendering the representative cards dynamically with the search function, but we were able to resolve it after reviewing the code together to identify the bug and resolve it.

## Accomplishments that I'm proud of

* We built and deployed a full stack web application during the limited timeframe of this hackathon.
* We implemented a comprehensive keyword search algorithm that helps people easily find their representatives.
* The representative page provides data aggregated from multiple sources including user votes to make sure the information we provide has minimal bias. 

## What I learned
* How to deploy full stack applications to the web with Google App Engine
* Integrating the Google Maps API into our React application
* Methods for collaborating virtually and synchronizing our work through Live Share and GitHub.

## What's next for Polidex
* Adding NLP analysis for bills to give a summary and tags for each bill, letting users search for the issues they care most about
* Allowing users to directly read the bills instead of having to be redirected
* Allowing users to login and track the candidates they have chosen throughout each congressional term
