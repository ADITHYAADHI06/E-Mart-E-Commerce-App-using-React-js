import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filterContext";

const Sort = () => {
  const { Grid_View, GridView, ListView, filter_products, sorting } = useFilterContext()


  return (
    <Wrapper>
      <div className="sorting-list--grid">
        <button className={Grid_View ? "sort-btn active" : "sort-btn"} onClick={() => { GridView() }}>
          <BsFillGridFill className="icon" />
        </button>
        <button className={Grid_View ? "sort-btn" : "sort-btn active"} onClick={() => { ListView() }} >
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-avalible">
        <p>{`${filter_products.length} products Available`}</p>
      </div>
      <div className="sort-selection">
        <form>
          <label htmlFor="sort"></label>
          <select name="sort" onClick={sorting} id="sort" className="sort-selection--style">
            <option value="#" disabled></option>
            <option value="lowest" className="sort-select--option">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest" className="sort-select--option">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z" className="sort-select--option">name(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a" className="sort-select--option">name(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort