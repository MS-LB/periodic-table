# Periodic Table Memory Game

Drag and drop elements on a blank periodic table. Clicking submit changes the color of any incorrect answer and displays the number of correctly placed elements. You can focus on memorizing select sections of the periodic table by unchecking any section you want to ignore.

[See it in Action!](http://3.101.47.167/)

S block of elements - showing 4 wrong answers
![Periodic Table Game](/images/game_1.png)

S & P block of elements with Hints.
Hints: The text of any wrong answer is changed to red when dropped.
![Periodic Table Game](/images/game_2.png)

# Below is the Info on tamalanwar's project - The origional README

# The Periodic Table of Elements

Made with CSS Grid, React and Science!

[See it in Action!](https://tamalanwar.github.io/periodic-table/)

[Blog Post: How I made The Periodic Table with CSS Grid and React](https://tamalweb.com/periodic-table-reactjs)

![Periodic Table](/images/periodic_table_react1.png)

## How it was made?

I made the layout using CSS grid. The table is a bunch of boxes in 18 columns, arranged in a funny way.

I used viewport width to set most of the element dimensions, text sizes, so that the table will scale according to screen sizes. Still, please test it on your end and send me a PR.

I created each box with a `<div>` with a class of `element` and number like: `element-1`

I used emmet to auto populate 118 boxes.

The unique class names helped me arrange them by position in CSS. For example in Element 57 and 89 when the Lathanides and Actinoids split the table, I made them seperate and pushed down the markup. See the main css file on how I did it.

After I arranged the elements the way it is, I then transitioned over React.

React allowed me to make the items interactive. I found [a handy JSON](https://github.com/Bowserinator/Periodic-Table-JSON) that had all the element info which I used to dynamically populate the symbol names and other information. This saved me a lot of time and error making this table.

Would like to talk more about this project? Get in touch!

[Read the blog post](https://tamalweb.com/periodic-table-reactjs)
