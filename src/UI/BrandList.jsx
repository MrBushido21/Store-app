
function BrandList({ filteredItems, actveBrand }) {

    return (
        <nav className="brand-list">
            <div
                className={`brand ${actveBrand === "All" ? "active" : ""}`}
                onClick={() => filteredItems("All")}
            >
                All
            </div>
            <div
                className={`brand ${actveBrand === "Apple" ? "active" : ""}`}
                onClick={() => filteredItems("Apple")}
            >
                Apple
            </div>
            <div
                className={`brand ${actveBrand === "Samsung" ? "active" : ""}`}
                onClick={() => filteredItems("Samsung")}
            >
                Samsung
            </div>
            <div
                className={`brand ${actveBrand === "Xiomi" ? "active" : ""}`}
                onClick={() => filteredItems("Xiomi")}
            >
                Xiomi
            </div>
        </nav>
    );
}
export default BrandList;