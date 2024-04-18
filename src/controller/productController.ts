import { router } from "../routes";
import { ProductService } from "../service/productService";

const productService = new ProductService();

router.get("/product/getAllProducts", async (req, res) => {
    try {
        const product = await productService.getAllProducts();
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({ error: error });
      }

});

router.get('/product/findById/:id', async (req, res) => {
    try {
        const product = await productService.getProductById(Number(req.params.id));
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.post("/product/createProduct", async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({ error: error });
      }
});

router.put("/product/updateProduct/:id", async (req, res) => {
    try {
        const product = await productService.updateProduct(Number(req.params.id), req.body);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ error: error });
      }
});

router.delete("/product/deleteProduct/:id", async (req, res) => {
    try {
        const product = await productService.deleteProduct(Number(req.params.id));
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ error: error });
      }
});