import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import CategoryList from "./Filters/CategoryList";
import BrandList from "./Filters/BrandList";
import SeasonList from "./Filters/SeasonList";
import GenderList from "./Filters/GenderList";
import Search from "../Components/Search";
import InitialData from "./ProductData";
import { fetchProductsData, saveProductsData } from "../store/action";

function Home(props) {
  const dispatch = useDispatch();
  const [selectedValueForGender, setSelectedValueForGender] = useState(
    new Set()
  );
  const [selectedValueForCategory, setSelectedValueForCategory] = useState(
    new Set()
  );
  const [stateForFilter, setStateForFilter] = useState(false);
  const [selectedValueForBrand, setSelectedValueForBrand] = useState(new Set());
  const [selectedValueForSeason, setSelectedValueForSeason] = useState(
    new Set()
  );
  const [selectedValueForAllFilters, setSelectedValueForAllFilters] = useState(
    new Map()
  );

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  const [input, inputState] = useState("");
  const [state, setState] = useState("");

  function onChangeForSearch(event) {
    inputState(event.target.value);
    console.log(event.target.value);
  }

  function keyUpEvent(event) {
    if (event.key === "Enter") {
      setState(input);
      event.preventDefault();
      let arrayValue = props?.data?.filter((value) => {
        if (value.gender.toLowerCase() === state.toLowerCase()) {
          return value;
        } else if (value.category.toLowerCase() === state.toLowerCase()) {
          return value;
        } else if (value.brand.toLowerCase() === state.toLowerCase()) {
          return value;
        } else if (value.season.toLowerCase() === state.toLowerCase()) {
          return value;
        }
        else if (value.productName.toLowerCase().includes(state.toLowerCase())) {
          return value;
        }
      });
      setStateForFilter(true);
      dispatch(
        saveProductsData(
          props.data,
          arrayValue,
          props.gender,
          props.category,
          props.brand,
          props.season
        )
      );
    }
  }

  function onImageClickHandler(event) {
    setState(input);
    event.preventDefault();
    let arrayValue = props?.data?.filter((value) => {
      if (value.gender.toLowerCase() === state.toLowerCase()) {
        return value;
      } else if (value.category.toLowerCase() === state.toLowerCase()) {
        return value;
      } else if (value.brand.toLowerCase() === state.toLowerCase()) {
        return value;
      } else if (value.season.toLowerCase() === state.toLowerCase()) {
        return value;
      }
      else if (value.productName.toLowerCase().includes(state.toLowerCase())) {
        return value;
      }
    });
    setStateForFilter(true);
    dispatch(
      saveProductsData(
        props.data,
        arrayValue,
        props.gender,
        props.category,
        props.brand,
        props.season
      )
    );
  }

  const onGenderHandler = (productValue) => {
    console.log(productValue);
    let arrayValue = props?.data?.filter((value) => {
      if (value.gender === productValue) {
        return value;
      }
    });
    setStateForFilter(true);
    dispatch(
      saveProductsData(
        props.data,
        arrayValue,
        props.gender,
        props.category,
        props.brand,
        props.season
      )
    );
  };

  const onCategoryHandler = (productValue) => {
    selectedValueForCategory.add(productValue);
    selectedValueForAllFilters.set("Category", selectedValueForCategory);
    console.log(selectedValueForAllFilters);
    let arrayValue = props?.data?.filter((value) => {
      for (let mapValue of selectedValueForAllFilters.values()) {
        let arrayForMap = Array.from(mapValue);
        console.log(arrayForMap);
        for (let i = 0; i < arrayForMap.length; i++) {
          if (value.category === arrayForMap[i]) {
            return value;
          } else if (value.brand === arrayForMap[i]) {
            return value;
          } else if (value.season === arrayForMap[i]) {
            return value;
          }
        }
      }
    });
    setStateForFilter(true);
    dispatch(
      saveProductsData(
        props.data,
        arrayValue,
        props.gender,
        props.category,
        props.brand,
        props.season
      )
    );
  };

  const onBrandHandler = (productValue) => {
    selectedValueForBrand.add(productValue);
    selectedValueForAllFilters.set("Brand", selectedValueForBrand);
    console.log(selectedValueForAllFilters);
    let arrayValue = props?.data?.filter((value) => {
      for (let mapValue of selectedValueForAllFilters.values()) {
        let arrayForMap = Array.from(mapValue);
        console.log(arrayForMap);
        for (let i = 0; i < arrayForMap.length; i++) {
          if (value.category === arrayForMap[i]) {
            return value;
          } else if (value.brand === arrayForMap[i]) {
            return value;
          } else if (value.season === arrayForMap[i]) {
            return value;
          }
        }
      }
    });
    setStateForFilter(true);
    dispatch(
      saveProductsData(
        props.data,
        arrayValue,
        props.gender,
        props.category,
        props.brand,
        props.season
      )
    );
  };

  const onSeasonHandler = (productValue) => {
    selectedValueForSeason.add(productValue);
    selectedValueForAllFilters.set("Season", selectedValueForSeason);
    console.log(selectedValueForAllFilters);
    let arrayValue = props?.data?.filter((value) => {
      for (let mapValue of selectedValueForAllFilters.values()) {
        let arrayForMap = Array.from(mapValue);
        console.log(arrayForMap);
        for (let i = 0; i < arrayForMap.length; i++) {
          if (value.category === arrayForMap[i]) {
            return value;
          } else if (value.brand === arrayForMap[i]) {
            return value;
          } else if (value.season === arrayForMap[i]) {
            return value;
          }
        }
      }
    });
    setStateForFilter(true);
    dispatch(
      saveProductsData(
        props.data,
        arrayValue,
        props.gender,
        props.category,
        props.brand,
        props.season
      )
    );
  };

  return (
    <section id="products">
      <div className="container-fluid">
        <div className="product-header">
          <div className="row">
            <div className="col-md-2 offset-sm-1 col-sm-3 no-padding">
              <div className="left-container">
                <button>
                  <span>
                    <i className="fa fa-bars" />
                  </span>
                </button>
                <div className="filters">
                  <span className="title">Filter</span>
                  <ul className="gender-list">
                    <h4 className="filter-header">GenderList</h4>
                    {props?.gender?.map((productValue, index) => (
                      <GenderList
                        id={index}
                        productValue={productValue}
                        onClick={onGenderHandler}
                      />
                    ))}
                  </ul>
                  <ul className="categories-list">
                    <h4 className="filter-header">categories</h4>
                    {props?.category?.map((productValue, index) => (
                      <CategoryList
                        id={index}
                        productValue={productValue}
                        onClick={onCategoryHandler}
                      />
                    ))}
                  </ul>
                  <ul className="brand-list">
                    <h4 className="filter-header">Brand</h4>
                    {props?.brand?.map((productValue, index) => (
                      <BrandList
                        id={index}
                        productValue={productValue}
                        onClick={onBrandHandler}
                      />
                    ))}
                  </ul>
                  <ul className="season-list">
                    <h4 className="filter-header">Season</h4>
                    {props?.season?.map(
                      (productValue, index) =>
                        productValue.length > 0 && (
                          <SeasonList
                            id={index}
                            productValue={productValue}
                            onClick={onSeasonHandler}
                          />
                        )
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-7 col-xs-12 no-padding">
              <div className="right-container">
                <Search
                  onClick={onImageClickHandler}
                  onKeyUp={keyUpEvent}
                  onChange={onChangeForSearch}
                />
                <div className="search-container">
                  <div className="row">
                    {(stateForFilter === false &&
                      props?.data &&
                      props?.data?.map((product, index) => (
                        <InitialData id={index} productValue={product} />
                      ))) ||
                      (stateForFilter === true &&
                        props?.filterData &&
                        props?.filterData?.map((product, index) => (
                          <InitialData id={index} productValue={product} />
                        )))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapData = (state) => {
  return {
    data: state.data,
    filterData: state.filterData,
    gender: state.gender,
    category: state.category,
    brand: state.brand,
    season: state.season,
  };
};

export default connect(mapData)(Home);
