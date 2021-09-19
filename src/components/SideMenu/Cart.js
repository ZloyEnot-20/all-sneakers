import React from "react";
import "./Cart.css";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../actions";
import Empty from "./Empty";
import HasItems from "./HasItems";

const Cart = ({ cartIsOpen, setCartIsOpen }) => {
    const items = useSelector((state) => state.cart);
    const cartRef = React.useRef();
    const [cost, setCost] = React.useState(0);
    const dispatch = useDispatch();
    const removeItem = (id) => {
        dispatch(removeFromCart({ id }));
    };

    React.useEffect(() => {
        setCost(
            (prev) => (prev = items.reduce((acc, item) => acc + item.price, 0))
        );
        console.log("qwerty");
        !cartIsOpen
            ? (cartRef.current.style.right = "0")
            : (cartRef.current.style.right = "-385px");
    }, [items, cartIsOpen]);

    return (
        <div className="cart" ref={cartRef}>
            {items.length ? (
                <HasItems items={items} removeItem={removeItem} cost={cost} />
            ) : (
                <Empty setCartIsOpen={setCartIsOpen} />
            )}
        </div>
    );
};

export default Cart;

// <>
//     <Empty />
//     {console.log("HERE", cartIsOpen)}
// </>
