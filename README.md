# Dice-React-Game
A weekend project where I created a small dice game using React.

# Project Link
[Dice App](https://claudeni-dice.netlify.app/)

## Info
In this project we used the React library to build our very own dice game.  
  
The game itself is simple, 2 players go head to head against each other to collect points and reach a given goal.  
On their turn, they roll however many times they want until they decide it's enough or they roll the same 2 numbers.  
If they decide to hold then all their current accumulated points will add up to their total score, but if they ended up rolling the same 2 numbers then they are forced to lose all their current points and the turn will move over to the opponent.  

## structure
The way I structured this app is by having 1 main component that handles all the logic in it and has a lot of other components as its children that interact with the parent.  
By having a handle function for rolling, holding and new game, I was able to combine them and make a game.  
Other functions in this app are used for various things, like the music and sound effects, checking who won and displaying the appropriate message on the appropriate side and more.

## site
As shown in the opening page, to play the game you just roll and collect points up to the goal.
![Title Page](https://github.com/ClaudeNi/Dice-React-Game/blob/main/readme%20imgs/titlepage.png)

You can only play after locking in your goal, if nothing is inserted then it defaults to 100 points.
![Game Page 1](https://github.com/ClaudeNi/Dice-React-Game/blob/main/readme%20imgs/gamepage.png)

As you roll dice and collect points, you get to see how many points you roll in a turn and how many points you have overall.
![Game Page 2](https://github.com/ClaudeNi/Dice-React-Game/blob/main/readme%20imgs/gamepage%202.png)

Eventually someone will reach the goal and be declared the winner of the game.
![Game Page 3](https://github.com/ClaudeNi/Dice-React-Game/blob/main/readme%20imgs/gamepage%203.png)

You can easily start a new game or even restart your current game at any time by pressing the new game button.
