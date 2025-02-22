import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class ProductController {

    @GetMapping("/api/products")
    public List<Product> getProducts() {
        // Hardcoded products for simplicity, would be fetched from a database in real-world
        return List.of(
            new Product(1, "Laptop", 999.99),
            new Product(2, "Smartphone", 499.99),
            new Product(3, "Headphones", 89.99)
        );
    }

    @GetMapping("/api/recommendations")
    public List<Product> getRecommendations() {
        // In a real application, you'd use a Python-based recommendation system here
        return List.of(
            new Product(1, "Smartwatch", 199.99),
            new Product(2, "Bluetooth Speaker", 59.99)
        );
    }
}
