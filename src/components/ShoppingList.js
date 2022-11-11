import {plantList} from "../datas/plantList";
import "../styles/ShoppingList.css";

import PlantItem from "./PlantItem";

function ShoppingList() {

    const categories = plantList.reduce((acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []);


    return (<div>
            <ul>
                {categories.map((cat) => (<li key={cat}>{cat}</li>))}
            </ul>


            <ul className='lmj-plant-list'>
                {plantList.map(({id, name, coverImage, light, water}) => (
                    <PlantItem key={id}
                        id={id}
                        name={name}
                        coverImage={coverImage}
                        light={light}
                        water={water}
                    />

                ))}
            </ul>
        </div>

    );
}

export default ShoppingList;