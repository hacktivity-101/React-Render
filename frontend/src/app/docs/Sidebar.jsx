import React from 'react';
import Link from 'next/link';

const menuItems = {
    'API': [
        {
            label: 'Quick Start',
            link: '/docs/quick-start'
        },
        {
            label: 'Guides',
            link: '/docs/guides'
        },
    ],
    'Elements': [
        {
            label: 'Conditional Expressions',
            link: '/docs/elements/conditional-expression'
        },
        {
            label: 'Conditional Expressions',
            link: '/docs/elements/conditional-expression'
        },
        {
            label: 'Conditional Expressions',
            link: '/docs/elements/conditional-expression'
        },
        {
            label: 'Conditional Expressions',
            link: '/docs/elements/conditional-expression'
        },
        {
            label: 'Conditional Expressions',
            link: '/docs/elements/conditional-expression'
        },
        {
            label: 'Conditional Expressions',
            link: '/docs/elements/conditional-expression'
        }
    ],
    'Support': [
        {
            label: 'Quick Start',
            link: '/docs/quick-start'
        },
        {
            label: 'Guides',
            link: '/docs/guides'
        },
        {
            label: 'About',
            link: '/docs/about'
        }
    ]
}

const Sidebar = () => {

    return (
        <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            <a href="/">
                <img
                    className="w-auto h-7"
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5617617-4674328.png"
                    alt=""
                />
            </a>
            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="-mx-3 space-y-6 ">
                    {
                        Object.keys(menuItems).map(category => (
                            <div className="space-y-3 ">
                                <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                                    {category}
                                </label>
                                {
                                    menuItems[category].map(({ label, link }) => (
                                        <Link
                                            className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                            href={link}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                                                />
                                            </svg>
                                            <span className="mx-2 text-sm font-medium">{label}</span>
                                        </Link>
                                    ))
                                }
                            </div>
                        ))
                    }
                </nav>
            </div>
        </aside>

    )
}

export default Sidebar