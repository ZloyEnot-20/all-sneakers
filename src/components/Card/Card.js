import React from "react";
import "./Card.css";
import { ReactComponent as Chosen } from "../SVG/added.svg";
import { ReactComponent as Add } from "../SVG/add.svg";
import { ReactComponent as Favourites } from "../SVG/favourites.svg";
import { ReactComponent as Liked } from "../SVG/Liked.svg";
import { addToCart, addFavorite, removeFavorite } from "../../actions";
import { useDispatch } from "react-redux";

const Card = ({ id, price, title, img, like }) => {
    const dispatch = useDispatch();
    const [added, setAdded] = React.useState(false);
    const [liked, setLiked] = React.useState(like || false);

    const handleLiked = () => {
        if (!liked) {
            dispatch(
                addFavorite({
                    img,
                    title,
                    price,
                    id,
                    liked: !liked,
                })
            );
            setLiked((prev) => !prev);
            return;
        }
        dispatch(
            removeFavorite({
                id,
            })
        );
        setLiked((prev) => !prev);
    };

    const handleAdded = () => {
        setAdded((prev) => !prev);
        dispatch(
            addToCart({
                img,
                title,
                price,
                id: Math.random(),
            })
        );
    };

    return (
        <div className="goods__items">
            <div className="goods__image-wrap">
                <div className="goods__item-favourite">
                    {liked ? (
                        <Liked
                            onClick={handleLiked}
                            className="goods__item-favourite-button"
                        />
                    ) : (
                        <Favourites
                            onClick={handleLiked}
                            className="goods__item-favourite-button"
                        />
                    )}
                </div>

                <img src={`img/image${id}.png`} alt="image1" />
            </div>
            <div className="goods__item-title">
                <span>{title}</span>
            </div>
            <div className="goods__item-pricing">
                <div className="goods__item-price">
                    <span className="goods__item-value">Цена:</span>
                    <span>{price + " RUB"}</span>
                </div>
                <div className="goods__item-add">
                    {added ? (
                        <Chosen
                            className="goods__item-add-button"
                            onClick={handleAdded}
                        />
                    ) : (
                        <Add
                            className="goods__item-add-button"
                            onClick={handleAdded}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
