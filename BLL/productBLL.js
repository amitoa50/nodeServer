const Product = require('../models/ProductModel');

const getAllProducts = () => {
  return Product.find({});
};
const getProductById=(args)=>{
    const {id}=args
    return Product,findById({_id:id})
}
const addProduct=async(args)=>{
    const {product}=args
    const newProduct=new Product(product)
    await newProduct.save()
    return 'sucsess'
}
const updateProduct=async(args)=>{
    const {id}=args
    const {product}=args
    await Product.findByIdAndUpdate(id,product)
    return "sucsess"
}
const deleteProduct =async(args)=>{
    const {id}=args
    await Product.findByIdAndDelete(id)
    return "sucsess"
}
const getProductsExpensiveThan=async(args)=>{
    const {Price:price}=args
    return Product.find({ Price: { $gt: price } });
}
module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductsExpensiveThan,
  };