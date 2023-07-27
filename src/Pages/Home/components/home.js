import { ComingSoon } from "./ComingSon/coming_soon"
import "./_home.scss"
import { Header } from "./header/header"
import { Produit } from "./produit/produit"
export const Home =(props)=>{
    return(
        <div className="Home">
            <Header/>
            <ComingSoon/>
            <Produit  AllProducts={props.AllProducts}  solde={props.solde}  news={props.news} old={props.old}/>

        </div>
    )
}