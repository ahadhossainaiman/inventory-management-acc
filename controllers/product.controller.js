 const { getProductsService, createProductService, updateProductService } = require("../services/product.services");



exports.getProducts = async (req, res, next) => {
    try {
        // const products = await Product
        //   .where("name").equals(/\w/)
        //   .where("quantity").gt(100).lt(600)
        //   .limit(2).sort({ qunatity: -1 })
        const products = await getProductsService();

        res.status(200).json({
            status: "success",
            data: products
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });
    }
};



exports.createProduct = async (req, res, next) => {

    try {
        // save or create

        const result = await createProductService(req.body);

        result.logger();

        res.status(200).json({
            status: "success",
            message: "Data inserted successfully!",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: " Data is not inserted ",
            error: error.message
        });
    }

};

exports.updateProduct = async (req,res,next)=>{
    try {
        const {id} = req.params;
        console.log(id);
        console.log(req.body);
        const result = await updateProductService(id,req.body)
        res.status(200).json({
            status: "success",
            message: "Data Update successfully!",
            data: result
        });
        
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:"Data is not Updated",
            error:error.message
        })
    }
}