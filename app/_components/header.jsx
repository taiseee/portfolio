import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Avatar } from '@nextui-org/react'
import { Link as Scroll } from 'react-scroll'

const Header = () => {
    return (
        <Navbar>
            <NavbarBrand>
                <Scroll to='top' smooth={true}>
                    <p className='font-bold text-inherit text-2xl'>Taisei Ishimaru</p>
                </Scroll>
            </NavbarBrand>
            <NavbarContent className='hidden sm:flex gap-4' justify='center'>
                <NavbarItem>
                    <Scroll to='skills' smooth={true}>
                        Skills
                    </Scroll>
                </NavbarItem>
                <NavbarItem>
                    <Scroll to='products' smooth={true}>
                        Products
                    </Scroll>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>
                <Avatar
                    as={Link}
                    href='https://zenn.dev/taisei_ishimaru'
                    className='transition-transform p-2 bg-white'
                    name='name'
                    size='md'
                    src='svgs/header/zenn.svg'
                />
                <Avatar
                    as={Link}
                    href='https://github.com/taiseee'
                    className='transition-transform bg-white'
                    name='name'
                    size='md'
                    src='svgs/header/github.svg'
                />
            </NavbarContent>
        </Navbar>
    )
}

export default Header
