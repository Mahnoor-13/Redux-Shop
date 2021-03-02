const initState = {
  products: [
    {
      id: 1,
      name: "man t-shirt summer season",
      image: "1.jpg",
      price: 20,
      discount: 2,
      discountPrice: 20 - (2 / 100) * 20,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet, ut porro delicata volutpat vix. Eu omnium explicari mel. No harum soleat pro, sit te dicit bonorum philosophia, docendi adipisci similique eum ea. Ex quo tempor prompta.",
    },
    {
      id: 2,
      name: "women jecket summer season",
      image: "2.jpg",
      price: 30,
      discount: 5,
      discountPrice: 30 - (5 / 100) * 30,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet, ut porro delicata volutpat vix. Eu omnium explicari mel. No harum soleat pro, sit te dicit bonorum philosophia, docendi adipisci similique eum ea. Ex quo tempor prompta.",
    },
    {
      id: 3,
      name: "mans trouser for summer ",
      image: "3.jpg",
      price: 20,
      discount: 3,
      discountPrice: 20 - (3 / 100) * 20,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet, ut porro delicata volutpat vix. Eu omnium explicari mel. No harum soleat pro, sit te dicit bonorum philosophia, docendi adipisci similique eum ea. Ex quo tempor prompta.",
    },
    {
      id: 4,
      name: "summer shoes for man and women",
      image: "4.jpg",
      price: 50,
      discount: 5,
      discountPrice: 50 - (5 / 100) * 50,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet, ut porro delicata volutpat vix. Eu omnium explicari mel. No harum soleat pro, sit te dicit bonorum philosophia, docendi adipisci similique eum ea. Ex quo tempor prompta.",
    },
    {
      id: 5,
      name: "Women trouser",
      image: "5.jpg",
      price: 40,
      discount: 4,
      discountPrice: 40 - (4 / 100) * 40,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet, ut porro delicata volutpat vix. Eu omnium explicari mel. No harum soleat pro, sit te dicit bonorum philosophia, docendi adipisci similique eum ea. Ex quo tempor prompta.",
    },
    {
      id: 6,
      name: "Women half paint",
      image: "6.jpg",
      price: 40,
      discount: 4,
      discountPrice: 40 - (4 / 100) * 40,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet, ut porro delicata volutpat vix. Eu omnium explicari mel. No harum soleat pro, sit te dicit bonorum philosophia, docendi adipisci similique eum ea. Ex quo tempor prompta.",
    },
    {
      id: 7,
      name: "mens trouser",
      image: "7.jpg",
      price: 30,
      discount: 3,
      discountPrice: 30 - (3 / 100) * 30,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet, ut porro delicata volutpat vix. Eu omnium explicari mel. No harum soleat pro, sit te dicit bonorum philosophia, docendi adipisci similique eum ea. Ex quo tempor prompta.",
    },

    {
      id: 8,
      name: "women summer shirt",
      image: "8.jpg",
      price: 20,
      discount: 3,
      discountPrice: 20 - (3 / 100) * 20,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet, ut porro delicata volutpat vix. Eu omnium explicari mel. No harum soleat pro, sit te dicit bonorum philosophia, docendi adipisci similique eum ea. Ex quo tempor prompta.",
    },

    {
      id: 9,
      name: "women summer shirt",
      image: "9.jpg",
      price: 20,
      discount: 3,
      discountPrice: 20 - (3 / 100) * 20,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet, ut porro delicata volutpat vix. Eu omnium explicari mel. No harum soleat pro, sit te dicit bonorum philosophia, docendi adipisci similique eum ea. Ex quo tempor prompta.",
    },
    {
      id: 10,
      name: "mens jacket",
      image: "10.jpg",
      price: 35,
      discount: 3,
      discountPrice: 35 - (3 / 100) * 35,
      quantity: 1,
      desc:
        "Lorem ipsum dolor sit amet, ut porro delicata volutpat vix. Eu omnium explicari mel. No harum soleat pro, sit te dicit bonorum philosophia, docendi adipisci similique eum ea. Ex quo tempor prompta.",
    },
  ],
  product: {},
};

const ProductsReducer = (state = initState, action) => {
  // console.log(typeof action.id);
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
      };
    default:
      return state;
  }
};
export default ProductsReducer;
