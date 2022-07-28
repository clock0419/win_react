import { Link } from "react-router-dom";

const Gnb = () => (
    <nav className="gnb">
        <ul>
            <li>
                <Link to = "/">ホーム</Link>
            </li>
            <li>
                <Link to = "/products">商品LIST</Link>
            </li>
            <li>
                <Link to = "/cart">カート</Link>
            </li>
        </ul>
    </nav>
)

export default Gnb