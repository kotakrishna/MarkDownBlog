import express,{Express} from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index'
const bodyParser = require('body-parser')
const app:Express = express();

const PORT :string |number =process.env.PORT || 4000;


app.use(express.json())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
// app.use(require('body-parser').urlencoded({ extended: false }));


const uri:string = `mongodb://localhost:27017/markdownBlog`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set('useFindAndModify', false)

app.use(routes)
mongoose.connect(uri, options).then(()=>app.listen(PORT,()=>console.log(`server hosted on ${PORT}`)))