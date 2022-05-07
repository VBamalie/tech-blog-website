const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: "user_id"
});

Post.hasMany(Comment, {
    foreignKey: "post_id"
});

Comment.belongsTo(User, {
  foreignKey: "use_id"
});

module.exports = {
    User,
    Comment,
    Post
};