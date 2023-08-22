import { Route, Routes } from "react-router-dom";
import Phones from "../Pages/Phone/Phone";
import Fridge from "../Pages/Fridge/Fridge";
import Leptop from "../Pages/Leptop/Leptop";
import ItemPage from "../Pages/ItmePage/ItemPage";

function MyRoute() {
    return (
        <Routes>
            <Route path='phones' element={<Phones />} />
            <Route path='fridge' element={<Fridge />} />
            <Route path='leptop' element={<Leptop />} />
            <Route path='ItemPage/:id' element={<ItemPage />} />
        </Routes>
    );
}
export default MyRoute;