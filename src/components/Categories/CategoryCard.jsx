import c from './categories.module.scss'

export default function CategoryCard({category, ...props}) {
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
