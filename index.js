const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
res.send('PM2 app is running');
});
app.get("/test",(req,res)=>{
	res.send("Auto deployment working")
})
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
