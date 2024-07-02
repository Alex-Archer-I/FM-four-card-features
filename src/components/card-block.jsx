import CardItem from './card-item';

import data from '../assets/data';

const CardBlock = () => {
    const content = data.map(item => {
        return <CardItem title={item.title} text={item.text} theme={item.theme} img={item.icon} key={item.id}/>
    });

    return (
        <ul className="card-grid">{content}</ul>
    );
};

export default CardBlock;