import c from './categories.module.scss'

export default function CategoryCard({title, icon, background}) {
    return (
        <div className={c.card}>
            <div className={c.cardImg}>
                <img src={background} alt="category"/>
                <div className={c.cardOverlay}>
                    <img src={icon} alt="category icon"/>
                </div>
            </div>
            <div className={c.cardDescription}>
                <h5 className="category-card__title">{title}</h5>
            </div>
        </div>
    )
}
