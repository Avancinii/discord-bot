import { router } from "../routes";
import { ProductService } from "../service/productService";

router.get("/products", async (req, res) => {
    try {
        const product = await ProductService.createProduct(req.body);
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

});
router.post("/products", (req, res) => {

});
router.put("/products/:id", (req, res) => {

});
router.delete("/products/:id", (req, res) => {

});