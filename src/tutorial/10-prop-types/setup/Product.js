import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/image.png'
const Product = ({ image, price, name }) => {
  const url=image && image.url
  console.log(image,price,name);
  return <article className='product'>
    <img src={url || defaultImage} alt={name}/>
    <p>{name}</p>
    <p>${price || 300}</p>
  </article>;
};
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired
}
// Product.defaultProps = {
//   name: "default name",
//   price: 333,
//   image:{defaultImage}
// }

export default Product;
