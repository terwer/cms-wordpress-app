// doc
// https://github.com/uhavemyword/metaweblog-api

// const API_URL = process.env.WORDPRESS_API_URL
const API_URL = "https://rpc.cnblogs.com/metaweblog/tangyouwei"

var MetaWeblog = require('metaweblog-api');
var metaWeblog = new MetaWeblog(API_URL);

// getUsersBlogs
export async function getUsersBlogs() {
    metaWeblog.getUsersBlogs(appKey, username, password)
        .then(blogInfo => {
            // handle the blog information here
            console.log("blogInfo=>", blogInfo);
        })
        .catch(error => {
            console.log(error);
        });
}
