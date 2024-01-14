import React from 'react';
import "./Productmaindata.css"
const Productdetail = () => {
    const productDetail = [
        {
            "name": "Cotton T-Shirt",
            "category": "Men's Apparel",
            "base_price": 19.99,
            "selling_price": 24.99,
            "stock": 100,
            "status": "Selling"
             

        },
        {
            "name": "Slim Fit Jeans",
            "category": "Men's Bottoms",
            "base_price": 39.99,
            "selling_price": 49.99,
            "stock": 80,
            "status": "Out of stock"
        },
        {
            "name": "Casual Dress",
            "category": "Women's Apparel",
            "base_price": 49.99,
            "selling_price": 59.99,
            "stock": 120,
            "status": "Selling"
        },
        {
            "name": "Hooded Sweatshirt",
            "category": "Unisex Outerwear",
            "base_price": 29.99,
            "selling_price": 34.99,
            "stock": 60,
            "status": "Sold out"
        },
        {
            "name": "Athletic Shorts",
            "category": "Men's Activewear",
            "base_price": 24.99,
            "selling_price": 29.99,
            "stock": 90,
            "status": "Selling"
        },
        {
            "name": "Knit Sweater",
            "category": "Women's Knitwear",
            "base_price": 34.99,
            "selling_price": 39.99,
            "stock": 75,
            "status": "Out of stock"
        },
        {
            "name": "Denim Jacket",
            "category": "Men's Outerwear",
            "base_price": 59.99,
            "selling_price": 69.99,
            "stock": 50,
            "status": "Selling"
        },
        {
            "name": "Floral Blouse",
            "category": "Women's Tops",
            "base_price": 29.99,
            "selling_price": 34.99,
            "stock": 110,
            "status": "Selling"
        },
        {
            "name": "Cotton T-Shirt",
            "category": "Men's Apparel",
            "base_price": 19.99,
            "selling_price": 24.99,
            "stock": 100,
            "status": "Selling"


        },
        {
            "name": "Slim Fit Jeans",
            "category": "Men's Bottoms",
            "base_price": 39.99,
            "selling_price": 49.99,
            "stock": 80,
            "status": "Out of stock"
        },
        {
            "name": "Casual Dress",
            "category": "Women's Apparel",
            "base_price": 49.99,
            "selling_price": 59.99,
            "stock": 120,
            "status": "Selling"
        },
        {
            "name": "Hooded Sweatshirt",
            "category": "Unisex Outerwear",
            "base_price": 29.99,
            "selling_price": 34.99,
            "stock": 60,
            "status": "Sold out"
        },
        {
            "name": "Athletic Shorts",
            "category": "Men's Activewear",
            "base_price": 24.99,
            "selling_price": 29.99,
            "stock": 90,
            "status": "Selling"
        },
        {
            "name": "Knit Sweater",
            "category": "Women's Knitwear",
            "base_price": 34.99,
            "selling_price": 39.99,
            "stock": 75,
            "status": "Out of stock"
        },
        {
            "name": "Denim Jacket",
            "category": "Men's Outerwear",
            "base_price": 59.99,
            "selling_price": 69.99,
            "stock": 50,
            "status": "Selling"
        },
        {
            "name": "Floral Blouse",
            "category": "Women's Tops",
            "base_price": 29.99,
            "selling_price": 34.99,
            "stock": 110,
            "status": "Selling"
        },
       
    ];
    return (
      <div className="datacontainer">
            <table className='tabledata'>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Base Price</th>
                        <th>Selling Price</th>
                        <th>Stock</th>
                        <th>Status</th>
                        <th>Published</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {
                                productDetail.map((data) => <h5>{data.name}</h5>)
                            }
                        </td>
                        <td>
                            {
                                productDetail.map((data) => <h5>{data.category}</h5>)
                            }
                        </td>
                        <td>
                            {
                                productDetail.map((data) => <h5>{data.base_price}</h5>)
                            }
                        </td>
                        <td>
                            {
                                productDetail.map((data) => <h5>{data.selling_price}</h5>)
                            }
                        </td>
                        <td>
                            {
                                productDetail.map((data) => <h5>{data.stock}</h5>)
                            }
                        </td>
                        <td>
                            {
                                productDetail.map((data) => <h5>{data.status}</h5>)
                            }
                        </td>
                        <td>
                            {
                                productDetail.map((data) => <h5>{data.status}</h5>)
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
      </div>
    );
}

export default Productdetail;
