import React from "react";
import "./Cart.css";

const Empty = ({ setCartIsOpen }) => {
    return (
        <>
            <div className="cart__title">
                <span className="cart__name">Корзина</span>
            </div>
            <div className="cart__empty">
                <img src="img/empty.png" alt="empty" />
                <span className="cart__empty-title">Корзина пустая</span>
                <span className="cart__empty-info">
                    Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                </span>
            </div>

            <div className="cart__footer">
                <button
                    className="cart__button"
                    onClick={() => setCartIsOpen((prev) => !prev)}
                >
                    Вернуться назад
                </button>
            </div>
        </>
    );
};

export default Empty;
