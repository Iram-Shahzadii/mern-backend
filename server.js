require('dotenv').config()
const app = require('./src/app')


app.get('/', (req, res) => {
    res.send({
        activeStatus: true,
        error:false,
    })
        
    })
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})

