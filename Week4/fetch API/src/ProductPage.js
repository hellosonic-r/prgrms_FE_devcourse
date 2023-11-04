/* state 구조

{
    productId : 1,
    product : Product,
    optionData : [],
    selectedOption : [],
} 

*/

import Cart from "./Cart.js";
import ProductOptions from "./ProductOptions.js";
import { request } from "./api.js"

export default function ProductPage({
    $target,
    initialState,
}) {
    const $product = document.createElement('div');

    $target.appendChild($product);

    this.state = initialState;

    const productOptions = new ProductOptions({
        $target: $product,
        initialState: [],
        onSelect: (option) => {
            const { selectedOptions } = this.state;
            
            const nextState = {...this.state};
            

            const selectedOptionIndex = selectedOptions.findIndex(selectedOption => selectedOption.optionId === option.optionId);
            if(selectedOptionIndex > -1) {
                nextState.selectedOptions[selectedOptionIndex].ea++
            } else {
                nextState.selectedOptions.push({
                    optionId : option.optionId,
                    optionName : option.optionName,
                    optionPrice : option.optionPrice,
                    ea : 1
                })
            }
            this.setState(nextState);
        }
    })
    const cart = new Cart({
        $target : $product,
        initialState : {
            productName: '이디어츠 굿즈',
            basePrice : 10000,
            selectedOptions: []
        },
        onRemove : (selectedOptionIndex) => {
            const nextState = {...this.state};
            nextState.selectedOptions.splice(selectedOptionIndex, 1)
            this.setState(nextState);
        }
    });

    this.setState = nextState => {
        if (nextState.productId !== this.state.productId) {
            fetchOptionData(nextState.productId);
            return
        } 
        this.state = nextState;

        const { product, selectedOptions, optionData } = this.state;
        productOptions.setState(optionData);
        cart.setState({
            productName : product.name,
            basePrice : product.basePrice,
            selectedOptions,
        })

    }

    this.render = () => {

    }

    this.render();
    
    const fetchOptionData = (productId) => {
        return request(`products/${productId}`)
          .then(product => {
            // console.log(`상품 받아옴`,product);
            this.setState({
                ...this.state,
                product,
                optionData: [],
                selectedOptions : [],
            })
            return request(`product-options?product.id=${product.id}`)        
          })
          .then(productOptions => {
            // console.log(`상품에 해당하는 옵션 받아옴`, productOptions);
            return Promise.all([
                Promise.resolve(productOptions),
                Promise.all(productOptions.map(productOptions => productOptions.id).map(id => {
                    return request(`product-option-stocks?productOption.id=${id}`);
                  })
                )]
            )
          })
          .then(data => { // 옵션 데이터와, 재고 데이터를 들다 받는다.
            const [productOptions, stocks] = data
            const optionData = productOptions.map((productOption, i) => {
                console.log(stocks);
                const stock = stocks[i][0].stock
    
                return {
                    optionId : productOption.id,
                    optionName : productOption.optionName,
                    optionPrice : productOption.optionPrice,
                    stock
                }
            }) 
    
            console.log(optionData);
            this.setState({
                ...this.state,
                optionData,
            })
    
          })
    
    
    }   

    fetchOptionData(this.state.productId)
   
}
