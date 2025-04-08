const getProducts = async (req, res) => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const apiData = await response.json();

        //return the product list
        res.status(200).json({ result: apiData });
    } catch(error){
        res.status(500).json({ error: 'Failed to fetch products' });
    }
}

module.exports = {
    getProducts
}