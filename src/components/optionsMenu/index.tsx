import { useContext } from 'react'
import { AuthContext } from '../../context'
import './optionsMenu.css'
import { Link } from 'react-router-dom';

export default function OptionsMenu() {

    const { botaoMenuAtivo } = useContext(AuthContext);

    console.log(botaoMenuAtivo);
     
    return (
        <>
            <div className='Options-Container'>
                <Link style={{textDecoration: "none"}} to={'Home'}><p className='botoes-menu'>Home</p></Link>
                <Link style={{textDecoration: "none"}} to={'Sobremim'}><p className='botoes-menu'>Sobre mim</p></Link>
                <Link style={{textDecoration: "none"}} to={'Projetos'}><p className='botoes-menu'>Projetos</p></Link>
                <Link style={{textDecoration: "none"}} to={'Contatos'}><p className='botoes-menu'>Contatos</p></Link>
            </div>
        </>
    )
}
