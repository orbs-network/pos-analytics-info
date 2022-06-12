const express = require('express')
const app = express()
const port = 3000


//import * as analytics from "@orbs-network/pos-analytics-lib";
//require '@orbs-network/pos-analytics-lib';
const a = require('@orbs-network/pos-analytics-lib');
console.log(a);

app.get('/', (req, res) => {
    res.send('Pos Info\n- /guardians\n- /delegators')
})

async function getGuardiansImpl(res) {
    const guardians = await a.getGuardians(['http://18.211.83.127/services/management-service/status)']);
    res.status(200).json(guardians);
}
app.get('/guardians', (req, res) => {
    getGuardiansImpl(res);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})