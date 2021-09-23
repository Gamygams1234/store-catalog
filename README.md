# Store Categories

This is a solution to the making the Store Categrory Assignment






### The challenge

1. Electronics, Clothing, Office, “Home tools & improvement” are store categories implemented as page tabs. Clothing is the currently active tab.

2. “Sort by:” is a filter that sorts the currently active category's stores – implemented as “cards”/tiles – by these parameters.

3. The five stars underneath the cashback information represent a store rating/score on a scale of 1 to 5.

 


## My process
First step was to fetck the JSON data in the folder data.json. I styled the HTML using Flexbox so it can work on most browsers. Next was to make the functionality of the category buttons, so I added an event listener to all the buttons to it can track what is selected.

In order to fill the stores, I use updateUI fucntiion to get fron the displayStores and show them. 

In order to get the star rating system, I made the function outOfFive, to return the number of stars the business has. 

Next I had to sort the items which is done by the handle select. It sets the sort variable, then sorts the array and updates the UI.

Sort is a global variable so that is someone selects a category, then it goes through the sort before updating the UI. 

I also added select.js, for the select form, as well as another stylesheet for that form to keep things organized

The Meta decription is listed for the Crawler


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
