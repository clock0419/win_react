import { useQuery } from "react-query"
import CartList from "../../components/cart"
import { CartType, GET_CART } from "../../graphql/cart"
import { graphqlFetcher, QueryKeys } from "../../queryClient"

const Cart = () => {
    const { data } = useQuery(QueryKeys.CART, () => graphqlFetcher(GET_CART))
    const cartItems = Object.values(data || {}) as CartType[]
    console.log('11',Object.values(data || {}) as CartType[])

    if(!cartItems.length) return <div>かーとが空いてます。</div>

    return <CartList items={cartItems} />
}

export default Cart