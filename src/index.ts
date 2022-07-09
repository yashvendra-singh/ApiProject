// import express from 'express';

// const app = express();
// const port: number = 3000;

// app.get('/students', (req, res) => {
//     res.status(400).send('bad request');
//   });

// app.listen(port, (): void => {
//     console.log(`Server started on localhost:${port}`);

// });

const myFunc = (num: number): number => {
    return num * num;
};

console.log(5 * 4);

export default myFunc;
