# Basic Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
<br>Quotes API(https://api-ninjas.com/api/quotes)
<br>
The user is met with a searchbar and after typing a keyword, they are presented with a random quote based on the keyword along with the author. Quotes API by API Ninjas was used for this along with ReactJS for the interface.
## List of Keywords(categories)

- Age
- Alone
- Amazing
- Anger
- Architecture
- Art
- Attitude
- Beauty
- Best
- Birthday
- Business
- Car
- Change
- Communication
- Computers
- Cool
- Courage
- Dad
- Dating
- Death
- Design
- Dreams
- Education
- Environmental
- Equality
- Experience
- Failure
- Faith
- Family
- Famous
- Fear
- Fitness
- Food
- Forgiveness
- Freedom
- Friendship
- Funny
- Future
- God
- Good
- Government
- Graduation
- Great
- Happiness
- Health
- History
- Home
- Hope
- Humor
- Imagination
- Inspirational
- Intelligence
- Jealousy
- Knowledge
- Leadership
- Learning
- Legal
- Life
- Love
- Marriage
- Medical
- Men
- Mom
- Money
- Morning
- Movies
- Success
## Working
App.js has the basic framework for the application and API responses are gathered using Fetch API and an async function. The category is the parameter which is given by the user. Headers and content-type are provided by API Ninjas and use GET method to fetch the response. 
<br>useState hook is used to change the quote and authors dynamically and useEffect hook with an empty dependency array ([]) ensures that it runs only once when the component mounts.
<br>Quotetile.js contains the quote and the author inside a div.

## Fonts

- Merriweather from Google Fonts
- Oswald from Google Fonts

