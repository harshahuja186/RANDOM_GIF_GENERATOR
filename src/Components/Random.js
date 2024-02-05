import React from 'react'
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Random = () => {

    const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-1/2 p-4 bg-green-400 pt-1 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-3xl underline uppercase font-semibold'>A Random Gif</h1>
      {/* <img src={gif} alt="gif" width="450"/> */}
      {
        loading ? <Spinner/> : <img src={gif} alt="gif" width="450"/>
      }
      <button onClick={() => fetchData()}
      className='w-10/12 opacity-90 rounded-md py-2 text-lg font-semibold uppercase bg-green-200'>
        Generate
      </button>
    </div>
  )
}

export default Random
