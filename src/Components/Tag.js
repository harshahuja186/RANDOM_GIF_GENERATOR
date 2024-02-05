
import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Tag = () => {

    const [tag, setTag] = useState('');

    const {gif , loading, fetchData} = useGif(tag);


  return (
    <div className='w-1/2 p-4 bg-blue-400 pt-1 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-3'>
      <h1 className='text-3xl underline uppercase font-semibold'>A Random Gif - {tag}</h1>
      {/* <img src={gif} alt="gif" width="450"/> */}
      {
        loading ? <Spinner/> : <img src={gif} alt="gif" width="450"/>
      }
      <input type="text"
      className='w-10/12 opacity-90 rounded-md py-2 text-lg font-semibold bg-green-50 text-center' 
        onChange={(event) => setTag(event.target.value)}
      />
      <button onClick={() => fetchData()}
      className='w-10/12 opacity-90 rounded-md py-2 text-lg font-semibold uppercase bg-green-200'>
        Generate
      </button>
    </div>
  )
}

export default Tag
