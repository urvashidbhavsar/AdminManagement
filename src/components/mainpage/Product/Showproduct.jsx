import React, { useEffect, useState } from 'react';
import Navbar from '../../Navcomponent/Navbar';


const Showproduct = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null); // Store selected product for editing
  const [updatedData, setUpdatedData] = useState({}); // Store edited values

  const options = ["Skincare", "Haircare"];

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  // Handle Edit - Open modal manually
  const handleEdit = (product) => {
    setEditProduct(product);
    setUpdatedData(product);
  };

  const handleChange = (e) => {
    const allupdate = { ...updatedData, [e.target.name]: e.target.value };

    if (e.target.name === "originalPrice" || e.target.name === "rate") {
      const originalPrice = parseFloat(allupdate.originalPrice) || 0;
      const rate = parseFloat(allupdate.rate) || 0;
      if (originalPrice > 0 && rate > 0) {
        allupdate.discountedPrice = (originalPrice - (originalPrice * rate / 100)).toFixed(2);
      } else {
        allupdate.discountedPrice = "";
      }
    }
    setUpdatedData(allupdate)
  };

  const handleUpdate = () => {
    const updatedProducts = products.map((product) =>
      product.id === editProduct.id ? updatedData : product
    );

    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    setEditProduct(null); // Close modal
  };

  return (
    <>
      <div className="homepage">
        <div className='layout'>
          <Navbar />
          <div className="mainpage">
            <div className="container">
              <h3 className="border-bottom border-4 border-primary pb-2">Stored Products</h3>
              <table className="table table-bordered table-striped">
                <thead className="table-primary">
                  <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Old Price</th>
                    <th>Rate (%)</th>
                    <th>New Price</th>
                    <th>Image</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 ? (
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
                        <td>
                          <button className='btn btn-success' onClick={() => handleEdit(product)} data-bs-toggle="modal" data-bs-target="#editProductModal">Edit</button>
                        </td>
                        <td>
                          <button className='btn btn-danger' onClick={() => handleDelete(product.id)}>Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={11}>No products available. Please add some products.</td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Bootstrap Modal */}
              <div className="modal fade" id="editProductModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="editProductModalLabel">Edit Product</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="row g-3">
                        <div className="col-12">
                          <select name="category" value={updatedData.category} onChange={handleChange} className="form-control">
                            <option value="">--- Select Category ---</option>
                            {options.map((item) => (
                              <option key={item} value={item}>{item}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-12">
                          <input type="text" name="brand" value={updatedData.brand} onChange={handleChange} placeholder="Brand" className="form-control" required />
                        </div>
                        <div className="col-12">
                          <input type="text" name="title" value={updatedData.title} onChange={handleChange} placeholder="Title" className="form-control" required />
                        </div>
                        <div className="col-12">
                          <input type="text" name="description" value={updatedData.description} onChange={handleChange} placeholder="Description" className="form-control" required />
                        </div>
                        <div className="col-5">
                          <input type="number" name="originalPrice" value={updatedData.originalPrice} onChange={handleChange} placeholder="Original Price" className="form-control" required />
                        </div>
                        <div className="col-2">
                          <input type="number" name="rate" value={updatedData.rate} onChange={handleChange} placeholder="Rate" className="form-control" required />
                        </div>
                        <div className="col-5">
                          <input type="number" name="discountedPrice" value={updatedData.discountedPrice} onChange={handleChange} placeholder="Discounted Price" className="form-control" required readOnly />
                        </div>
                        <div className="col-12">
                          <input type="text" name="image" value={updatedData.image} onChange={handleChange} placeholder="Image URL" className="form-control" required />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
                      <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showproduct;
