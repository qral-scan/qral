import React, {useState, useEffect} from 'react'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
 } from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [homeClick, setHomeClick] = useState(false);
    const [privacyClick, setPrivacyClick] = useState(false);
    const [termsClick, setTermsClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
        setPrivacyClick(false);
        setTermsClick(false);
    }
    const handlePrivacyClick = () => {
        setHomeClick(false);
        setPrivacyClick(true);
        setTermsClick(false);
    }
    const handleTermsClick = () => {
        setHomeClick(false);
        setPrivacyClick(false);
        setTermsClick(true);
    }

    const handleClick = () =>  setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // so if the screensize is <= 960px then set button state to false
        if(window.innerwidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> 
                        <NavIcon />
                            QRal
                    </NavLogo>
                    <HamburgerIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </HamburgerIcon>
                    <NavMenu onClick={handleClick} click={click} >
                        <NavItem onClick={handlePrivacyClick} privacyClick={privacyClick}>
                            <NavLinks to='/privacy' onClick={closeMobileMenu}>
                                Privacy Policy
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleTermsClick} termsClick={termsClick}>
                            <NavLinks to='/terms' onClick={closeMobileMenu}>
                                Terms And Services
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}

export default Navbar
