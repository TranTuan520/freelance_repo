import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ImageSourcePropType,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
  Modal
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

// Styles
import styles from './Styles/ProductDetailStyles'
import { Images } from '../../Themes'
const { width } = Dimensions.get('window')

interface ProductType {
  id: string | number
  available: boolean
  color: string
  size: string[]
}

export interface Product {
  id: string | number
  price: number
  priceSale: number
  sale: number
  images: ImageSourcePropType[]
  name: string
  isLiked: boolean
  rating: {
    rate: number[]
    quantity: number
  }
  sold: number
  types: ProductType[]
}

const product: Product = {
  id: 1,
  price: 406000,
  priceSale: 406000,
  sale: 10,
  sold: 1201,
  images: [
    Images.product,
    Images.product,
    Images.product,
    Images.product,
    Images.product,
    Images.product,
    Images.product
  ],
  name: 'Solid Pocket Button Lapel Long Sleeve Blue Cotton 100%',
  rating: {
    rate: [5, 5, 5, 5, 5],
    quantity: 996
  },
  isLiked: false,
  types: [
    {
      id: 1,
      available: true,
      color: 'Đen',
      size: ['S', 'M', 'L', 'XL', '2XL']
    },
    {
      id: 2,
      available: false,
      color: 'Trắng',
      size: ['S', 'M', 'L', 'XL']
    },
    {
      id: 3,
      available: true,
      color: 'Xanh',
      size: ['S', 'M', 'L']
    }
  ]
}

const ProductDetailScreen = () => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number>(1)

  const [cartQuantity, setCartQuantity] = useState<number>(1)

  const [selectedColor, setSelectedColor] = useState(product.types[0])

  const renderProductImage = ({
    item,
    index
  }: {
    item: ImageSourcePropType
    index: number
  }) => {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <ImageBackground
          source={item}
          style={styles.productImage}
        ></ImageBackground>
      </TouchableOpacity>
    )
  }

  const handleListImageScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const index = parseInt(
      (event.nativeEvent.contentOffset.x / width).toFixed()
    )
    setSelectedImage(index + 1)
  }

  const listProductImageKeyExtractor = (
    item: ImageSourcePropType,
    index: number
  ) => `${item.toString() + index}`

  const renderRating = () => {
    return <Image source={Images.star} style={styles.ratingIcon} />
  }

  const renderProductType = (item: ProductType) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedColor(item)
        }}
        disabled={!item.available}
        style={{
          ...styles.productTypes,
          opacity: item.available ? 1 : 0.5
        }}
      >
        <Text>{item.color}</Text>
      </TouchableOpacity>
    )
  }

  const renderModal = () => {
    return (
      <Modal visible={visibleModal} transparent animationType='slide'>
        <View style={styles.modalWrapper}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Chọn phân loại</Text>
              <TouchableOpacity
                onPress={() => {
                  setVisibleModal(false)
                }}
              >
                <Image
                  source={Images.close}
                  style={styles.closeModalButtonIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalColorWrapper}>
              <Text style={styles.modalCategory}>MÀU SẮC</Text>
              <View style={styles.productSizeWrapper}>
                {product.types.map(renderProductType)}
              </View>
            </View>
            {/*  */}

            <View style={styles.modalColorWrapper}>
              <Text style={{ fontSize: 12 }}>KÍCH THƯỚC</Text>
              <View style={styles.productSizeWrapper}>
                {selectedColor.size.map(renderProductSize)}
              </View>
            </View>

            {/*  */}
            <View style={styles.productQuantityWrapper}>
              <Text style={{ fontSize: 12 }}>SỐ LƯỢNG</Text>
              <View style={styles.rowView}>
                <TouchableOpacity
                  onPress={() => {
                    cartQuantity - 1 &&
                      setCartQuantity((prevProps) => prevProps - 1)
                  }}
                  style={styles.changeCardQuantityButton}
                >
                  <Image
                    source={Images.minus}
                    style={styles.changeCartQuantityButtonIcon}
                  />
                </TouchableOpacity>
                <View style={styles.productQuantity}>
                  <Text>{cartQuantity}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setCartQuantity((prevProps) => prevProps + 1)
                  }}
                  style={styles.changeCardQuantityButton}
                >
                  <Image
                    source={Images.add}
                    style={styles.changeCartQuantityButtonIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.modalFooter}>
              <TouchableOpacity style={styles.modalLikeButton}>
                <Image
                  source={Images.heartOutLine}
                  style={styles.modalLikeButtonIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.addToCartButton}>
                <Text style={{ color: '#fff' }}>THÊM VÀO GIỎ HÀNG</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }

  const renderProductSize = (item: string) => {
    return (
      <TouchableOpacity style={styles.productSizeItem}>
        <Text>{item}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <FlatList
            data={product.images}
            keyExtractor={listProductImageKeyExtractor}
            renderItem={renderProductImage}
            horizontal
            snapToAlignment={'center'}
            snapToInterval={width}
            decelerationRate={'fast'}
            showsHorizontalScrollIndicator={false}
            onScroll={handleListImageScroll}
          />
          <View style={styles.productImagesIndicatorWrapper}>
            <Text style={styles.productImageIndicator}>
              {selectedImage}/{product.images.length}
            </Text>
          </View>
        </View>

        <View style={styles.productInfoWrapper}>
          <View style={styles.productPriceWrapper}>
            <View style={styles.productSale}>
              <Text style={styles.productSaleContent}>{product.sale}%</Text>
            </View>
            <Text style={styles.productPriceSale}>{product.priceSale}đ</Text>
            <Text style={styles.productPrice}>{product.price}đ</Text>
          </View>
          <Text style={styles.productName}>{product.name}</Text>
          <View style={styles.ratingWrapper}>
            <TouchableOpacity style={styles.ratingContent}>
              {product.rating.rate.map(renderRating)}
              <Text style={styles.ratingQuantity}>
                {product.rating.quantity}
              </Text>
              <Text style={styles.subRatingQuantity}>
                {' '}
                •Đã bán {product.sold}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeProductButton}>
              <Image
                source={Images.heart}
                style={styles.likeProductButtonIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.productDetailButton}
          onPress={() => {
            setVisibleModal(true)
          }}
        >
          <Image source={Images.stack} style={styles.productRightIcon} />
          <Text style={styles.productDetailTitle}>Màu sắc, kích thước</Text>
          <Image
            source={Images.leftArrow}
            style={styles.productDetailLeftIcon}
          />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footerWrapper}>
        <TouchableOpacity style={styles.footerLikeButton}>
          <Image
            source={Images.heartOutLine}
            style={styles.footerLikeButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonTitle}>THÊM VÀO GIỎ HÀNG</Text>
        </TouchableOpacity>
      </View>

      {renderModal()}

      <TouchableOpacity style={styles.goBackButton}>
        <Image source={Images.leftArrow} style={styles.goBackButtonIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ProductDetailScreen
