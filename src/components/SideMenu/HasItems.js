import React from "react";
import { ReactComponent as Close } from "../SVG/close.svg";
const HasItems = ({ items, removeItem, cost }) => {
    return (
        <>
            <div className="cart__title">
                <span className="cart__name">Корзина</span>
            </div>
            <div className="cart__items-wrapper">
                {items.length &&
                    items.map((item) => {
                        return (
                            <div className="cart__item" key={Math.random()}>
                                <div className="cart__item-img">
                                    <img src={item.img} alt="img" />
                                </div>
                                <div className="cart__item-description">
                                    <span className="cart__item-name">
                                        {item.title}
                                    </span>
                                    <span className="cart__item-price">
                                        {item.price}
                                    </span>
                                </div>

                                <div className="cart__item-close">
                                    <Close
                                        className="cart__item-close-button"
                                        onClick={() => removeItem(item.id)}
                                    />
                                </div>
                            </div>
                        );
                    })}
            </div>

            <div className="cart__footer">
                <div className="cart__footer-total-price">
                    <span className="car__footer-total">Итого:</span>
                    <span className="cart__footer-line"></span>
                    <span className="cart__footer-price">{cost} RUB</span>
                </div>
                <button className="cart__button">Оформить заказ</button>
            </div>
        </>
    );
};

export default HasItems;
