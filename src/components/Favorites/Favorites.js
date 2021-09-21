import React from "react";
import Card from "../Card/Card";
import { ReactComponent as Back } from "../SVG/back.svg";
import { ReactComponent as NoItems } from "../SVG/noliked.svg";
import "./Favorites.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favorites = () => {
    const likedItems = useSelector((state) => state.liked);

    return (
        <div className="favorites">
            <div className="favorites__header">
                <div className="favorites__header-back">
                    <Link to="/">
                        <Back />
                    </Link>
                </div>
                <span className="favorites__header-title">Moи закладки</span>
            </div>
            <div className="favorites__items">
                {likedItems.length ? (
                    likedItems.map((item, index) => {
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
                    <div className="favorites__no-items">
                        <NoItems className="favorites__empty" />
                        <Link to="/">
                            <button className="favorites__back">
                                Вернуться назад
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Favorites;
