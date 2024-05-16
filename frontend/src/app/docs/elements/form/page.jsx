'use client';
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';

const Form = () => {
    return (
        <div>
            <div className='container py-10 px-40'>
                <section className='mb-10'>
                    <h2 className='text-3xl font-bold'>Custom Form</h2>
                    <hr className='mt-2 mb-6 border-slate-400' />
                    <p>
                        Custom form element is used to create a form with custom fields.
                    </p>
                </section>
                <section className='mb-10'>
                    <h2 className='text-3xl font-bold'>Using in your Code</h2>
                    <hr className='mt-2 mb-6 border-slate-400' />
                    <p>You just have to paste this CDN link inside your html page</p>
                    <div className='py-4'>
                        <CopyBlock
                            text={`
    <custom-form fields="['name', 'email', 'password']" action="/add" method="post" />
    <script src="http://localhost:5000/main.js"></script>
              `}
                            language={'html'}
                            showLineNumbers={false}
                            theme={dracula}
                            wrapLines
                        />
                    </div>
                    <h2 className='mt-3 text-xl font-bold'>Output:</h2>
                    <img className='w-full' src="/images/form1.png" alt="" />
                </section>
            </div>
        </div>
    )
}

export default Form;