import express from 'express';
const app = express();
// const PORT = process.env.PORT || 80;
const PORT = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
    return res.json( { msg: 'Hello from server-UPD6' } );
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port --- UPD66 ${PORT}`);
})



// ===============================
// import {express} from express
// const app = express();
// const PORT = process.env.PORT ?? 8080;

// app.get("/", (req, res) => {
//     res.json({msg: "Hello from server!"})
// })


// app.listen(PORT, () => {
//     console.log(`Server is up and running on port ${PORT}`);
// })



