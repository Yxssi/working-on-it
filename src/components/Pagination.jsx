import React, { useState } from "react";

import { Pagination } from "flowbite-react";

export default function PaginationCustom() {
  const [pageIndex, setPageIndex] = useState(0);
  const onPageChange = (event, page) => {
    if (event) {
      console.log(event);
      setPageIndex(page);
    }
  };
  return (
    <>
      <Pagination
        currentPage={pageIndex}
        onPageChange={(event) => onPageChange(event, pageIndex)}
        showIcons={true}
        totalPages={100}
      />
    </>
  );
}
