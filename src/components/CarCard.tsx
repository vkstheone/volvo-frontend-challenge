import { CardContent, Spacer, Text, Card, Flex, Row, Link} from "vcc-ui";
import { Car } from "../types/car.interface";
import Image from "next/image";


interface CardProps{
    car: Car
}



export default function CarCard ({car}: CardProps){
    

    return(
    <Card href={"/learn/" + car?.id}>
        <CardContent>
            <Text variant={"bates"} subStyle={"emphasis"}>{car?.bodyType}</Text>
            
            <Flex className="gap-10 flex-col justify-evenly items-center" >
                <Row>
                    <Text variant={"bates"}>{car?.modelType}</Text>
                    <Text variant={"amundsen"}>{car?.modelName}</Text>
                </Row >               
            </Flex >
            
            <Spacer />
            
            <Image src={car.imageUrl} alt={car.modelName} width={100} height={100} />
            
            <Spacer />
            <Flex extend={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
            }}>
                
                <Link href={"https://volvocars.com"} arrow={"right"}>SHOP</Link>
                <Link href={"https://volvocars.com"} arrow={"right"}>LEARN</Link>
                
            </Flex>
        </CardContent>
    </Card>
    )
}