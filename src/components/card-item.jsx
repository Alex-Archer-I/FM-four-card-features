const CardItem = (props) => {
    const classes = `theme-${props.theme} card`;
    const imgSrc = `${import.meta.env.BASE_URL}images/${props.img}`;

    return (
        <li className={classes}>
            <h2 className="title title-card">{props.title}</h2>
            <p className="text">{props.text}</p>
            <img src={imgSrc} alt="Icon" width="64" height="64" className="card-img"/>
        </li>
    );
};

export default CardItem;