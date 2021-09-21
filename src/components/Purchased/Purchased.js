import React from "react";
import Card from "../Card/Card";
import { ReactComponent as Back } from "../SVG/back.svg";
import { ReactComponent as NoItems } from "../SVG/nopurchased.svg";
import "./Purchased.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Purchased = () => {
    const purchasedItems = useSelector((state) => state.purchased);

    return (
        <div className="purchased">
            <div className="purchased__header">
                <div className="purchased__header-back">
                    <Link to="/">
                        <Back />
                    </Link>
                </div>
                <span className="purchased__header-title">Moи, закладки</span>
            </div>
            <div className="purchased__items">
                {purchasedItems.length ? (
                    purchasedItems.map((item, index) => {
                        return (
                            <Card
                                id={item.id}
                                price={item.price}
                                key={item.id + Math.random()}
                                title={item.title}
                                img={item.img}
                                like={item.liked}
                            />
                        );
                    })
                ) : (
                    <div className="purchased__no-items">
                        <NoItems className="purchased__empty" />
                        <Link to="/">
                            <button className="purchased__back">
                                Вернуться назад
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Purchased;
