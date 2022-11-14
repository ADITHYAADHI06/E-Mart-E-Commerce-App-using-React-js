import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filterContext';
import GridView from './subComponents/GridView';
import ListView from './subComponents/ListView';

const ProductList = () => {

  const { filter_products, Grid_View } = useFilterContext();
  // console.log(filter_products);

  if (Grid_View) {
    return <GridView filter_products={filter_products} />
  } else {
    return <ListView filter_products={filter_products} />
  }


  // return (
  //   <Wrapper>



  //    
  //   </Wrapper>
  // )
}

export default ProductList