// doc
// https://github.com/uhavemyword/metaweblog-api

const API_URL = process.env.WORDPRESS_API_URL
// const API_URL = "https://rpc.cnblogs.com/metaweblog/tangyouwei"
const appKey = "";
const username = "terwer";
const password = "CBGtyw2050*#";

var MetaWeblog = require('metaweblog-api');
var metaWeblog = new MetaWeblog(API_URL);

// getUsersBlogs
export async function getUsersBlogs() {
    // metaWeblog.getUsersBlogs(appKey, username, password)
    //     .then(blogInfo => {
    //         // handle the blog information here
    //         console.log("blogInfo=>", blogInfo);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    const data = await metaWeblog.getUsersBlogs(appKey, username, password);
    return data[0];
}
