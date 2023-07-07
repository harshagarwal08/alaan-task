"use client";
import { useState } from 'react'
import Button from './components/Button'
import Tag from './components/Tag'

export default function Home() {
  const [tags, setTags] = useState(["Location"]);
  return (
    <main className="flex min-h-screen flex-col py-10 bg-white gap-16">
      <div className='flex justify-between w-full px-20'>
        <div className='flex flex-col gap-2'>
          <div className='text-2xl text-[#0B103A]'>Expense Tracking Tags</div>
          <div className='text-base text-[#6D7089]'>Set up tags to monitor your spend by additional dimensions relevant for your business (e.g., project, client, site, etc.)</div>
        </div>
        <Button/>
      </div>
      <div className='flex flex-col gap-5'>
      {tags.map((tag) => (
        <Tag tagName={tag} key={tag}/>
        ))}
      </div>
    </main>
  )
}
