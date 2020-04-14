import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from '../store/action/actionTypes';



function ItemList(props) {

  const items = [
    {
      name: "خودرو سواری",
      api: "car",
    },
    {
      name: "فروش مسکونی",
      api: "buy-apartment",
    },
    {
      name: "اجاره مسکونی",
      api: "rent-apartment",
    },
    {
      name: "موبایل",
      api: "mobile-phones",
    },
    {
      name: "مبلمان",
      api: "sofa-armchair",
    },
    {
      name: "حیوانات",
      api: "pets-animals",
    },
    {
      name: "وسایل شخصی",
      api: "personal-goods",
    },
    {
      name: "خدمات",
      api: "services",
    },
    {
      name: "استخدام",
      api: "jobs",
    },
    {
      name: "تلویزیون",
      api: "tv-projector",
    }
  ];

  return (
    <div>
      <div className=" header-suggestions ">
        {items.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/s/tehran/${item.api}`}
              className="chip"
            >
              {item.name}
            </Link>
          );
        })}

      </div>
      <p className="header-suggestions-text">
        دیوار تهران - نیازمندی‌ های رایگان، آگهی‌های خرید، فروش نو و دست
        دوم و کارکرده، استخدام و خدمات
      </p>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    fetchDataSuccess: () => dispatch({ type: actionTypes.FETCH_DATA_SUCCESS }),
    changeCategory: () => dispatch({ type: actionTypes.SET_CATEGORY })
  };
};

const mapStateToProps = state => {
  return {
    fetchData: state.fetchData,
    category: state.category

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);


