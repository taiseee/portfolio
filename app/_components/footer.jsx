import { GoMail } from 'react-icons/go'

const Footer = () => {
    return (
        <footer class='w-full p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 mt-4'>
            <span class='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
                © 2024{' Taisei Ishimaru '}
            </span>
            <div class='text-sm text-gray-500 sm:text-center dark:text-gray-400 flex items-center'>
                <GoMail />&nbsp;<a href='mailto:ishimaru.taisei.582@s.kyushu-u.ac.jp'>ishimaru.taisei.582@s.kyushu-u.ac.jp</a>
            </div>
        </footer>
    )
}

export default Footer
