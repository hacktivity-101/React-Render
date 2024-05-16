'use client';
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';

const Alert = () => {
    return (
        <div>
            <div className='container py-10 px-40'>
                <section className='mb-10'>
                    <h2 className='text-3xl font-bold'>Alerts</h2>
                    <hr className='mt-2 mb-6 border-slate-400' />
                    <p>
                        Alerts are used to show some important information to the user.
                    </p>
                </section>
                <section className='mb-10'>
                    <h2 className='text-3xl font-bold'>Using in your Code</h2>
                    <hr className='mt-2 mb-6 border-slate-400' />
                    <p>You just have to paste this CDN link inside your html page</p>
                    <div className='py-4'>
                        <CopyBlock
                            text={`
                            <alert message="Data submitted successfully" type="success" ></alert>
              `}
                            language={'html'}
                            showLineNumbers={false}
                            theme={dracula}
                            wrapLines
                        />
                    </div>
                    <h2 className='mt-3 text-xl font-bold'>Output:</h2>
                    <img className='w-full' src="/images/condition1.png" alt="" />
                </section>
            </div>
        </div>
    )
}

export default Alert;