// จำลองกสนรับข้อมูลจาก server

const wait = (ms) => new Promise((resolve) => setTimeout(resolve,ms));



async function demo(){
    console.log("1) Start Loading...");
    await wait(2000);
    console.log("2) Comlete");
    await getUser();
   await getPosts();
    

}

async function getUser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok){
            throw new Error(` HTTP ${response.status}`);
        }
        const users = await response.json();
        console.log(`Get data ${users.length}`);
        users.forEach((u) => console.log(u.id,u.name,"-",u.username,u.email,u.address));

    }catch (error){
        console.error("Error Foun :", error.message);
    }
}
async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const posts = await response.json();
        const tenPosts = posts.slice(0, 10);
        console.log(`Get data ${tenPosts.length} posts`);

        tenPosts.forEach((post) => {
            console.log("UserID:",post.userId);
            console.log("ID:", post.id);
            console.log("Title:", post.title);
            console.log("Body:", post.body);
            console.log("--------------------");
        });

    } catch (error) {
        console.error("Error Found:", error.message);
    }
}
demo();
console.log("3) Show Data");