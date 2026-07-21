const express = require('express');
const app = express();
app.get('/health', (req,res)=>res.json({ok:true, mini:true}));
app.listen(3961, ()=>{ require('fs').writeFileSync('/tmp/mini.flag','listening\n'); });
