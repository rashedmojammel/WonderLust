const express = require('express')
const dotenv = require('dotenv')
const cors = require("cors")


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
dotenv.config();
const app = express()
const uri = process.env.MONGO_URI;
app.use(cors())
app.use(express.json())

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
     await client.connect();

    const db = client.db("wonderlust")
    const destinationCollection = db.collection("destinations");

    app.get('/destination', async(req, res)=>
    {
      const result = await destinationCollection.find().toArray();
      res.json(result);
    })

    app.post('/destination',(req,res) => {
      const destinationData = req.body
      const result = destinationCollection.insertOne(destinationData)
      res.json(result)
    })

    app.get("/destination/:id" , async(req , res)=>
  {
    const {id} = req.params
    const result = await destinationCollection.findOne({
      _id : new ObjectId(id)
    })
    res.json(result)
  })
   
   
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

const port = process.env.PORT;
app.get('/',(req,res)=>
{
    res.send("Server is running");
})

app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`)
})