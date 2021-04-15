var express = require('express')

var router = express.Router()

const products = [
  { id: 123, name: "japani joota", price: 1200 },
  { id: 1234, name: "jalebi", price: 500 }
]
let idCounter = 1234;

router.route("/")
.get((req, res) => {
  
  res.status(201).json(products);
})
.post( (req, res) => {

  const { name, price } = req.body;

  const product = { id: idCounter + 1, name, price };
  products.push(product);

  res.json(products);
})



router.route("/:id")
.get((req,res)=>res.json({"message":"get Not implemented yet"}))
.post( (req, res) => {
  const { id } = req.params;
  const updateProduct = req.body;

  products.forEach(product => {
    if (product.id === parseInt(id, 10)) {

      Object.keys(updateProduct).forEach(key => {
        if (key in product) {
          product[key] = updateProduct[key]
        }
      })

    }
  })
  res.json({ products, success: true })
})
.delete((req,res)=>res.json({"message":"delete not implemented yet"}))





module.exports = router;
