import React, { useState } from 'react'
import '../../../App.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Navcomponent/Navbar'

const Addproduct = () => {
  const options = ["Skincare", "Haircare"]

  const [formData, setFormData] = useState({
    id: '',
    category: '',
    brand: '',
    title: '',
    description: '',
    originalPrice: '',
    rate: '',
    discountedPrice: '',
    image: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFormData = { ...formData, [name]: value };

    // Calculate Discounted Price if Original Price and Rate are provided
    if (name === "originalPrice" || name === "rate") {
      const originalPrice = parseFloat(updatedFormData.originalPrice) || 0;
      const rate = parseFloat(updatedFormData.rate) || 0;
      if (originalPrice > 0 && rate > 0) {
        updatedFormData.discountedPrice = (originalPrice - (originalPrice * rate / 100)).toFixed(2);
      } else {
        updatedFormData.discountedPrice = "";
      }
    }

    setFormData(updatedFormData);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let storedProducts = JSON.parse(localStorage.getItem('products')) || []; // Retrieve previous data

    storedProducts.push(formData); // Add new product
    localStorage.setItem('products', JSON.stringify(storedProducts)); // Store updated data

    alert('Product added successfully!');

    setFormData({  // Reset form
      id: '',
      category: '',
      brand: '',
      title: '',
      description: '',
      originalPrice: '',
      rate: '',
      discountedPrice: '',
      image: ''
    });
  };
  return (
    <>
      <section>
        <div className="homepage">
          {/* container-fluid */}
          <div className='layout'>
            <Navbar />
            <div className="mainpage">
              <div className="container">
                <h3 className='border-bottom border-4 border-success pt-4 pb-2'>Add Product</h3>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addproductpage">
                  Add Product
                </button>

                <form onSubmit={handleSubmit}>
                  <div className="modal fade" id="addproductpage" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="addproductpageLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="addproductpageLabel">Add Product</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <div className="row g-3">
                            <div className="col-6">
                              <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="Enter Id" className="form-control" required />
                            </div>
                            <div className="col-12">
                              <select name="category" value={formData.category} onChange={handleChange} className="form-select" required>
                                <option value="">--- Select Category ---</option>
                                {
                                  options.map((item) => (
                                    <option key={item} value={item}>{item}</option>
                                  ))
                                }
                              </select>
                            </div>
                            <div className="col-12">
                              <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" className="form-control" required />
                            </div>
                            <div className="col-12">
                              <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="form-control" required />
                            </div>
                            <div className="col-12">
                              <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="form-control" required />
                            </div>
                            <div className="col-5">
                              <input type="number" name="originalPrice" value={formData.originalPrice} onChange={handleChange} placeholder="Original Price" className="form-control" required />
                            </div>
                            <div className="col-2">
                              <input type="number" name="rate" value={formData.rate} onChange={handleChange} placeholder="Rate" className="form-control" required />
                            </div>
                            <div className="col-5">
                              <input type="number" name="discountedPrice" value={formData.discountedPrice} onChange={handleChange} placeholder="Discounted Price" className="form-control" required readOnly />
                            </div>
                            <div className="col-12">
                              <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="form-control" required />
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="submit" className="btn btn-success">Add</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Addproduct
