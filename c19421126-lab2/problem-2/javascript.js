async function retrieve() {
        const retrieved = await fetch("http://jsonplaceholder.typicode.com/posts")
        let posts = await retrieved.json();
        //seperate the titles from the posts
        let postTitles = posts.map(posts => posts.title);
        //only return titles with 6 or more words
        let filteredTitles = postTitles.filter(postTitles => postTitles.split(' ').length > 6);
        filteredTitles.forEach(filteredTitles => console.log(filteredTitles));

}

async function frequency() {
        let Map = {};
        const retrieved = await fetch("http://jsonplaceholder.typicode.com/posts");
        let posts = await retrieved.json();
        //go through the posts getting the bodies
        let postBodies = posts.map(posts => posts.body);
        //go through the bodies to see if they're in the map object
        postBodies.map(postBodies => postBodies.split(" ").map(words => words.replace("\\"," ")).map(words => {
            if(Map.hasOwnProperty(words)){
                Map[words]++;
            }
            else{
                Map[words] = 1;
            }}
        ));
        let wordFrequency =Object.keys(Map);
        wordFrequency.forEach(wordFrequency => console.log(wordFrequency + " has a frequency of " + Map[wordFrequency]));
}