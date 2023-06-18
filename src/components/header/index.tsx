import './Header.css'
import { SiTypescript } from 'react-icons/si';
import OptionsMenu from '../optionsMenu';

export default function Header() {

    return(
        <>
           <div className='Header-Container'>
                <div className='menu'>
                    <SiTypescript size="50" color="#fff" />
                    <OptionsMenu />
                    <div className='botaoFaleConosco'>
                        Fale conosco
                    </div>
                </div>
           </div>
        </>
    )
}

