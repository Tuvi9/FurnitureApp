import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Header from "@components/Header";
import { categories } from "@data/categories";
import { products } from "@data/products";
import CategoryBox from "@components/CategoryBox";
import ProductHomeItem from "@components/ProductHomeItem";
import { styles } from "./styles";

const Home = () => {
    const [keyword, setKeyword] = useState()
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedProducts, setSelectedProducts] = useState(products);

    const navigation = useNavigation();

    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedSelectedProducts = products.filter((product) => product?.category === selectedCategory)
            setSelectedProducts(updatedSelectedProducts)
        } else if (selectedCategory && keyword) {
            const updatedSelectedProducts = products.filter((product) => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword.toLowerCase()))
            setSelectedProducts(updatedSelectedProducts)
        } else if (!selectedCategory && keyword) {
            const updatedSelectedProducts = products.filter((product) => product?.title?.toLowerCase().includes(keyword.toLowerCase()))
            setSelectedProducts(updatedSelectedProducts)
        } else if (!keyword && !selectedCategory) {
            setSelectedProducts(products)
        }
    }, [selectedCategory, keyword]);

    const renderCatrgoryItem = ({ item }) => {
        return (
            <CategoryBox
                onPress={() => setSelectedCategory(item?.id)}
                isSelected={item.id === selectedCategory}
                title={item?.title}
                image={item?.image}
            />
        )
    }

    const renderProductItem = ({ item }) => {
        const onProductPress = (product) => {
            navigation.navigate("ProductDetails", { product })
        }
        return (
            <ProductHomeItem onPress={() => onProductPress(item)} {...item} />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Header showSearch={true} onSearchKeyword={setKeyword} keyword={keyword} title="Find All You Need" />
                <View style={styles.categories}>
                    <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCatrgoryItem} keyExtractor={(item, index) => String(index)} />
                </View>
                <FlatList numColumns={2} data={selectedProducts} renderItem={renderProductItem} keyExtractor={(item) => String(item.id)} showsVerticalScrollIndicator={false} />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Home);