import React from "react";
import styled from "styled-components";
import ProductList from "./components/ProductList"
import Sort from "./components/Sort";
import Filter from "./components/Filter";

const Products = () => {
  return <Wrapper>
    <div className="container grid grid-filter-column">
      <div className="fiter-section">
        <Filter />
      </div>

      <section className="Product-view-sort">
        <div>
          <Sort />
        </div>
        <div className="main-product">
          <ProductList />
        </div>
      </section>
    </div>

  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
