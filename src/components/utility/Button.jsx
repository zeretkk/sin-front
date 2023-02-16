import launch from '../../assets/icons/RocketLaunch.svg'
export default function Button({filled, size, children, className, icon}, props) {
    const classes = className ?? ''
    const sizeClass = size?'btn-'+size:''
    const iconPath = icon ?? launch
    return (
        <button className={`btn ${sizeClass} ${filled?'btn-filled':''} `+classes} {...props}>
            <div className={'btn__icon'}>
                <img src={iconPath} alt="button-icon"/>
            </div>
            <div>
                {children}
            </div>
        </button>
    )
}
