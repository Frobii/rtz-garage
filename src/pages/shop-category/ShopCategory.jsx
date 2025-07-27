import { useParams } from "react-router-dom";
import Wheels from "./categories/Wheels";

function ShopCategory() {
    const { category } = useParams();
  
    return (
        <>
            { category === "wheels" ? (
                <Wheels />
            ) : (
                <p>Please select a category</p>
            )}
        </>
    )
}

export default ShopCategory