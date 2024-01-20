import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../api/Api';

const ProductDashboard = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        productName: '',
        productDetails: '',
    });

    const fetchProducts = async () => {
        try {
            const response = await getProducts();
            setProducts(response.products);
        } catch (error) {
            console.error('Error fetching products:', error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await addProduct(newProduct);
            setProducts([...products, response.savedProduct]);
            setNewProduct({
                productName: '',
                productDetails: '',
            });
        } catch (error) {
            console.error('Error adding product:', error.message);
        }
    };

    const handleUpdateProduct = async (productId, updatedProductData) => {
        try {
            const response = await updateProduct(productId, updatedProductData);
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product._id === productId ? response.updatedProduct : product
                )
            );
        } catch (error) {
            console.error('Error updating product:', error.message);
        }
    };

    const handleDeleteProduct = async (productId) => {
        try {
            const response = await deleteProduct(productId);
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product._id !== productId)
            );
        } catch (error) {
            console.error('Error deleting product:', error.message);
        }
    };

    return (
        <div>
            <h2>Product Dashboard</h2>

            {/* Add Product Form */}
            <form onSubmit={handleAddProduct}>
                <label>
                    Product Name:
                    <input
                        type="text"
                        name="productName"
                        value={newProduct.productName}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Product Details:
                    <input
                        type="text"
                        name="productDetails"
                        value={newProduct.productDetails}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type="submit">Add Product</button>
            </form>

            {/* Product List */}
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        {product.productName} - {product.productDetails}
                        <button onClick={() => handleUpdateProduct(product._id, { productDetails: 'Updated Details' })}>
                            Update
                        </button>
                        <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductDashboard;