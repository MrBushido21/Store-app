import BrandList from "./BrandList";
import Select from "./Select";

function Sort({filteredItems, actveBrand, selectPrice, sortDataArr, selectRating}) {
    return (
        <div className="sort">
            <BrandList filteredItems={filteredItems} actveBrand={actveBrand} />
            <Select
                value={selectPrice}
                onChange={value => sortDataArr(value, "price", "cheaper", "exvpensive")}
                options={[
                    { value: "cheaper", name: "Дешевше" },
                    { value: "exvpensive", name: "Дорожче" },
                ]}
                def="Сортування за ціною"
            />
            <Select
                value={selectRating}
                onChange={value => sortDataArr(value, "rating", "smaler", "bigest")}
                options={[
                    { value: "smaler", name: "Від меньшого" },
                    { value: "bigest", name: "Від більшого" },
                ]}
                def="Сортування за рейтингом"
            />
        </div>
    );
}
export default Sort;