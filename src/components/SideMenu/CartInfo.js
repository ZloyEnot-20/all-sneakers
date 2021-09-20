import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../actions";
import "./Cart.css";

const CartInfo = ({
    setCartIsOpen,
    image,
    status,
    description,
    setPurchased,
}) => {
    const dispatch = useDispatch();

    const handleBook = () => {
        setCartIsOpen((prev) => !prev);
        if (setPurchased) {
            setPurchased(false);
            dispatch(clearCart());
        }
    };
    return (
        <>
            <div className="cart__title">
                <span className="cart__name">Корзина</span>
            </div>
            <div className="cart__empty">
                <img src={image} alt="empty" />
                <span className="cart__empty-title">{status}</span>
                <span className="cart__empty-info">{description}</span>
            </div>

            <div className="cart__footer">
                <button className="cart__button" onClick={handleBook}>
                    Вернуться назад
                </button>
            </div>
        </>
    );
};

export default CartInfo;
