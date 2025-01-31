import React, { useEffect, useState } from 'react'
import Navbar from '../../Navcomponent/Navbar';

const Showproduct = () => {
  const [products, setProducts] = useState([]);

  // Fetch data from localStorage when the component mounts
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);
  return (
    <>
      <div className="homepage">
        {/* container-fluid */}
        <div className='layout'>
          <Navbar />
          <div className="mainpage">
            <div className="container">
              <h3 className="border-bottom border-4 border-primary pb-2">Stored Products</h3>

              {products.length > 0 ? (
                <table className="table table-bordered table-striped">
                  <thead className="table-primary">
                    <tr>
                      <th>ID</th>
                      <th>Category</th>
                      <th>Brand</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Original Price</th>
                      <th>Rate (%)</th>
                      <th>Discounted Price</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      products.map((product, index) => (
                        <tr key={index}>
                          <td>{product.id}</td>
                          <td>{product.category}</td>
                          <td>{product.brand}</td>
                          <td>{product.title}</td>
                          <td>{product.description}</td>
                          <td>${product.originalPrice}</td>
                          <td>{product.rate}%</td>
                          <td>${product.discountedPrice}</td>
                          <td>
                            <img src={product.image} alt={product.title} width="50" height="50" />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-danger">No products available. Please add some products.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Showproduct
