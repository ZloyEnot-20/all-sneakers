import React from "react";
import "./Goods.css";
import axios from "axios";
import Card from "../Card/Card";

const Goods = () => {
    const [items, setItems] = React.useState([]);
    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
        axios
            .get("https://6141bdb5357db50017b3dcce.mockapi.io/shoes/shoes-item")
            .then((res) => {
                setItems(res.data);
            });
    }, []);

    return (
        <div className="goods-wrap">
            <div className="goods">
                <div className="goods__header">
                    <span className="goods__title">Все кроссовки</span>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="goods__search"
                        placeholder="Поиск..."
                    />
                </div>

                <div className="goods__items-wrapper">
                    {items
                        .filter((item) =>
                            item.title
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        )
                        .map((item, inx) => {
                            return (
                                <Card
                                    id={item.id}
                                    price={item.price}
                                    key={item.id + Math.random()}
                                    title={item.title}
                                    img={item.imageUrl}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Goods;
