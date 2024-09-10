interface Categories {
  id: number
  icon: string
  name: string
}

interface Products {
  id: number
  category_id: number
  image: string
  name: string
  slug: string
  price: number
  about: string
}

type TransactionStatus = 'pending' | 'success' | 'canceled'

interface Transactions {
  total_price: number
  date: string
  status: TransactionStatus
}

export const categories: Categories[] = [
  { id: 1, icon: 'fitness', name: 'Fitness' },
  { id: 2, icon: 'surgicals', name: 'Surgicals' },
  { id: 3, icon: 'diabetes', name: 'Diabetes' },
  { id: 4, icon: 'vitamins', name: 'Vitamins' },
]

export const products: Products[] = [
  {
    id: 1,
    category_id: 1,
    image: 'med1',
    name: 'Softovac Rami',
    slug: 'softovac-rami',
    price: 34000,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },

  {
    id: 2,
    category_id: 2,
    image: 'med2',
    name: 'Enoki Softovac',
    slug: 'enoki-softovac',
    price: 87000,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },

  {
    id: 3,
    category_id: 3,
    image: 'med3',
    name: 'Panadomal',
    slug: 'panadomal',
    price: 56000,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },

  {
    id: 4,
    category_id: 4,
    image: 'med4',
    name: 'Enoki Softovac Pro',
    slug: 'enoki-softovac-pro',
    price: 112000,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

export const transactions: Transactions[] = [
  {
    total_price: 1230000,
    date: '25 September 2024',
    status: 'pending',
  },

  {
    total_price: 876000,
    date: '22 September 2024',
    status: 'success',
  },

  {
    total_price: 123000,
    date: '2 September 2024',
    status: 'canceled',
  },
]

interface Carts extends Products {
  quantity: number
}
export const carts: Carts[] = [
  {
    id: 1,
    category_id: 1,
    image: 'med1',
    name: 'Softovac Rami',
    slug: 'softovac-rami',
    price: 34000,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity: 1,
  },

  {
    id: 2,
    category_id: 2,
    image: 'med2',
    name: 'Enoki Softovac',
    slug: 'enoki-softovac',
    price: 87000,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity: 2,
  },

  {
    id: 3,
    category_id: 3,
    image: 'med3',
    name: 'Panadomal',
    slug: 'panadomal',
    price: 56000,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity: 3,
  },

  {
    id: 4,
    category_id: 4,
    image: 'med4',
    name: 'Enoki Softovac Pro',
    slug: 'enoki-softovac-pro',
    price: 112000,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    quantity: 1,
  },
]
