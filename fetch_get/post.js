const apiUrl = 'https://jsonplaceholder.typicode.com'

async function fetchPosts() {
    //what is an object "Promise"
    //Are objects in JS the same as Python?

    try{
    const response = await fetch(`${apiUrl}/posts`);

    const jsonString= JSON.stringify(response);
    console.log(jsonString)

    if(!response.ok) {
        throw new Error(`Fail ed: ${response.status}`)
        //what are .ok and .status?
    }

    return await response.json();
    } catch(e){
    //where is e declared?
    console.log(e)
    }
}

function listsPosts(postContainerElementId) {
    //what is postCOntainerElementId? where was it declared? how does this get "<div id="post-items-container"></div>"
    const postContainerElement = document.getElementById(postContainerElementId);

    if (!postContainerElement){
        return;
    }

    //"because it returns a promise we cant to this. this will not work because we said async means fetchPost returns a promise"
    //const posts = fetchPosts()
    //"alternatively we can use the promise based approach"
    
    fetchPosts()
    .then(posts => {
        if(!posts) {
            postContainerElement.innerHTML = 'No posts fetced.'
            return
        }

        for(const post of posts){
            postContainerElement.appendChild(postElement(post))
        }
    }).catch(e => {
        console.log(e)
    })
    // what is this? ^^
}

function postElement(post) {
    const anchorElement = document.createElement('a');
    //setting attributes? setting the json object equal to a variable?
    //what is anchorElement doing?
    anchorElement.setAttribute('href', `${apiUrl}/posts/${post.id}`)
    anchorElement.setAttribute('target', '_blank')
    anchorElement.innerText = post.title;

    const postTitleElement = document.createElement('h3')
    postTitleElement.appendChild(anchorElement)

    return postTitleElement
}


















//    ____  !  hey cmon man, 
//   ( '-')     its rude to scroll down without knocking first
//   -( .)-
//    / T\    