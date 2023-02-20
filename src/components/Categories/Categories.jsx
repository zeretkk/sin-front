import c from './categories.module.scss'
import CategoryCard from "./CategoryCard";
import {useSelector} from "react-redux";

export default function Categories() {
    const categories = useSelector(state => state.content.value.categories)
    return (
        <section className={c.wrapper}>
            <h3 className={c.heading}>Browse Categories</h3>
            <div className={c.list}>
                {categories? categories.map((category,i)=><CategoryCard key={'mainCategory-'+i} category={category}/>):null}

            </div>

        </section>
    )
}
