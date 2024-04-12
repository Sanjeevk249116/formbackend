const express = require('express')
const { DataModel } = require('../Model/DataModel')
const router = express.Router()

router.get('/', async(req, res) => {
    const data=await DataModel.find()
    res.send({msg:data})
})

router.post('/post', async (req, res) => {
    const postData = await new DataModel(req.body)
    postData.save()
    console.log(postData)
    res.send('post successful...')
})

module.exports = { router }