// images
import userIco from '../userIco.png';
import cartIco from '../cartIco.png';
import menuIco from '../menuIco.png';
import searchIco from '../searchIco.svg';

import './FreeChangeProductBar.css';
import FreeChangeProductBar from './FreeChangeProductBar';

function Header(){
    return (
        <>
        {/* informative bar about change product */}
        <FreeChangeProductBar />

        <header className="header-top">
            <div className="container">               
                <div className="header-container-left">
                    {/* menu icon to mobile */}
                    <img src={menuIco} alt="Icone do Menu" id="menu-ico" />

                    {/* store logo */}
                    <h1 className="header-logo-hummel">
                        <svg xmlns="http://www.w3.org/2000/svg" width="179.748" height="33.493" viewBox="0 0 179.748 33.493"><g transform="translate(-374.844 -373.276)"><g transform="translate(374.844 373.276)"><path className="a" d="M422.746,379.77a3.247,3.247,0,1,0-3.249-3.25A3.252,3.252,0,0,0,422.746,379.77Z" transform="translate(-400.686 -373.276)"></path><path className="a" d="M412.23,419.282c-.217.331-.7,1.065-1.019,1.614l6.738,6.741,6.74-6.741c-.317-.549-.8-1.283-1.017-1.614L417.949,425Z" transform="translate(-395.891 -399.901)"></path><path className="a" d="M416.194,406.571l4.643,4.647,4.636-4.636-4.64-6.564Z" transform="translate(-398.775 -388.752)"></path><path className="a" d="M416.082,434.869l-7.643-7.645a8.1,8.1,0,0,0,7.615,10.766,8.1,8.1,0,0,0,7.676-10.766Z" transform="translate(-394.025 -404.498)"></path><path className="a" d="M447.122,376.963c-6.82-4.4-11.95,3.341-17.03,7.094a37.139,37.139,0,0,0,3.828,5.387c1.979,2.181,3.639,3.068,6.4,3.02a8.431,8.431,0,0,0,6.3-3.288,8.188,8.188,0,0,0,1.554-5.12H434.058c2.152-1.692,4.487-4.24,6.936-5.386a5.1,5.1,0,0,1,5.99,1.86,6.146,6.146,0,0,1,1.188,3.526l2.756,0A8.339,8.339,0,0,0,447.122,376.963Z" transform="translate(-406.818 -374.65)"></path><path className="a" d="M391.86,389.444a37.16,37.16,0,0,0,3.828-5.387c-5.08-3.753-10.211-11.49-17.03-7.094a8.339,8.339,0,0,0-3.806,7.092l2.756,0a6.146,6.146,0,0,1,1.188-3.526,5.1,5.1,0,0,1,5.99-1.86c2.448,1.146,4.784,3.694,6.936,5.386H377.608a8.19,8.19,0,0,0,1.554,5.12,8.431,8.431,0,0,0,6.3,3.288C388.221,392.512,389.882,391.625,391.86,389.444Z" transform="translate(-374.844 -374.65)"></path></g><path className="a" d="M588.412,389.97v14.7a2.5,2.5,0,0,1-2.64,2.476h-1.441a2.5,2.5,0,0,1-2.64-2.476V391.738c0-.884-.744-1.061-1.277-1.061h-.3c-.516,0-1.264.177-1.264,1.067v12.928a2.5,2.5,0,0,1-2.64,2.476H574.7a2.5,2.5,0,0,1-2.571-2.475V391.738c0-.884-.761-1.061-1.273-1.061h-.313c-.536,0-1.269.177-1.269,1.061v12.934a2.5,2.5,0,0,1-2.639,2.475h-1.441a2.5,2.5,0,0,1-2.639-2.475v-14.7c0-3.042,1.332-5.489,5.937-5.489h14.358C587.047,384.48,588.412,386.927,588.412,389.97Zm17.871,8.789h-9.277s0,1.236,0,1.407a.961.961,0,0,0,.922,1.067c.4,0,11.341.024,11.341.024a2.343,2.343,0,0,1,2.476,2.314v1.263a2.343,2.343,0,0,1-2.476,2.314H595.776c-2.513,0-5.49-1.168-5.49-5.2V389.685c0-3.949,2.907-5.2,5.49-5.2h10.508c2.513,0,5.489,1.168,5.489,5.2v3.87C611.773,397.591,608.8,398.759,606.283,398.759Zm-.855-7.009v-.261a1.043,1.043,0,0,0-1.165-1.119h-6.091a1.043,1.043,0,0,0-1.165,1.119v1.38h7.275A1.037,1.037,0,0,0,605.428,391.75Zm12.3-15.356h-1.441a2.5,2.5,0,0,0-2.64,2.475v25.8a2.5,2.5,0,0,0,2.64,2.476h1.441a2.5,2.5,0,0,0,2.64-2.476v-25.8A2.5,2.5,0,0,0,617.726,376.394Zm-87.421,8.087h-1.441a2.5,2.5,0,0,0-2.639,2.475v12.83a1.136,1.136,0,0,1-1.277,1.165h-5.091a1.131,1.131,0,0,1-1.276-1.165v-12.83a2.5,2.5,0,0,0-2.64-2.475H514.5a2.5,2.5,0,0,0-2.64,2.475v14.7c0,2.513,1.332,5.489,5.937,5.489h9.209c4.6,0,5.937-2.976,5.937-5.489v-14.7A2.5,2.5,0,0,0,530.305,384.481Zm24.809,0H540.756c-4.6,0-5.937,2.447-5.937,5.489v14.7a2.5,2.5,0,0,0,2.64,2.475H538.9a2.5,2.5,0,0,0,2.64-2.475V391.738c0-.884.733-1.061,1.269-1.061h.314c.512,0,1.273.177,1.273,1.061v12.934a2.5,2.5,0,0,0,2.571,2.475h1.512a2.5,2.5,0,0,0,2.64-2.476V391.744c0-.89.748-1.067,1.265-1.067h.3c.533,0,1.277.177,1.277,1.061v12.934a2.5,2.5,0,0,0,2.64,2.476h1.441a2.5,2.5,0,0,0,2.64-2.476v-14.7C560.678,386.927,559.314,384.48,555.115,384.48Zm-51.071,0h-8.829v-5.611a2.5,2.5,0,0,0-2.639-2.475h-1.441a2.5,2.5,0,0,0-2.64,2.475v25.8a2.5,2.5,0,0,0,2.64,2.476h1.441a2.5,2.5,0,0,0,2.639-2.476V390.785h6.77a1.122,1.122,0,0,1,1.276,1.165v12.722a2.5,2.5,0,0,0,2.64,2.476h1.441a2.5,2.5,0,0,0,2.64-2.476v-14.7C509.981,387.457,508.649,384.481,504.044,384.481Z" transform="translate(-65.774 -1.804)"></path></g></svg>
                    </h1>
                    
                    {/* navegation menu */}
                    <nav className="header-store-navegation">
                    <ul>
                        <li>
                            <a href="/roupas/Masculino?map=c,specificationFilter_26">masculino</a>
                        </li>
                        <li>
                            <a href="/roupas/Feminino?map=c,specificationFilter_26">feminino</a>
                        </li>
                        <li>
                            <a href="/roupas/Infantil?map=c,specificationFilter_26">infantil</a>
                        </li>
                        <li>
                            <a href="/sale">Sale</a>
                        </li>
                    </ul>
                </nav>
                </div> 
                <div className="header-container-right">
                    {/* input search */}
                    <input type="text" placeholder="Digite sua busca aqui" className="header-search-input" />                    
                    
                    {/* some user options */}
                    <nav className="header-user-options">
                        <ul>
                            <li className="login-btn">
                                <a href="/">
                                    <img alt="opções do usuário" src={userIco} />
                                </a>
                            </li>
                            <li className="search-btn">
                                <a href="/">
                                    <img src={searchIco} alt="Icone da Busca" id="search-ico" />
                                </a>
                            </li>
                            <li className="cart-btn">
                                <a href="/">
                                    <img alt="carrinho do usuário" src={cartIco} /
                                    >
                                </a>
                            </li>
                        </ul>
                    </nav>          
                </div>    
            </div>
        </header>
        </>
    )
};
export default Header;