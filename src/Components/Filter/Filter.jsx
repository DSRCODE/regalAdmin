import "./Filter.css"
const Filter = () => {
    return (
        <div className="filtersec">
            <div className="searchbox filterbox">
                <input type="search" name="" id="" placeholder="Search Product" />
                </div>
            <div className="categorybox filterbox">
                <select>
                    <option value=" ">Product Type</option>
                    <option value=" ">Shirt</option>
                    <option value=" ">Pents</option>
                    <option value=" ">Kurta</option>
                    <option value=" ">3-Piace Suit</option>
                </select>
            </div>
            <div className="pricebox filterbox">
                <select >
                    <option value=" ">Low to High</option>
                    <option value=" ">High to Low</option>
                    <option value=" ">Published</option>
                    <option value=" ">Unpublished</option>
                    <option value=" ">Status-Selling</option>
                    <option value=" ">Status- out of stock</option>
                </select>
            </div>
            <div className="filterbtn">
                <button className="filter">Filter</button>
                <button className="reset">Reset</button>
            </div>
             
        </div>
    );
}

export default Filter;
