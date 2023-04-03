const products = [
  {
    "name": "Shirt",
    "price": 25.99,

  },
  {
    "name": "Pants",
    "price": 55.99,

  },
  {
    "name": "Jacket",
    "price": 80.99,

  },
  {
    "name": "Shoes",
    "price": 60.99,

  },
  {
    "name": "cap",
    "price": 15.99,

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


const productWithDiscount = []
const getCountry = (customer) => customer.address.country

const inventory = (products, customer) => {
  const country = getCountry(customer)
  let newDiscount = 0;
  switch (country) {
    case "MEXICO":
      newDiscount = 0.2
      break;

    case "BRAZIL":
      newDiscount = 0.5
      break

    default:
      break;
  }

  const productWithDiscount = products.map((product) => {
    return {
      name: product.name,
      price: product.price,
      newPrice: product.price - (newDiscount * product.price)
    }
  })
  return productWithDiscount
}

const createBill = (userName, productName, productQuant) => {
  const findeUser = (customer) => customer.name === userName
  const findProduct = (product) => product.name === productName
  const customer = customers.find(findeUser);
  const product = inventory(products, customer).find(findProduct);
  const totalPrice = productQuant * product.newPrice

  return {
    userName: `${customer.name} ${customer.surname}`,
    address: `${customer.address.street}, ${customer.address.city}`,
    productName: product.name,
    productQuantity: productQuant,
    total: totalPrice
  }
}

console.log(createBill("Peter", "Shirt", 2))