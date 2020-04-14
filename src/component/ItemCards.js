import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import * as actionTypes from '../store/action/actionTypes';
import { fetchData } from '../store/action/action';
import style from "./ItemCards.module.scss";


function ItemCards(props) {
    useEffect(() => {
        props.fetchData(props.category);
        console.log(props.category);
    }, [props.category])

    useEffect(() => {
        props.changeCategory(props.match.params.category);
    }, [props.match.params.category]);
    console.log(props.items);
    return (
        <>
            <div className=" main_container">
                {props.data.map(item => {
                    return (
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className={style.card}>
                                <div className="row  p-tb-large " dir="ltr" style={{ flexDirection: 'row', border: 'none' }} >
                                    <div className="col-5 ">
                                        <img
                                            className={style.card__image}
                                            src={
                                                item.data.image ? item.data.image : "./../../Img/2.png"
                                            }
                                        />
                                    </div>
                                    <div className="col-7 " style={{ height: "100%" }}>
                                        <div className={style.card__text} dir="rtl">
                                            <p className={style.card__text__title}>{item.data.title}</p>
                                            <p className={style.card__text__price}>
                                                {item.data.description}
                                            </p>

                                            <div style={{ display: "flex" }}>
                                                <p className={style.card__text__time_posted}>
                                                    {item.data.red_text ? (
                                                        <span className={style.card__text__time_posted__urgent}>
                                                            فوری{" "}
                                                        </span>
                                                    ) : (
                                                            ""
                                                        )}
                                                    {item.data.normal_text}
                                                </p>
                                                {item.data.has_chat ? (
                                                    <span className={style.card__text__chat}>
                                                        <i className="fa fa-comments-o" aria-hidden="true"></i>
                                                    </span>
                                                ) : (
                                                        ""
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: (category) => dispatch(fetchData(category)),
        changeCategory: (category) => dispatch({ type: actionTypes.SET_CATEGORY, category: category })
    };
};

const mapStateToProps = state => {
    return {
        fetchData: state.fetchData,
        category: state.category,
        data: state.data,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemCards);



