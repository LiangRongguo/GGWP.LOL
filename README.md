![title_logo](https://github.com/LiangRongguo/GGWP.LOL/blob/master/readme_resource/title.png)

## Introduction
Hey😜, welcome to my League of Legend project, named **GGWP.LOL**. This name is from the commonly used phrase in LOL and is used when the game is over to express "good game, well played".

In general, this is an application that can help players keep track of champions' metadata, recommeded runes and items, checking summoner historys and so on. You can treat it as another basic version of [OP.GG](https://na.op.gg/), but with some deeply desired features by me😊 and without some functions that are difficult to be implemented by me😒.

### Anticipation (hopefully)
- Meta changes are the most common things in League and it is really important to know how one champion is buffed or nerfed in recent several metas. I plan to implement the functionality that users can check the champion's meta history with respect to time. With a detailed buffering trend, we can tell if this champion is still strong enough to get you a vitocry in the rift.
- Social functions! I think this is a exicting idea that users can find matched players to play together! I haven't mapped too much details for this since social function is of difficulity for me :(

## How to get started:
Open the terminal and type the below command in your selected folder:
1. Get the repository:
`git clone git@github.com:LiangRongguo/GGWP.LOL.git`.
2. Install the necessary packages for this project:
`npm install`.
By September 2020, I am using `node.js 12.18.4` and `npm 6.14.8`
3. Run the app in the development mode: run `npm start` and open http://localhost:3000 to view it in the browser.


## Development Log:
10/27/2020: 
- Learnt how to download(get download URL)/uplaod images from/to the firestorage
- Initialized the Summoner-Avatar dropdown menu, where user can see their display name, be taken to the summoner page and sign out.(I hate playing with SCSS🤣)
- **TODO(SOLVED):** When we log in for the first time, the summoner avatar is the default one though we have successfully fetched the summoner avatar for the user. After we refresh the page, the proper avatar is displayed. Guess this has something to do with the React life cycle. (SOLVED: magically dispeared..🤣)
 ![image1](https://github.com/LiangRongguo/GGWP.LOL/blob/master/readme_resource/20201027_update.png) 
 
 10/30/2020: 
 - Learnt how to fetch data (here we fetch an array for free rotation) from firebase.
 - Implemented the function to fetch data from firebase
 - Completed the function to display free rotation champions in the free rotation tab.
 - **Considering** moving all champions data to Firebase, instead of storing them in a constant js variable
  ![image1](https://github.com/LiangRongguo/GGWP.LOL/blob/master/readme_resource/20201030_update.png) 

