import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';

const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

const { Schema } = mongoose;

const SellSchema = new Schema({
  title: String, 
  image: String,
  desc: String,
 price:Number
});
const Sell = mongoose.model('sell', SellSchema);

app.get('/', async(req, res) => {
  try {
    const sells=await Sell.find({})
    res.json(sells)
  } catch (error) {
    res.status(500).json(error)
  }
})
app.get('/:id', async(req, res) => {
  try {
    const {id}=req.params
    const sell=await Sell.findById(id)
    res.json(sell)
  } catch (error) {
    res.status(500).json(error)
  }
})
app.post('/', async(req, res) => {
  try {
const sell=new Sell({...req.body})
await sell.save()
res.status(200).json("CREATED")
  } catch (error) {
    res.status(500).json(error)
  }
})
app.delete('/:id', async(req, res) => {
  try {
    const {id}=req.params
    const sell=await Sell.findByIdAndDelete(id)
    res.status(200).json("CREATED")
  } catch (error) {
    res.status(500).json(error)
  }
})
mongoose.connect("mongodb+srv://nuranaisazade:nurana2004@cluster0.bnrclo9.mongodb.net/")
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})