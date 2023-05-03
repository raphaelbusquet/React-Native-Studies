import React from 'react';
import { View, Text } from 'react-native';
import products from './Products';

const ProductsLists = () => {
    return ( 
        <>
            <Text>Lista de produtos</Text>
            {products.map((product) => (
                <Text key={product.id}>{product.nome} custa {product.preco}</Text>
            ))} 
            {/* it can be done with Flatlist as well */}
        </>
)}

export default ProductsLists