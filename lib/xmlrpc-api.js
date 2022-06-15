// doc
// https://github.com/uhavemyword/metaweblog-api

const API_URL = process.env.WORDPRESS_API_URL

const appKey = "";
const username = process.env.WORDPRESS_USERNAME;
const password = process.env.WORDPRESS_PASSWORD;

const MetaWeblog = require('metaweblog-api');
const metaWeblog = new MetaWeblog(API_URL);

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
    const data = await metaWeblog.getUsersBlogs(appKey, username, password) || [];
    return data[0] || {};
}
