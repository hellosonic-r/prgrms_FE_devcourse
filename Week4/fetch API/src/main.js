import ProductOptions from "./ProductOptions.js"
import { request } from "./api.js"
import ProductPage from "./ProductPage.js";

// const dummyData = [
//     {
//         optionId : 1,
//         optionName: '더미데이터1',
//         optionPrice: 10000,
//         stock: 10,
//     },
//     {   
//         optionId : 2,
//         optionName: '더미데이터2',
//         optionPrice: 15000,
//         stock: 10,
//     },
//     {   
//         optionId : 3,
//         optionName: '더미데이터3',
//         optionPrice: 10000,
//         stock: 0,
//     },
// ]

const $target = document.querySelector("#app");

new ProductPage({
    $target,
    initialState: {
        productId : 1
    }

})

// const DEFAULT_PRODUCT_ID = 1;

// const fetchOptionData = (productId) => {
//     // 이해
//     // return request(`products/${productId}`)
//     //   .then(product => {
//     //     console.log(`상품 받아옴`,product);
//     //     return request(`product-options?product.id=${product.id}`)        
//     //   })
//     //   .then(productOptions => {
//     //     console.log(`상품에 해당하는 옵션 받아옴`, productOptions);
//     //     return Promise.all(
//     //         productOptions.map(productOptions => productOptions.id).map(id => {
//     //             return request(`product-option-stocks?productOption.id=${id}`);
//     //         })
//     //     )
//     //   })
//     //   .then(productStocks => {
//     //     console.log(`상품에 해당하는 옵션의 재고 받아옴`, productStocks);
//     //   })

//     return request(`products/${productId}`)
//       .then(product => {
//         // console.log(`상품 받아옴`,product);
//         return request(`product-options?product.id=${product.id}`)        
//       })
//       .then(productOptions => {
//         // console.log(`상품에 해당하는 옵션 받아옴`, productOptions);
//         return Promise.all([
//             Promise.resolve(productOptions),
//             Promise.all(productOptions.map(productOptions => productOptions.id).map(id => {
//                 return request(`product-option-stocks?productOption.id=${id}`);
//               })
//             )]
//         )
//       })
//       .then(data => { // 옵션 데이터와, 재고 데이터를 들다 받는다.
//         const [productOptions, stocks] = data
//         const optionData = productOptions.map((productOption, i) => {
//             console.log(stocks);
//             const stock = stocks[i][0].stock

//             return {
//                 optionId : productOption.id,
//                 optionName : productOption.optionName,
//                 optionPrice : productOption.optionPrice,
//                 stock
//             }
//         }) 

//         console.log(optionData);

//         productOptionsComponent.setState(optionData);
//       })



// }   


// fetchOptionData(DEFAULT_PRODUCT_ID);

// const productOptionsComponent = new ProductOptions( {
//     $target,
//     initialState : [],
//     onSelect: (option) => {
//         alert(option.optionName);
//     }
// })
