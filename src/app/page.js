"use client";
import { useState, useEffect } from 'react'
import Button from './components/Button'
import Tag from './components/Tag'
import SideModal from './components/SideModal';

export default function Home() {
  // State variables
  const [tags, setTags] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [inputTagValue, setInputTagValue] = useState('');
  const [selectedTag, setSelectedTag] = useState({});

  // Fetching the tags from local storage on initial render
  useEffect(() => {
    const tags = JSON.parse(localStorage.getItem('tags'));
    if (tags) {
      setTags(tags);
    }
  }, []);

  // Updating the tags in local storage when tags state changes
  useEffect(() => {
    localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);

  // Handler functions
  const handleModal = (value) => {
    setOpenModal(value);
  }

  const handleSaveChanges = () => {
    if(inputTagValue.trim() === "") return alert('Please enter a tag name');

    const newTag = {
      id: tags.length + 1,
      name: inputTagValue,
    };

    let updatedTags;
    if (selectedTag.id) {
      updatedTags = tags.map((tag) =>
        tag.id === selectedTag.id ? { ...tags, name: inputTagValue } : tag
      );
    } else {
      updatedTags = [...tags, newTag];
    }
    setTags(updatedTags);
    setInputTagValue('');
    setSelectedTag({});
    handleModal(false);
  };

  const handleEditTag = (tag) => {
    setSelectedTag(tag);
    setInputTagValue(tag.name);
    handleModal(true);
  };

  return (
    <main className="flex min-h-screen flex-col py-10 bg-white gap-16">
      <div className='flex justify-between w-full px-20'>
        <div className='flex flex-col gap-2'>
          <div className='text-2xl text-[#0B103A]'>Expense Tracking Tags</div>
          <div className='text-base text-[#6D7089]'>Set up tags to monitor your spend by additional dimensions relevant for your business (e.g., project, client, site, etc.)</div>
        </div>
        <Button buttonName="+ Add New" onClick={()=>handleModal(true)}/>
      </div>
      <div className='flex flex-col gap-5'>
      {tags.map((tag) => (
        <Tag tag={tag} key={tag.id} handleEditTag={handleEditTag}/>
      ))}
      </div>
      {
      openModal &&
      <SideModal handleModal={handleModal} handleSaveChanges={handleSaveChanges}inputTagValue={inputTagValue} setInputTagValue={setInputTagValue}/> }
    </main>
  )
}
