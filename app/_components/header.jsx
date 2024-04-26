import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Avatar } from '@nextui-org/react';
import { useState } from 'react';

const Header = () => {

    const changeColor = (isActive) => {
        return isActive ? 'secondary' : 'foreground';
    };

    const [activeLink, setActiveLink] = useState('home');

    return (
        <Navbar>
                <NavbarBrand>
                    <p className='font-bold text-inherit text-2xl'>Taisei Ishimaru</p>
                </NavbarBrand>
                <NavbarContent className='hidden sm:flex gap-4' justify='center'>
                <NavbarItem isActive={activeLink === 'home'}>
                    <Link color={changeColor(activeLink === 'home')} href='/' onClick={() => setActiveLink('home')}>
                    Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeLink === 'skills'}>
                    <Link color={changeColor(activeLink === 'skills')} href='#skills' aria-current='page' onClick={() => setActiveLink('skills')}>
                    Skills
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeLink === 'products'}>
                    <Link color={changeColor(activeLink === 'products')} href='#products' onClick={() => setActiveLink('products')}>
                    Products
                    </Link>
                </NavbarItem>
                </NavbarContent>
                <NavbarContent justify='end'>
                <Avatar
                    as={Link}
                    href='https://zenn.dev/taisei_ishimaru'
                    className='transition-transform p-2'
                    name='name'
                    size='md'
                    src='svgs/header/zenn.svg'
                />
                <Avatar
                    as={Link}
                    href='https://github.com/taiseee'
                    className='transition-transform'
                    name='name'
                    size='md'
                    src='svgs/header/github.svg'
                />
                </NavbarContent>
            </Navbar>
    );
}

export default Header;