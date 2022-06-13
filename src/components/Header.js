import './Header.css'
import {ReactComponent as Sun} from '../static/icon-sun.svg';
import {ReactComponent as Moon} from '../static/icon-moon.svg';

export default () => {

    return (
        <div className='HeadWrap'>
            <h1>Left</h1>
            <div>
                <Sun className='svg' id='sun'/>
                <Moon className='svg' id='moon'/>
            </div>
        </div>
    )
}
