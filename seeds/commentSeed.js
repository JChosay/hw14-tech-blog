const { Comment } = require("../models");


const commentData = [
    {
        comment_id: 1,
        user_id: 5,
        post_id: 6,
        comment_body: "Neeto stuff, maynard!",
        comment_date: "2021-07-14 15:22:58"
    },
    {
        comment_id: 2,
        user_id: 8,
        post_id: 4,
        comment_body: "What other tips do you have? I'm trying to learn this stuff, and it's hard as bees!",
        comment_date: "2021-07-14 16:31:12"
    },
    {
        comment_id: 3,
        user_id: 6,
        post_id: 5,
        comment_body: "This technology is really amazing. Too bad I broke both my hands last weekend!",
        comment_date: "2021-07-14 17:47:12"
    },
    {
        comment_id: 4,
        user_id: 7,
        post_id: 2,
        comment_body: "I don't like this at all. You must be some kind of troll or something.",
        comment_date: "2021-07-14 17:48:58"
    },
    {
        comment_id: 5,
        user_id: 3,
        post_id: 10,
        comment_body: "I've seen this stuff before - you hafta make sure about your file structure.",
        comment_date: "2021-07-14 20:05:17"
    },
    {
        comment_id: 6,
        user_id: 1,
        post_id: 1,
        comment_body: "Can you elaborate more on your question? So that you know, we can't help if you don't share your code.",
        comment_date: "2021-07-14 20:27:18"
    },
    {
        comment_id: 7,
        user_id: 4,
        post_id: 9,
        comment_body: "9/11 was an inside job, jesus is my copilot, and our only goal will be the western shore - WE ARE YOUR OVERLORDS!",
        comment_date: "2021-07-14 21:18:55"
    },
    {
        comment_id: 8,
        user_id: 2,
        post_id: 7,
        comment_body: "I liked it better the old way; typewriters were just plain awesome, and polio was prolly a friggin GREAT time.",
        comment_date: "2021-07-14 22:00:02"
    },
    {
        comment_id: 9,
        user_id: 10,
        post_id: 8,
        comment_body: "THIS POSTER IS A DEEP STATE ANTIFA CRITIAL RACE THEORY NEVER-TRUMPER.",
        comment_date: "2021-07-14 23:12:48"
    },
    {
        comment_id: 10,
        user_id: 9,
        post_id: 8,
        comment_body: "Yo mama.",
        comment_date: "2021-07-14 23:22:58"
    }
]

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;