import c from './categories.module.scss'
import {FC, HTMLAttributes} from "react";
import {Category} from "../../types/Category";

interface CategoryCardProps extends HTMLAttributes<any>{
    category: Category
}
const CategoryCard: FC<CategoryCardProps> =({category, ...props})=>{
    return (
        <div className={c.card} {...props}>
            <div className={c.cardImg}>
                <img src={category.background} alt="category"/>
                <div className={c.cardOverlay}>
                    <img src={category.icon} alt="category icon"/>
                </div>
            </div>
            <div className={c.cardDescription}>
                <h5 className="category-card__title">{category.title}</h5>
            </div>
        </div>
    )
}
export default CategoryCard
