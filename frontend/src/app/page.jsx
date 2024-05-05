import React from 'react'


const Home = () => {
  return (
    <>
      <>
        <header className="fixed w-full">
          <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
              <a href="#" className="flex items-center">
                <img
                  src="/images/hero.webp"
                  className="h-6 mr-3 sm:h-9"
                  alt="Landwind Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Templating Engine
                </span>
              </a>
              <div className="flex items-center lg:order-2">
                <div className="hidden mt-2 mr-4 sm:inline-block">
                  <a
                    className="github-button"
                    href="https://github.com/hacktivity-101"
                    data-size="large"
                    data-icon="octicon-star"
                    data-show-count="true"
                    aria-label="Star themesberg/landwind on GitHub"
                  >
                    Star
                  </a>
                </div>
                {/* <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a> */}
                <a
                  href="#"
                  className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                >
                  Download
                </a>
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a
                      href="/"
                      className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/login"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      href="/signup"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="/docs/quick-start"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Feedback"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Feedback
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* Start block */}
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                MY ENGINE
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              "Unlock limitless creativity with our advanced templating engine. Effortlessly transform your ideas into stunning web designs. Dive in and revolutionize your digital projects today!"

{" "}
                <a href="#" className="hover:underline">
                  My-Engine
                </a>{" "}
                based on the {" "}
                <a
                  href="#"
                  className="hover:underline"
                >
                  React
               </a>
                .
              </p>
              <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a
                  href="https://github.com/themesberg/landwind"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    {/* Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>{" "}
                  View on GitHub
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 300"
                    width={1667}
                    height={2500}
                  >
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{
                        __html:
                          ".st0{fill:#0acf83}.st1{fill:#a259ff}.st2{fill:#f24e1e}.st3{fill:#ff7262}.st4{fill:#1abcfe}"
                      }}
                    />
                    <title>Figma.logo</title>
                    <desc>Created using Figma</desc>
                    <path
                      id="path0_fill"
                      className="st0"
                      d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
                    />
                    <path
                      id="path1_fill"
                      className="st1"
                      d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
                    />
                    <path
                      id="path1_fill_1_"
                      className="st2"
                      d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
                    />
                    <path
                      id="path2_fill"
                      className="st3"
                      d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
                    />
                    <path
                      id="path3_fill"
                      className="st4"
                      d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
                    />
                  </svg>{" "}
                  Get Figma file
                </a>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="/images/hero.webp" alt="hero image" />
            </div>
          </div>
        </section>
        {/* End block */}
       
        {/* Start block */}
        <section className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            {/* Row */}
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  What is My Engine?
                </h2>
                <p className="mb-8 font-light lg:text-xl">
                  
                "Welcome to [My Engine], where creativity meets efficiency in web development. With our cutting-edge templating engine, bring your digital visions to life effortlessly. Say goodbye to tedious coding and hello to seamless customization. Whether you're a seasoned developer or newcomer, our intuitive platform streamlines the process, focusing on crafting exceptional user experiences. Join the revolution in templating technology today."                  
                </p>
                {/* List */}
                <ul
                  role="list"
                  className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                >
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                     Continous integration and development
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      Development workflow
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      Knowledge management
                    </span>
                  </li>
                </ul>
                <p className="mb-8 font-light lg:text-xl">
                  Deliver great service experiences fast - without the complexity of
                  traditional ITSM solutions.
                </p>
              </div>
              <img
                className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                src="/images/abc.png"
                alt="dashboard feature image"
              />
            </div>
            {/* Row */}
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
              <img
                className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                src="/images/xyz.png"
                alt="feature image 2"
              />
              <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  We invest in the world’s potential
                </h2>
                <p className="mb-8 font-light lg:text-xl">
                  Deliver great service experiences fast - without the complexity of
                  traditional ITSM solutions. Accelerate critical development work,
                  eliminate toil, and deploy changes with ease.
                </p>
                {/* List */}
                <ul
                  role="list"
                  className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                >
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      Dynamic reports and dashboards
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      Templates for everyone
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      Development workflow
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      Limitless business automation
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      Knowledge management
                    </span>
                  </li>
                </ul>
                <p className="font-light lg:text-xl">
                  Deliver great service experiences fast - without the complexity of
                  traditional ITSM solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End block */}
        {/* Start block */}
        <section className="bg-white dark:bg-gray-900">
          <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
            <div className="col-span-2 mb-8">
              <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
                Trusted Worldwide
              </p>
              <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
                Trusted by over 600 million users and 10,000 teams
              </h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Our rigorous security and compliance standards are at the heart of all
                we do. We work tirelessly to protect you and your customers.
              </p>
              <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                  >
                    Explore Legality Guide
                    <svg
                      className="w-5 h-5 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                  >
                    Visit the Trust Center
                    <svg
                      className="w-5 h-5 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
              <div>
                <svg
                  className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="mb-2 text-2xl font-bold dark:text-white">
                Active development
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                My-Engine has an active users, and the library is under active development. We're happy to answer your questions or give you help.
                </p>
              </div>
              <div>
                <svg
                  className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                <h3 className="mb-2 text-2xl font-bold dark:text-white">
                  Fast development time
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  Don't waste time and attention figuring out arcane new syntax because 'elegance' — or how to preprocess your data so it will actually render right.                </p>
              </div>
              <div>
                <svg
                  className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 640 512"

                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="mb-2 text-2xl font-bold dark:text-white">
                  Simple syntax
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  JavaScript code in simple, straightforward scriptlet tags. Just write JavaScript that emits the HTML you want, and get the job done!
                </p>
              </div>
              <div>
                <svg
                  className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4H312c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6V240c0-8.8-7.2-16-16-16s-16 7.2-16 16V479.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96.3c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z" />
                </svg>
                <h3 className="mb-2 text-2xl font-bold dark:text-white">
                  Easy debugging
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  It's easy to debug errors: your errors are plain JavaScript exceptions, with template line-numbers included.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End block */}
       
        {/* Start block */}
        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
              Frequently asked questions
            </h2>
            <div className="max-w-screen-md mx-auto">
              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400"
              >
                <h3 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                  >
                    <span>Can I use Landwind in open-source projects?</span>
                    <svg
                      data-accordion-icon=""
                      className="w-6 h-6 rotate-180 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id="accordion-flush-body-1"
                  className=""
                  aria-labelledby="accordion-flush-heading-1"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Landwind is an open-source library of interactive components
                      built on top of Tailwind CSS including buttons, dropdowns,
                      modals, navbars, and more.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out this guide to learn how to{" "}
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-500 hover:underline"
                      >
                        get started
                      </a>{" "}
                      and start developing websites even faster with components on top
                      of Tailwind CSS.
                    </p>
                  </div>
                </div>
                <h3 id="accordion-flush-heading-2">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-2"
                  >
                    <span>Is there a Figma file available?</span>
                    <svg
                      data-accordion-icon=""
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id="accordion-flush-body-2"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-2"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Landwind is first conceptualized and designed using the Figma
                      software so everything you see in the library has a design
                      equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out the{" "}
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-500 hover:underline"
                      >
                        Figma design system
                      </a>{" "}
                      based on the utility classes from Tailwind CSS and components
                      from Landwind.
                    </p>
                  </div>
                </div>
                <h3 id="accordion-flush-heading-3">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-3"
                  >
                    <span>
                      What are the differences between Landwind and Tailwind UI?
                    </span>
                    <svg
                      data-accordion-icon=""
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id="accordion-flush-body-3"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-3"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      The main difference is that the core components from Landwind
                      are open source under the MIT license, whereas Tailwind UI is a
                      paid product. Another difference is that Landwind relies on
                      smaller and standalone components, whereas Tailwind UI offers
                      sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      However, we actually recommend using both Landwind, Landwind
                      Pro, and even Tailwind UI as there is no technical reason
                      stopping you from using the best of two worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Learn more about these technologies:
                    </p>
                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                      <li>
                        <a
                          href="#"
                          className="text-purple-600 dark:text-purple-500 hover:underline"
                        >
                          Landwind Pro
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-purple-600 dark:text-purple-500 hover:underline"
                        >
                          Tailwind UI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 id="accordion-flush-heading-4">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-4"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-4"
                  >
                    <span>What about browser support?</span>
                    <svg
                      data-accordion-icon=""
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id="accordion-flush-body-4"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-4"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      The main difference is that the core components from Landwind
                      are open source under the MIT license, whereas Tailwind UI is a
                      paid product. Another difference is that Landwind relies on
                      smaller and standalone components, whereas Tailwind UI offers
                      sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      However, we actually recommend using both Landwind, Landwind
                      Pro, and even Tailwind UI as there is no technical reason
                      stopping you from using the best of two worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Learn more about these technologies:
                    </p>
                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                      <li>
                        <a
                          href="#"
                          className="text-purple-600 dark:text-purple-500 hover:underline"
                        >
                          Landwind Pro
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-purple-600 dark:text-purple-500 hover:underline"
                        >
                          Tailwind UI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End block */}
        {/* Start block */}
        
        <footer className="bg-white dark:bg-gray-800">
          <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h3>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Brand Center
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Help center
                </h3>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Discord Server
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Twitter
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h3>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Licensing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h3>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Brand Center
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Download
                </h3>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      iOS
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Android
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Windows
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      MacOS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="text-center">
              <a
                href="#"
                className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                <img
                  src="./images/logo.svg"
                  className="h-6 mr-3 sm:h-9"
                  alt="Landwind Logo"
                />
                My-Engine
              </a>
              <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
                © 2021-2022 My-Engine™. All Rights Reserved. Built with{" "}
        
                <a
                  href="#"
                  className="text-purple-600 hover:underline dark:text-purple-500"
                >
                  My-Engine
                </a>
                .
              </span>
              <ul className="flex justify-center mt-5 space-x-5">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </>

    </>
  )
}

export default Home