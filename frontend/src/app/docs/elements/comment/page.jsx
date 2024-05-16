'use client';
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';

const CommentElement = () => {
    return (
        <div>
            <div className='container py-10 px-40'>
                <section className='mb-10'>
                    <h2 className='text-3xl font-bold'>Comment Expression</h2>
                    <hr className='mt-2 mb-6 border-slate-400' />
                    <p>
                        Comment expressions are used to add comments to your webpages.
                    </p>
                </section>
                <section className='mb-10'>
                    <h2 className='text-3xl font-bold'>Using in your Code</h2>
                    <hr className='mt-2 mb-6 border-slate-400' />
                    <p>You just have to paste this CDN link inside your html page</p>
                    <div className='py-4'>
                        <CopyBlock
                            text={`
    <comment value="comment-value"></comment>
    <script src="http://localhost:5000/main.js"></script>
              `}
                            language={'html'}
                            showLineNumbers={false}
                            theme={dracula}
                            wrapLines
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CommentElement;