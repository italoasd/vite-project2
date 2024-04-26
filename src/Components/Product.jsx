/* eslint-disable react/prop-types */

function Product(props) {
  return(
    <div className="card">
      <h3>{props.product}</h3>
      <img src={props.image} alt="" />
      <div className="card-bottom">
        <span className="price">{props.price}</span>
        <button>purchase</button>
      </div>
    </div>
  )
}

export default Product