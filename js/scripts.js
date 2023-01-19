const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": " ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let feed =[];
const postList = document.getElementById(`container`);

for(i = 0; i < posts.length; i++){
    let singlePost = posts[i];
   
    const post = document.getElementById(`post`).content.cloneNode(true);

    post.querySelector(`.post-meta__author`).innerHTML = singlePost.author.name;
    post.querySelector(`.post-meta__time`).innerHTML = singlePost.created;
    post.querySelector(`.post__text`).innerHTML = singlePost.content;
    post.querySelector(`.post__image`).innerHTML = `<img src =${singlePost.media}>`
    let likes = post.querySelector(`.js-likes-counter`);
    likes.innerHTML = Number(singlePost.likes);
    post.querySelector(`.profile-pic`).innerHTML = `<img src = ${singlePost.author.image}>`;
  

    if(singlePost.author.image == null){
        post.querySelector(`.profile-pic`).innerHTML = `LF`;
    }
    postList.append(post);
    
    let  btn = document.getElementById(`likes__cta`);
    btn.addEventListener(`click`, function(){
     let green =  document.getElementById(`js-like-button`);
          if( !green.classList.contains(`like-button--liked`)){
                green.classList.add(`like-button--liked`);
                likes.innerHTML = Number(likes.innerHTML) + 1;
                if(!feed.includes(singlePost.id)){
                    feed.push(singlePost.id);
                }
             }
             else if( green.classList.contains(`like-button--liked`)){
            document.getElementById(`js-like-button`).classList.remove(`like-button--liked`);
            likes.innerHTML = Number(likes.innerHTML) - 1;
        }
    })
    }