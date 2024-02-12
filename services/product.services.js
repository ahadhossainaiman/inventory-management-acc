const Product = require('../models/Product')


exports.getProductsService = async () => {
    const products = await Product.find({})
    return products;
}

exports.createProductService= async(data)=>{
    const product =await Product.create(data)
    return product;
}

exports.updateProductService = async (productId,data)=>{
    // const product = await Product.updateOne({_id:productId},{$set:data},{runValidators:true});
    const product = await Product.findById(productId);
    console.log(product);
    const result = await product.set(data).save()

    return result;
}