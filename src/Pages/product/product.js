import { Header } from "../../layout/header"
import "./_product.scss"
import src from "../../assets/images/bg.jpg"

export const Product = () => {
    return (
        <div>
            <Header title={"PRODUCT"} src={src} />
        </div>
    )
}