When creating this application, I feel like its really easy to get overwhelmed. There are a lot of things to decide before getting started, many avenues to take, and quite a lot of data to store.
My workflow looked something like this:
1)Create a grid with cells
2)Give each of those cells a property that is a boolean to be either on or off
  
 Now that we have a grid, we can focus more on user stories:
3)A user can select any/all cells in the grid
4)A user can select to have cells seeded into the grid
5)A user should see the correct animations according to the rules
6)A user can pause/play the animations
7)A user can see current generations
8)A user can select the speed in which the animations play
9)A user can clear the current board
10)A user should be able to pause the game, update the board manually, then play the game again
11)A user should only see the play button when the game is paused and vis versa

My first step was to research what this 'canvas' thing was all about. I hadn't interacted with it prior to this project and, since it was recommended, I spent a good deal of time going over how I could use it in this app. After struggling with it through the first day, I made the decision on the second day to scrap my original work. This was a tough decision, but ultimately I believe that I created a better product because of it, working with something that I'm more comfortable with: simple components and arrays.

After leaning away from canvas, I decided to wireframe my project first. I knew I wanted most of my methods in App.js, so I kept that. I then created a components folder to hold the rest: Grid (where the entirety of the grid would live, mapping over each Cell), Cell (each individual cell), Generation (a component rendering the current generation), Controls (to hold the buttons that the user can select to control the animations), and TopBar (the header).

I deemed the first step in functionality to be creating the grid. This is because there's no way to select cells without something to first hold the cells. To do this I created a 2d array by creating arrays within an array. I called each of these parts 'cells' and gave them a value that I could toggle to determine if they were selected or not. Actually selecting a cell was a simple method of matching the current cell to that in the grid by indexing.
This takes care of (1), (2), and (3)

Once that was working, I moved on to seeding. I wanted about 1 in 4 cells to be selected when I seeded the grid and I wanted this to happen automatically when the user opened the app. Using the math functionality of JS, I randomly selected these cells and updated the grid with these values. I also called this method on componentDidMount.
This takes care of (4)

Now a user can select cells and seed cells. Great! Now we want to move onto the algorithm needed to make this functional. Long story short, its a lot of if this and that but not those and a little bit of these. For details, please see the `play` function in App.js. Within this method, I also incremented the generations in state by 1 each time it is called. Currently, this algorithm has a run-time operation of O^n. If I have more time in the future, I will work on making this more effecient, but for the time being, I'm satisfied with its performance. I passed this into the `playButton` method that calls this function on an interval. We'll utilize this more later for speed. While we had this, might as well create the `pauseButton` as well (by clearing the interval) and pass them into the Controls class. Initially, I showed both of these buttons at all times.
This takes care of (5), (6), and (7)

Now to work on speed. Since we had already implimented the interval in the previous step, I could create these buttons by changing state in App.js that determines how often interval runs and pass this into the Controls as well.
This takes care of (8)

To clear the board, we basically create a new board that has no inputs whatsoever. Again, this is passed into Controls.
This takes care of (9)

Luckily, because everything else was executed correctly, (10) fell into place without any hoopla (no code change).

To only show the user the pause OR play button, I inserted a conditional to the Control class. Nothing fancy, but definitely a better user experience.
This takes care of (11), the final feature!

Overall this was a really interesting project and I had a good time working through problems that I'm not sure I would have experienced otherwise.
