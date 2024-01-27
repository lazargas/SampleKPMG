const tableData = [
  ["Ebay", "Ebay"],
  ["Flipkart", "Flipkart"],
  ["HUL", "Hindustan Unilever"],
  ["IsDB", "Islamic Development Bank"],
  ["TCL", "Tata Consumers Products Limited India"],
  ["Amazon", "Amazon"],
  ["Google", "Google"],
  ["Apple", "Apple Inc."],
  ["Microsoft", "Microsoft Corporation"],
  ["Samsung", "Samsung Electronics"],
  ["Sony", "Sony Corporation"],
  ["HP", "HP Inc."],
  ["Dell", "Dell Technologies"],
  ["Toyota", "Toyota Motor Corporation"],
  ["Honda", "Honda Motor Co., Ltd."],
  ["BMW", "Bayerische Motoren Werke AG"],
  ["Mercedes-Benz", "Mercedes-Benz"],
  ["Coca-Cola", "The Coca-Cola Company"],
  ["Pepsi", "PepsiCo"],
  ["Nike", "Nike, Inc."],
  ["Adidas", "Adidas AG"],
  ["Facebook", "Meta Platforms, Inc."],
  ["Twitter", "Twitter, Inc."],
];

function paginateData(data, itemsPerPage) {
  const pages = [];
  for (let i = 0; i < data.length; i += itemsPerPage) {
    pages.push(data.slice(i, i + itemsPerPage));
  }
  return pages;
}

// Example: Display 5 items per page
const itemsPerPage = 5;
export const tablePaginatedData = paginateData(tableData, itemsPerPage);
