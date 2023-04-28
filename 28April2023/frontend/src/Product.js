import { useEffect } from 'react';
import axios from 'axios';
function Product() {
    useEffect(() => {
        axios.get("http://localhost:9012/products").then(
            response => {
                console.log("response", response);
            },
            error => {
                console.log("error", error);
            }
        )

    }, [])
    return (
        <div>
            <h1>Product</h1>
        </div>
    )
}
export default Product;