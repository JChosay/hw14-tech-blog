const { Post } = require("../models");

const postData = [
    {
        post_id: 1,
        post_title: "Check out this sweet ASCII banner!", 
        post_contents: "I found this sweet site where you can get ASCII banners from inputted text. It's friggin' amazing! Use it in your command-line interfaces, and your rivals will tremble!",
        user_id: 6,
        post_date: "2021-07-14 07:22:58" 
    },
    {
        post_id: 2,
        post_title: "Ghost in the machine?", 
        post_contents: "I have this code that's supposed to insert a new array item in response to use input. I've gotten it to work - TWICE! - but each time I only get the correct resulty once. Each time, I have to re-copy-and-paste the code to make it work. WHat the hell is wrong with me? HAILP!",
        user_id: 4,
        post_date: "2021-07-14 07:57:22" 
    },
    {
        post_id: 3,
        post_title: "Joe Biden is a Dirty Old Man", 
        post_contents: "Got your attention, didn't I? I earn 100s of 10000s of $$$ every day by selling NotAFugginCult Brand cookware - for the (((CHILDREN))) - and you can too! Because REA$ON$, ya' dopey nonbelievin' heathen! Zenu rulez yer face, mofos!",
        user_id: 7,
        post_date: "2021-07-14 08:12:46" 
    },
    {
        post_id: 4,
        post_title: "Bat Country", 
        post_contents: "1. Never trust a cop in a raincoat. 2. Beware of enthusiasm and of love, both are temporary and quick to sway. 3. If asked if you care about the world's problems, look deep into the eyes of he who asks; he will never ask you again.  4. Never give your real name. 5. If ever asked to look at yourself, don't look. 6. Never do anything the person standing in front of you can't understand. 7. Never create anything, it will be misinterpreted, it will chain you and follow you for the rest of your life. ALso, 9/11 was an inside job, baba booey baba booey baba booey.",
        user_id: 3,
        post_date: "2021-07-14 09:32:20" 
    },
    {
        post_id: 5,
        post_title: "Avoid the Noid", 
        post_contents: "Our pizza is awful; we know it, you know it. Can you just please buy it anyway, if we cynically admit to our indifference to the value of your money by making a funny commercial about it? We promise we'll keep the flow of hilarious halftime distractions coming, and you promise to keep on swallowing the garbage our kitchens hourly vomit forth. Deal?",
        user_id: 10,
        post_date: "2021-07-14 09:40:51" 
    },
    {
        post_id: 6,
        post_title: "Custom-made Authentic Appalachian Hats", 
        post_contents: "So authentic your dumb yankee face'll fall clean off. And at prices like these, you're just as well off running them through your horse and putting them on your roses.",
        user_id: 1,
        post_date: "2021-07-14 13:22:58" 
    },
    {
        post_id: 7,
        post_title: "Coding is frying my brain", 
        post_contents: "No effing wonder I've avoided learning to code so long and so actively. This material is going to finally push everything else out of my skull, which I swear by god and sunny jesus is gonna' explode thereupon. I'm sleeping like crap, eating garbage food that would gag any self-respecting dog or hobo, and drinking like any fish you EVER saw. And even I am alarmed by how much I'm smoking - the last time I was in a 'boot camp' I got called a faggot a lot more often, but at least I was eighteen years old then and still made out of steel.",
        user_id: 9,
        post_date: "2021-07-14 13:41:21" 
    },
    {
        post_id: 8,
        post_title: "Getting the Fear.", 
        post_contents: "It's happening, y'all. I'm finally on fire, just as literally as I have been spiritually and metaphorically all these dang-ol' years! The couch went up first, but goddamned if my skirt hasn't caught too! Dunno what that kid o' mine is smiling about over there in that corner; I'm starting to think he's the one what done this. All well; oblivion, here I come. Devil, you better be wearing a cup.",
        user_id: 2,
        post_date: "2021-07-14 14:12:02" 
    },
    {
        post_id: 9,
        post_title: "Screw you, flyover country", 
        post_contents: "Yeah, new york rulez, and this whole blog is dum cuzza' ya don't live there. Not that I do either, but new york seriously does rule though, cuz only new yorkers iz ppl. They're totally gonna be fine in the revolution. Bring it pez-ints!",
        user_id: 8,
        post_date: "2021-07-14 16:11:28" 
    },
    {
        post_id: 10,
        post_title: "Awesome, sweet, totally-rad CSS trick", 
        post_contents: "Bet you want to know what it is, dontcha'? Tough beans, baby! This biz is mine, and I'ma' rule tha whole dam world! I laff at your lame CSS, and your clumzee layouts tickle mah bicuits. Behold the uberStyle, and cower before my superior, next-level page-positioning skillz!",
        user_id: 6,
        post_date: "2021-07-14 17:22:19" 
    }
]

const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;