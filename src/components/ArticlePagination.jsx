import React from 'react';
import { Pagination } from 'react-bootstrap';

import { numberToBangla } from './utils';

const paginationRanges = (c, m) => {
  let current = c,
      last = m,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
          rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
          rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}

const ArticlePagination = (props) => {
  const { currentPage, totalPages, clickHandler } = props;
  const pageRanges = paginationRanges(currentPage, totalPages);
  let items = [];

  if (pageRanges && pageRanges.length > 0) {
    for (let number = 1; number <= pageRanges.length; number++) {
      if (pageRanges[number] !== '...') {
        items.push(
          <Pagination.Item 
            key={number} 
            active={number === currentPage}
            onClick={() => clickHandler(number)}
          >{numberToBangla(number)}</Pagination.Item>
        );
      } else {
        items.push(<Pagination.Ellipsis key={number} />);
      }
    }
  }

  if (currentPage && totalPages) {
    return (
      <Pagination>
        <Pagination.First 
          disabled={currentPage === 1}
          onClick={() => clickHandler(1)}
        />
        {items}
        <Pagination.Last 
          disabled={currentPage === totalPages}
          onClick={() => clickHandler(totalPages)}
        />
      </Pagination>
    );
  }

  return null;
}

export default ArticlePagination;