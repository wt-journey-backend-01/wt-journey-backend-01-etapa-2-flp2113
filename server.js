const express = require('express');
const agentsRouter = require('./routes/agents.js');
const casesRouter = require('./routes/cases.js');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(agentsRouter);
app.use(casesRouter);

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));