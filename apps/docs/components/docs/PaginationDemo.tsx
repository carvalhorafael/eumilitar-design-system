"use client";

import { Pagination } from "@carvalhorafael/eumilitar-ui";

export function PaginationDemo() {
  return <Pagination page={2} totalPages={5} getHref={(page) => `?page=${page}`} />;
}
