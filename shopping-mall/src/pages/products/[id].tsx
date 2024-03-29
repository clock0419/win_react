import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import ProductDetail from "../../components/product/detail"
import { GET_PRODUCT, Product } from "../../graphql/products"
import { graphqlFetcher, QueryKeys } from "../../queryClient"


const ProductDetailPage = () => {
    const { id } = useParams()

    const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id],
        () => 
        graphqlFetcher(GET_PRODUCT, { id }),
    )

    if (!data) return null;


    return (
        <div>
            <h2>商品詳細</h2>
            <ProductDetail item={data} />
        </div>
    )
}

export default ProductDetailPage