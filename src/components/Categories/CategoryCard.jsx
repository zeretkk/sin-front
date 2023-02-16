

export default function CategoryCard({title, icon, background}) {
    return (
        <div className="category-card">
            <div className="category-card__img">
                <img src={background} alt="category"/>
                <div className="category-card__overlay">
                    <img src={icon} alt="category icon"/>
                </div>
            </div>
            <div className="category-card__description">
                <h5 className="category-card__title">{title}</h5>
            </div>
        </div>
    )
}
