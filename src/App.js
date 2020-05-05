import React, { useState } from 'react'
import Navbarbar from "./navbar"
import Cardbox from './card'
import storeProducts from "./data"
import Paginationbox from "./pagination"
import './App.css'


function App() {

  const [currentPage, setcurrentPage] = useState(1);
  const [ProductsPerPage, setProcductsPerPage] = useState(8);

  const lastProduct = currentPage * ProductsPerPage;
  const firstProduct = lastProduct - ProductsPerPage;
  const currentProducts = storeProducts.slice(firstProduct, lastProduct);

  const products = currentProducts.map(product => {
    return <div className="col-3 mb-5 text-align-center" >
      <Cardbox title={product.title} img={product.img} />
    </div>
  });
  // change page
  const paginate = pageNumber => setcurrentPage(pageNumber);

  return (
    <>
      <Navbarbar />
      <div className="container ">
        <div className="row mt-5" sm="4" xs="12" >
          {products}
        </div>
        <div className="pagination">
          <Paginationbox
            productsPerPage={ProductsPerPage}
            totalproducts={storeProducts.length}
            paginate={paginate} />
        </div>
      </div>
    </>
  )
}


export default App;

