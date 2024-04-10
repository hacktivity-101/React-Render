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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi dolore molestias maxime ratione! Animi dolore accusamus a quos minima ipsa iste quo, iure enim recusandae, vel est nisi soluta praesentium deserunt mollitia! Reiciendis, pariatur excepturi! Blanditiis quam quaerat illum.</p>
        </section>
        <section className='mb-10'>
          <h2 className='text-3xl font-bold'>Installation</h2>
          <hr className='mt-2 mb-6 border-slate-400' />
          <p>Install commmand : </p>
          <div className='py-4'>
            <CopyBlock
              text={'npm i my-engine'}
              language={'bash'}
              showLineNumbers={true}
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