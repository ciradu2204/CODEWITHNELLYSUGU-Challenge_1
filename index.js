
const fetchUsers = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => {
            return resp.json()
        })
        .then((data) => {
                data.forEach(user => {
                    let div = document.createElement("div");
                    div.className = `user`;
                    div.setAttribute("id", `${user.id}`)
                     let value = `<div><h1><b>NAME</b>: ${user.name}</h1> 
                            <h1>EMAIL: ${user.email}</h1> <button id="addButton-${user.id}" onClick="fetchPosts(${user.id})">Posts</button><button id="removeButton-${user.id}" disabled onClick="closePosts(${user.id})">Remove Posts</button></div>`
                    div.innerHTML = value;
                    document.getElementById("App").appendChild(div);

                })

        })
        .catch((Error) => console.log(Error))
}

fetchUsers();

const fetchPosts = async (userId) => {

    await fetch("https://jsonplaceholder.typicode.com/users/" + userId + "/posts")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
             let ul = document.createElement("ul");
            data.forEach(post => {
                ul.setAttribute("id", "list" + "-" + userId)
                let li = document.createElement("li");
                let text = `<h3>${post.title.toUpperCase()}</h3> <h4>${post.body}</h4>`
                li.innerHTML = text;
                ul.append(li)
            });
            var d1 = document.getElementById(userId);
            d1.appendChild(ul)
            document.getElementById("addButton" + "-" + userId).disabled= true; 
            document.getElementById("removeButton" + "-" + userId).disabled= false; 
        })
        .catch((Error) => console.log(Error));
}

const closePosts = (userId) =>{
    document.getElementById("list" + "-" + userId).remove();
    document.getElementById("addButton" + "-" + userId).disabled= false; 
    document.getElementById("removeButton" + "-" + userId).disabled= true; 


 }