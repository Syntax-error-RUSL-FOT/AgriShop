import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import axios from 'axios'; // Assuming an API using Axios
import { useNavigation } from '@react-navigation/native';

const Deleteproduct = ({ route, navigation }) => {
    const [productId, setProductId] = useState(null);
    const [productName, setProductName] = useState('');

    const navigation = useNavigation();
    const back = () => {
        navigation.navigate('category_tabs');
    };
    // Fetch initial product data on mount (if deleting an existing product)
    useEffect(() => {
        const fetchProductData = async () => {
            // const { productId } = route.params; // Get product ID from navigation params
            if (productId) {
                try {
                    const response = await axios.get(`http://your-api-endpoint.com/products/${productId}`);
                    const product = response.data;
                    setProductId(product.id);
                    setProductName(product.name);
                } catch (error) {
                    console.error('Error fetching product data:', error);
                    // Handle errors (e.g., display error message)
                }
            }
        };
        fetchProductData();
    },
        // [route.params]
    ); // Re-run useEffect when route params change

    const handleDeleteProduct = async () => {
        const confirmation = await Alert.alert(
            'Confirm Deletion',
            `Are you sure you want to delete "${productName}"?`,
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', onPress: () => confirmDelete(), style: 'destructive' },
            ]
        );

        if (confirmation.dismissedBy === 'user') {
            return; // User canceled deletion
        }

        try {
            await axios.delete(`http://192.168.8.101:8000/api/product/${productId}`);
            console.log('Product deleted:', productId);
            alert('Product deleted successfully!');
            navigation.goBack(); // Navigate back (assuming edit screen is pushed from another screen)
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('An error occurred. Please try again.');
        }
    };

    const confirmDelete = () => {
        handleDeleteProduct(); // Call the main delete function for confirmation handling
    };

    return (
        <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Delete Product</Text>
            <Text style={{ fontSize: 18 }}>Are you sure you want to delete "{productName}"?</Text>
            <View style={{ marginTop: 20 }}>
                <Button title="Cancel" onPress={back} style={{ marginRight: 10 }} />
                <Button title="Delete Product" onPress={confirmDelete} color="red" />
            </View>
        </View>
    );
};

export default Deleteproduct;
