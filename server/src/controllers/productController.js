const { get } = require("mongoose");
const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      brand,
      stock,
    } = req.body;

    if (
      !name ||
      !description ||
      price === undefined ||
      !category ||
      stock === undefined
    ) {
      return res.status(400).json({
        message: "Name, description, price, category and stock are required",
      });
    }

    const product = await Product.create({
      vendorId: req.vendor._id,
      name,
      description,
      price,
      category,
      brand,
      stock,
    });

    return res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Product creation error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

const getProducts = async (req , res )=>{
    try {
        const products = await Product.find({
            vendorId:req.vendor._id
        });

        return res.status(200).json({
            message : "fetched Succesfully",
            products

        })
    } catch (error) {
        console.error("Get products error:", error);

        return res.status(500).json({
           message: "Server error",
        });
    }

}

const getProductById = async (req , res)=>{
    try {
        const product =  await Product.findById(req.params.productId);

    if(!product){
        return res.status(401).json({
            message:"Product Not Found"
        });
    }

    return res.status(200).json({
        product
    })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
      message: "Server error",
    });
        
    }
}

const updateProduct = async (req , res)=>{
    try {
        const product = await product.find({
            _id : req.params.productId,
            vendorId:req.vendor._id
        });

        const {
            name,
            description, 
            price,
            category,
            brand,
            stock,

        } = req.body;

        if(!product){
            return res.status(400).json({
                message:"product Not Found"
            })
        }

        if (name !== undefined) product.name = name;
        if (description !== undefined) product.description = description;
        if (price !== undefined) product.price = price;
        if (category !== undefined) product.category = category;
        if (brand !== undefined) product.brand = brand;
        if (stock !== undefined) product.stock = stock;

        await product.save();

        return res.status(200).json({
            message:"product updated succesfully"
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message:"Server Error"

        })
        
    }
}

const deleteProduct = async (req , res)=>{

    try {
        const product = await product.findOneAndDelete({
            productId: req.params.productId,
            vendorId: req.vendor._id
        });

        if(!product){
            return res.status(404).json({
                message:"Product Not Found"
            })
        }

        return res.status(200).json({
            message:"Product Deleted Successfuly"
        })

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message:"Server Side Error"
        });
        
    }




}

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct

};