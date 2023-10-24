const express = require('express');
const app = express();

app.set('view engine', 'pug'); // 设置视图引擎为Pug
app.set('views', './views'); // 设置Pug模板文件夹的路径

app.get('/', (req, res) => {
    const message = 'Hello, Node.js and Pug!';
    const test = 'abc123'
    const user = '金垚智'
    res.render('index', {message, test, user}); // 渲染Pug模板，并传递数据
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
