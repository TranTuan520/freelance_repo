import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../../Themes'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.cultured
  },
  rowView: {
    flexDirection: 'row'
  },
  productImage: {
    width,
    height: width * 0.8
  },
  productImagesIndicatorWrapper: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 80,
    height: 35,
    backgroundColor: Colors.black08,
    bottom: 10,
    borderRadius: 20
  },
  productImageIndicator: {
    color: Colors.white
  },
  productInfoWrapper: {
    padding: 8,
    backgroundColor: '#fff'
  },
  productPriceWrapper: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  productSale: {
    width: 60,
    height: 30,
    backgroundColor: Colors.coralRed,
    borderRadius: 1,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  productSaleContent: {
    color: Colors.white
  },
  productPriceSale: {
    fontWeight: '500',
    fontSize: 16,
    marginHorizontal: 8
  },
  productPrice: {
    color: 'gray',
    fontSize: 10,
    textDecorationLine: 'line-through'
  },
  productName: {
    marginVertical: 12
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between'
  },
  ratingContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingQuantity: {
    fontSize: 10,
    color: 'gray'
  },
  subRatingQuantity: {
    fontSize: 10,
    color: 'gray',
    marginLeft: 8
  },
  likeProductButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.tangerineYellow,
    alignItems: 'center',
    justifyContent: 'center'
  },
  likeProductButtonIcon: {
    width: 20,
    height: 16
  },
  productDetailButton: {
    margin: 12,
    backgroundColor: Colors.white,
    borderRadius: 16,
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center'
  },
  productRightIcon: {
    width: 35,
    height: 35
  },
  productDetailTitle: {
    fontSize: 12,
    marginHorizontal: 6
  },
  productDetailLeftIcon: {
    width: 6,
    height: 12,
    transform: [{ rotate: '180deg' }],
    position: 'absolute',
    right: 12
  },
  footerWrapper: {
    width,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    paddingVertical: 28,
    bottom: 0
  },
  footerLikeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.black01,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerLikeButtonIcon: {
    width: 20,
    height: 16
  },
  addToCartButton: {
    backgroundColor: Colors.blackRussian,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 2,
    marginHorizontal: 12
  },
  addToCartButtonTitle: {
    color: Colors.white
  },
  goBackButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  goBackButtonIcon: {
    width: 12,
    height: 22
  },
  ratingIcon: {
    width: 10,
    height: 10,
    marginHorizontal: 3
  },
  productTypes: {
    width: 55,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginHorizontal: 4
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: Colors.black02,
    justifyContent: 'flex-end'
  },
  modalContent: {
    alignSelf: 'stretch',
    backgroundColor: Colors.white
  },
  modalHeader: {
    alignSelf: 'stretch',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray
  },
  modalTitle: {
    fontWeight: 'bold'
  },
  closeModalButtonIcon: {
    width: 12,
    height: 12
  },
  modalColorWrapper: {
    alignSelf: 'stretch',
    padding: 12
  },
  modalCategory: {
    fontSize: 12
  },
  productSizeWrapper: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginTop: 12
  },
  productQuantityWrapper: {
    alignSelf: 'stretch',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  changeCardQuantityButton: {
    width: 55,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black02,
    marginRight: 4
  },
  changeCartQuantityButtonIcon: {
    width: 22,
    height: 22
  },
  productQuantity: {
    width: 55,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black01,
    borderWidth: 0.5,
    borderColor: 'gray',
    marginRight: 4
  },
  modalFooter: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 28
  },
  modalLikeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.black01,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalLikeButtonIcon: {
    width: 20,
    height: 16
  },
  productSizeItem: {
    width: 55,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginHorizontal: 4
  }
})
