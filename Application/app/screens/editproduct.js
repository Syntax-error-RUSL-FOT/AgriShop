import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios'; // Assuming an API using Axios

const Editproduct = ({ route, navigation }) => {
    const [productId, setProductId] = useState(null); // Store product ID
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [availableQty, setAvailableQty] = useState(''); // For available quantity
    const [warranty, setWarranty] = useState(''); // For warranty information

    // Optional: Fetch initial product data on mount (if editing existing product)
    useEffect(() => {
        const fetchProductData = async () => {
            // const { productId } = route.params; // Get product ID from navigation params
            if (productId) {
                try {
                    const response = await axios.get(`http://your-api-endpoint.com/products/${productId}`);
                    const product = response.data;
                    setProductId(product.id);
                    setProductName(product.name);
                    setProductDescription(product.description);
                    setProductPrice(product.price);
                    setAvailableQty(product.availableQty); // Set available quantity
                    setWarranty(product.warranty); // Set warranty information
                } catch (error) {
                    console.error('Error fetching product data:', error);
                    // Handle errors (e.g., display error message)
                }
            }
        };
        fetchProductData();
    },
    //  [route.params]
    ); // Re-run useEffect when route params change

    const handleEditProduct = async () => {
        try {
            const response = await axios.put(`http://192.168.8.101:8000/api/product/${productId}`, {
                name: productName,
                description: productDescription,
                price: productPrice,
                availableQty: availableQty, // Add available quantity to API data
                warranty: warranty, // Add warranty to API data
            });
            console.log('Product edited:', response.data);
            alert('Product edited successfully!');
            navigation.goBack(); // Navigate back (assuming edit screen is pushed from another screen)
        } catch (error) {
            console.error('Error editing product:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Edit Product</Text>
            <TextInput
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
                placeholder="Product Name"
                onChangeText={setProductName}
                value={productName}
            />
            <TextInput
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
                placeholder="Product Description"
                onChangeText={setProductDescription}
                value={productDescription}
                multiline={true}
            />
            <TextInput
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
                placeholder="Product Price"
                onChangeText={setProductPrice}
                value={productPrice}
                keyboardType="numeric"
            />
            <TextInput
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
                placeholder="Available Quantity"
                onChangeText={setAvailableQty}
                value={availableQty}
                keyboardType="numeric"
            />
            <Button title="Save Changes" onPress={handleEditProduct} />
        </View>
    );
};

export default Editproduct;
