const express = require('express')
const fs = require('fs')

const router = express.Router()

const data = [
    {
        id: 1,
        product: "Shoes"
    },
    {
        id: 2,
        product: "Bread"
    }
]

router.get('/', (req,res,next) => {
    res.render('index', { products: data, title: "Shopping List" })
})

module.exports = router