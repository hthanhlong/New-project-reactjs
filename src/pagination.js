import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginationbox = (props) => {

    const { productsPerPage, totalproducts, paginate } = props;
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalproducts / productsPerPage); i++)
        pageNumber.push(i);


    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

    )
}

export default Paginationbox;