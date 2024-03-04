const lookupTypeData = [
  [
    { columnName: "Lookup Type Name", columnValue: "Ebay" },
    { columnName: "Display Name", columnValue: "Ebay" },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Flipkart" },
    { columnName: "Display Name", columnValue: "Flipkart" },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "HUL" },
    { columnName: "Display Name", columnValue: "Hindustan Unilever" },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "IsDB" },
    {
      columnName: "Display Name",
      columnValue: "Islamic Development Bank",
    },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "TCL" },
    {
      columnName: "Display Name",
      columnValue: "Tata Consumers Products Limited India",
    },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Amazon" },
    { columnName: "Display Name", columnValue: "Amazon" },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Google" },
    { columnName: "Display Name", columnValue: "Google" },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Apple" },
    { columnName: "Display Name", columnValue: "Apple Inc." },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Microsoft" },
    { columnName: "Display Name", columnValue: "Microsoft Corporation" },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Samsung" },
    { columnName: "Display Name", columnValue: "Samsung Electronics" },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Sony" },
    { columnName: "Display Name", columnValue: "Sony Corporation" },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "HP" },
    { columnName: "Display Name", columnValue: "HP Inc." },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Dell" },
    { columnName: "Display Name", columnValue: "Dell Technologies" },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Toyota" },
    {
      columnName: "Display Name",
      columnValue: "Toyota Motor Corporation",
    },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Honda" },
    { columnName: "Display Name", columnValue: "Honda Motor Co., Ltd." },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "BMW" },
    {
      columnName: "Display Name",
      columnValue: "Bayerische Motoren Werke AG",
    },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Mercedes-Benz" },
    { columnName: "Display Name", columnValue: "Mercedes-Benz" },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Coca-Cola" },
    { columnName: "Display Name", columnValue: "The Coca-Cola Company" },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Pepsi" },
    { columnName: "Display Name", columnValue: "PepsiCo" },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Nike" },
    { columnName: "Display Name", columnValue: "Nike, Inc." },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Adidas" },
    { columnName: "Display Name", columnValue: "Adidas AG" },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Facebook" },
    { columnName: "Display Name", columnValue: "Meta Platforms, Inc." },
  ],
  [
    { columnName: "Lookup Type Name", columnValue: "Twitter" },
    { columnName: "Display Name", columnValue: "Twitter, Inc." },
  ],
];

const businessEntityData = [
  [
    { columnName: "Business Entity Type", columnValue: "Toyota" },
    {
      columnName: "Display Name",
      columnValue: "Toyota Motor Corporation",
    },
  ],
  [
    { columnName: "Business Entity Type", columnValue: "Honda" },
    { columnName: "Display Name", columnValue: "Honda Motor Co., Ltd." },
  ],
  [
    { columnName: "Business Entity Type", columnValue: "BMW" },
    {
      columnName: "Display Name",
      columnValue: "Bayerische Motoren Werke AG",
    },
  ],
  [
    { columnName: "Business Entity Type", columnValue: "Mercedes-Benz" },
    { columnName: "Display Name", columnValue: "Mercedes-Benz" },
  ],
];

const attributesEntityData = [
  [
    { columnName: "Attribute Name", columnValue: "Age" },
    { columnName: "Attribute Type", columnValue: "Integer" },
    { columnName: "Is Required", columnValue: true },
    { columnName: "Attribute Length", columnValue: 3 },
    { columnName: "table Name", columnValue: "Users" },
    { columnName: "column Name", columnValue: "age" }
  ],
  [
    { columnName: "Attribute Name", columnValue: "Date of Birth" },
    { columnName: "Attribute Type", columnValue: "Date" },
    { columnName: "Is Required", columnValue: false },
    { columnName: "Attribute Length", columnValue: 7 },
    { columnName: "table Name", columnValue: "Users" },
    { columnName: "column Name", columnValue: "dob" }
  ],
  [
    { columnName: "Attribute Name", columnValue: "Country" },
    { columnName: "Attribute Type", columnValue: "String" },
    { columnName: "Is Required", columnValue: true },
    { columnName: "Attribute Length", columnValue: 50 },
    { columnName: "table Name", columnValue: "Users" },
    { columnName: "column Name", columnValue: "country" }
  ]
];


module.exports = { lookupTypeData, businessEntityData, attributesEntityData };
