import { NotFoundWrapper } from './404.styles'

import { NavLink } from 'react-router'

const NotFound = () => {
    return (
        <NotFoundWrapper>
            <p>404</p>
            <p>{'Похоже, ничего не нашлось :('}</p>
            <NavLink to={'/'}>
              <button>На главную</button>
            </NavLink>
        </NotFoundWrapper>
    )
}

export default NotFound