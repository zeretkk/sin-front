import {NavLink, useRouteError} from 'react-router-dom'
import c from './errorpage.module.scss'
import Button from "../../components/utility/Button";
export default function ErrorPage(): JSX.Element {
    const error = useRouteError() as any
    return (
        <div className={c.wrapper}>
            <div className={c.info}>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p className={c.errorText}>
                    <i>{error.statusText || error.message}</i>
                </p>
                <NavLink to={'/'}>
                    <Button>Go back</Button>
                </NavLink>
            </div>

        </div>
    )
}
