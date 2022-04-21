import React from 'react';
import { connect } from 'dva';
import ProductList from '@/components/ProductList';

const Products = ({ dispatch, products,aaa ,bbb}) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  
  const getPayments = (parms) => {
    dispatch({
      type: 'products/getPaymentsAction',
      payload: {
        ...parms
      },
      callback: () => {
      },
    })
  }
  return (
    <div>
      HOME
      <h2 onClick={()=>{
        getPayments()
      }} >List of Products</h2>
      {products.name}
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
export default connect(({ products,aaa,bbb }) => ({
  products,
  aaa,
  bbb
}))(Products);