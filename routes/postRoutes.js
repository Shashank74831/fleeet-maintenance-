import express from "express"


const port = process.env.PORT;

app.use(express.json());

const posts = [
    {
        id:1,
        Image: "https://www.dailypaws.com/dogs-puppies/dog-breeds/siberian-husky",
        caption: "💙 Eyes that steal every heart.,Bow Bow",

    },
    {
        id:2,
        Image: "https://www.dog-spoiling-made-easy.com/shih-tzu-dog-breed.html",
        caption: "💕 Fluffy, fancy & fabulous.,Bow Bow",

    },
    {
        id:3,
        Image: "https://patmypets.com/blog/golden-retriever-dog-breed/?srsltid=AU7gw4UIA_I7nkhKfMKssGvepRnv8NY8IV6ObRu3uPOtpck91W58z22n",
        caption: "🐕 Pure love wrapped in golden fur.,Bow Bow",

    },
    {
        id:4,
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vSFf78d7vTNAEDF5aMMqBwEvGMk-26Qa54AuwDRQifTzS9nzXKED0EfA&s=10",
        caption: "🐾 Born to be loyal, built to be fearless.,Bow Bow",

    },
]
app.get("/api/posts", (req, res) => {
    res.status(200).json(posts);
})

app.post("/api/posts", (req, res) => {
    const {id, image, caption} = req.body;
    const newPost = {id, iamge, caption}; 
    posts.push(newpost);
    res.status(201).json(new post);
})

app.listen(port, () => {
    console.log("server started on port", PORT)
})
 