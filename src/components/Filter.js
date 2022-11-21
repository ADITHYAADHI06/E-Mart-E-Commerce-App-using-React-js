import React from 'react'
import styled from "styled-components"
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from '../context/filterContext'
import FormatPrice from "../Helpers/FormatPrice"
import { Button } from "../styles/Button"

const Filter = () => {
  const { filters: { SearchText, Categery, Color, maxPrice, Price, minPrice }, updateFilterValue, all_products, ClearFilters } = useFilterContext();

  // console.log(Price);
  const unicData = (data, property) => {

    let newVal = data.map((curElem) => {
      return curElem[property];
    })
    if (property === "colors") {
      newVal = newVal.flat();
    }
    newVal = ["All", ...new Set(newVal)];
    // console.log(newVal);
    return newVal;
  }

  let diffrentCatogerys = unicData(all_products, "category");
  let companyData = unicData(all_products, "company");
  let colorsData = unicData(all_products, "colors");

  return (
    <Wrapper>
      <div className='filter-search'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" value={SearchText} name="SearchText" onChange={updateFilterValue} autoComplete="off" />
        </form>
      </div>

      <div className='filter-category'>
        <h3>Category</h3>
        <div>
          {
            diffrentCatogerys.map((curElem, i) => {
              return (
                <button
                  key={i}
                  type="button"
                  name="Categery"
                  value={curElem}
                  className={curElem === Categery ? "active" : ""}
                  onClick={updateFilterValue}>
                  {curElem}
                </button>
              );
            })
          }

        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="Company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}>
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="Company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className='filter-color'>
        <h3>Colors</h3>
        <div className='filter-color-style'>


          {
            colorsData.map((curElem, i) => {
              if (curElem === "All") {
                return (
                  <button key={i}
                    type='button'
                    className="color-all--style"
                    name='Color'
                    value={curElem}
                    onClick={updateFilterValue}>
                    All
                  </button>);
              } else {
                return (
                  <button key={i} type='button'
                    className={Color === curElem ? "btnStyle active" : "btnStyle"}
                    style={{ backgroundColor: curElem }}
                    name='Color' value={curElem}
                    onClick={updateFilterValue}>
                    {Color === curElem ? <FaCheck className="checkStyle" /> : null}
                  </button>);
              }
            })
          }
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={Price} />
        </p>
        <input
          type="range"
          name="Price"
          min={minPrice}
          max={maxPrice}
          value={Price}
          onChange={updateFilterValue}
        />
      </div>


      <div className='filter-clear'>
        <Button className="btn" onClick={ClearFilters}>Clear Filters</Button>
      </div>


    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default Filter