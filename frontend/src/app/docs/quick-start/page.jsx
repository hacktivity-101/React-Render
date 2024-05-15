'use client';
import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const QuickStart = () => {

  return (
    <div>
      <div className='container py-10 px-40'>
        <section className='mb-10'>
          <h2 className='text-3xl font-bold'>Overview</h2>
          <hr className='mt-2 mb-6 border-slate-400' />
          <p>React-Render provide various elements for formatting your
            data and easily applying dynamic logic to your Webpages without minimal javascript</p>
        </section>
        <section className='mb-10'>
          <h2 className='text-3xl font-bold'>Getting Started</h2>
          <hr className='mt-2 mb-6 border-slate-400' />
          <p className='text-xl font-bold'>CDN Link : </p>
          <p>You just have to paste this CDN link inside your html page</p>
          <div className='py-4'>
            <CopyBlock
              text={`
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

export default QuickStart