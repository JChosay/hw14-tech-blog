const Post = require("./post");
const Comment = require("./comment");
const User = require("./user");

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

//! this one too
Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

//! here also
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
});

//! this one
Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

Comment.belongsTo(Post, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
})



module.exports = {Post, Comment, User}