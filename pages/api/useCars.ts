import axios from "axios";
import { useEffect, useState } from "react";
import { Car, } from "../../src/types/car.interface";


function useCars(){
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() =>{

        axios.get("http://localhost:3000/api/cars")
        .then(res =>{
            setCars(res.data)
        })
    },[])

    return cars

}


export default useCars