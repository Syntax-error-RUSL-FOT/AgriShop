import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios'; // Import Axios
import { FlashList } from '@shopify/flash-list'; // Import FlashList

const AllProducts = () => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://192.168.8.101:8000/api/product'); // Replace with your API endpoint
            setData(response.data);
            console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>Price: ${item.price.toFixed(2)}</Text>  {/* Assuming price is a number */}
        </View>
    );


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {isLoading ? (
                <ActivityIndicator size="large" />
            ) : (
                data ? (
                    //   <FlatList
                    //     data={data}
                    //     renderItem={renderItem}
                    //     keyExtractor={item => item.id}
                    //     // Replace with FlashList for performance optimization
                    //     // Remove these props if using FlashList
                    //     // removeUselessProps
                    //   /> // Uncomment for FlatList
                    //   // <FlatList
                    //   //   data={data}
                    //   //   renderItem={renderItem}
                    //   //   keyExtractor={item => item.id}
                    //   />,
                    <View style={{ flex: 1 }}>
                        <FlashList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            estimatedItemSize={500} // Provide an estimated item size for better performance
                        />
                    </View>
                ) : (
                    <Text>No data found.</Text>
                )
            )}
        </View>
    );
};

export default AllProducts;
