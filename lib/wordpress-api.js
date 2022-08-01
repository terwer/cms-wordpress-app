// See doc
// https://codex.wordpress.org/XML-RPC_WordPress_API
// https://developer.wordpress.org/apis/handbook/xml-rpc/

// See also
// https://codex.wordpress.org/WordPress_APIs

import wordpress_compatible from "./wordpress-compatible"

const client = wordpress_compatible.createClient({
    url: "https://terwergreen.wordpress.com/xmlrpc.php",
    username: "cbgtyw@gmail.com",
    password: "CBGtyw2050*#"
});

console.log("starting...")
const filter = {
    // post_type:"", // post,page 文章类型
    // post_status:"", // publish 文章状态
    number: 10,// 获取的文章数量，此例中显示的是10篇文章
    offset:0,// 从默认顺序里的第几篇文章开始获取，默认是0，就是从头开始，如果要从第二篇，就可以将此参数修改成为1，这个参数适用于文章分列，或者首篇文章不同于其他文章显示
    orderby: "date", //排序规则，此例为按照时间顺序，默认也是时间顺序
    // s:"java",
    order: "desc" // 'ASC'升序，'DESC' 降序
}
const fields = ["id", "title", "name", "date"]
client.getPosts(filter, fields, function (error, posts) {
    if (error) {
        console.log("An error occurred:", error)
        return
    }
    console.log("Found " + posts.length + " posts!");
    console.log(posts)
});