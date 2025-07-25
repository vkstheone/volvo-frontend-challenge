import React from "react";
import { Button, Block } from "vcc-ui";
import useCars from "../../pages/api/useCars";
import CarCard from "./CarCard";


export const HelloWorld: React.FC = () => {

    const  cars  = useCars(); 
    console.log(cars)

  return ( 
        <Block extend={{ padding: 20 }}>
            <Button>Click me</Button>
              {cars.map(car => <CarCard key={car.id} car={car}/>)}
        </Block>
  )
};
