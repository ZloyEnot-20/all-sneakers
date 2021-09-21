import React from "react";
import "./Cart.css";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../actions";
import CartInfo from "./CartInfo";
import HasItems from "./HasItems";

const Cart = ({ cartIsOpen, setCartIsOpen }) => {
    const [purchased, setPurchased] = React.useState(false);
    const [cost, setCost] = React.useState(0);
    const items = useSelector((state) => state.cart);
    const cartRef = React.useRef();
    console.log(purchased);
    const dispatch = useDispatch();
    const removeItem = (id) => {
        dispatch(removeFromCart({ id }));
    };

    React.useEffect(() => {
        setCost(
            (prev) => (prev = items.reduce((acc, item) => acc + item.price, 0))
        );

        if (!cartIsOpen) {
            cartRef.current.style.right = "0";
        } else {
            cartRef.current.style.right = "-385px";
        }
    }, [items, cartIsOpen]);

    return (
        <div className="cart" ref={cartRef}>
            {items.length ? (
                !purchased ? (
                    <HasItems
                        items={items}
                        removeItem={removeItem}
                        cost={cost}
                        setPurchased={setPurchased}
                    />
                ) : (
                    <CartInfo
                        setCartIsOpen={setCartIsOpen}
                        status="Заказ оформлен!"
                        description={`Ваш заказ #25 на сумму ${cost} RUB скоро будет передан курьерской доставке`}
                        image="img/booked.png"
                        setPurchased={setPurchased}
                    />
                )
            ) : (
                <CartInfo
                    setCartIsOpen={setCartIsOpen}
                    status="Корзина пустая"
                    description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                    image="img/empty.png"
                />
            )}
        </div>
    );
};

export default Cart;
