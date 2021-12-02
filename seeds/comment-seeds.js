const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Wow! this is the moment that I wish I could go back in time"
    },
    {
        user_id: 4,
        post_id: 5,
        comment_text: "I wish I knew about this when It started, let me know with the future updates!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Good to know, Thanks for the info, continue on keeping us updated on the latest news!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "It has become appallingly obvious that our technology has exceeded our humanity."
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is exactly what I was looking for!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Technology is best when it brings people together, great news, thanks."
    },
    {
        user_id: 5,
        post_id: 2,
        comment_text: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life. This forum platform makes Crypto news much more easier!"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road. Thanks for keeping us up to date!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;