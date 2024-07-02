import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios'; // Assuming an API using Axios

const Addproduct = ({ navigation }) => { // Pass navigation prop for redirecting

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [availableQty, setAvailableQty] = useState(''); // New state for available quantity
    const [warranty, setWarranty] = useState(''); // New state for warranty

    const handleAddProduct = async () => {
        try {
            const response = await axios.post('http://192.168.8.101:8000/api/product', {
                name: productName,
                description: productDescription,
                price: productPrice,
                availableQty: availableQty, // Add available quantity to API data
                warranty: warranty, // Add warranty to API data
            });
            console.log('Product added:', response.data);
            setProductName('');
            setProductDescription('');
            setProductPrice('');
            setAvailableQty('');
            setWarranty(''); // Clear form state on success
            alert('Product added successfully!');
            navigation.navigate('ProductScreen', { addedProduct: response.data }); // Navigate with optional data
        } catch (error) {
            console.error('Error adding product:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Add Product</Text>
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
                keyboardType="numeric" // Set keyboard type for numbers
            />
            <Button title="Add Product" onPress={handleAddProduct} />
        </View>
    );
};

export default Addproduct;
