const products = [
  {
    "name": "Shirt",
    "price": 25.99,
    "discount": 0.2,
    "stock": [13, 18, 6]
  },
  {
    "name": "Pants",
    "price": 55.99,
    "discount": 0.1,
    "stock": [23, 9, 8]
  },
  {
    "name": "Jacket",
    "price": 80.99,
    "discount": 0.15,
    "stock": [11, 9, 6]
  },
  {
    "name": "Shoes",
    "price": 60.99,
    "discount": 0.25,
    "stock": [17, 4, 7]
  },
  {
    "name": "cap",
    "price": 15.99,
    "discount": 0.05,
    "stock": [2, 10, 3]
  }
]

const customers = [
  {
    name: 'John',
    surname: 'Perez',
    age: 25,
    address: {
      street: 'Av. freedom',
      number: 123,
      city: 'Buenos Aires',
      country: 'ARGENTINA'
    }
  },
  {
    name: 'Mary',
    surname: 'Garcia',
    age: 30,
    address: {
      street: 'Calle 10',
      number: 456,
      city: 'Mexico City',
      country: 'MEXICO'
    }
  },
  {
    name: 'Peter',
    surname: 'Martinez',
    age: 40,
    address: {
      street: 'Rua Augusta',
      number: 789,
      city: 'São Paulo',
      country: 'BRAZIL'
    }
  }
]

let productWithDiscount = [];

const inventory = (products) => {
  let expensive = [];
  let chep = [];
  expensive = products.filter(product => product.price > 50);
  chep = products.filter(product => product.price < 50);
  productWithDiscount = products.map(product => ({ name: product.name, price: product.price, stock: product.stock, newPrice: product.price - (product.discount * product.price) }))
  return productWithDiscount
}

inventory(products)

const createBill = (userName, productName, productQuant, storeId) => {
  const findeUser = (customer) => customer.name === userName
  const findProduct = (product) => product.name === productName
  const customer = customers.find(findeUser);
  const product = productWithDiscount.find(findProduct);

  if (!product) {
    console.log("error: product not found");
    return;
  }

  const totalPrice = product.newPrice * productQuant
  const stockByStore = product.stock[storeId - 1];

  if (stockByStore < productQuant) {
    console.log("error: this product is out of stock");
    return;
  }
  product.stock[storeId - 1] -= productQuant;

  return {
    Name: `${customer.name} ${customer.surname}`,
    Addres: `${customer.address.street}, ${customer.address.city}`,
    Product: product.name,
    Quantity: productQuant,
    Total: totalPrice
  };
};
console.log((createBill("John", "Shirt", 10, 1)));