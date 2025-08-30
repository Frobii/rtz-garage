import { useParams } from "react-router-dom";
import Wheels from "./categories/Wheels";
import Suspension from "./categories/Suspension";
import Drivetrain from "./categories/Drivetrain";
import Exterior from "./categories/Exterior";
import Interior from "./categories/Interior";

function ShopCategory() {
    const { category } = useParams();
  
    return (
        <>
            {   category === "wheels" ? (
                <Wheels />
            ) : category === "suspension" ? (
                <Suspension />
            ) : category === "drivetrain" ? (
                <Drivetrain />
            ) : category === "exterior" ? (
                <Exterior />
            ) : category === "interior" ? (
                <Interior />
            ) : (
                <p>Please select a category</p>
            )}
        </>
    )
}

export default ShopCategory