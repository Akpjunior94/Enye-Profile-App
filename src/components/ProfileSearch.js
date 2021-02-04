import React from 'react'

const ProfileSearch = ( { setSearchProfiles, setFilter  } ) => {

  return (
    <div className="md:flex py-8">
      <div className="flex flex-1 mr-3">
        <input onChange={e => setSearchProfiles(e.target.value)} autoFocus className="w-full p-2 pl-6 rounded-lg rounded-r-none focus:outline-none" type="text" placeholder="Search Profiles using Names..."/>
        <button className="bg-grey-lightest focus:outline-none bg-green-500 hover:bg-green-700 p-2 rounded-r-lg border-grey border-l shadow hover:bg-grey-lightest" type="submit">
          <span className="w-auto flex justify-end items-center text-white p-2 hover:text-grey-darkest">
            <i className="material-icons text-xs">search</i>
          </span>
        </button>
      </div>

      {/* sort */}
      <select defaultValue="sort" onChange={e => {
        setFilter(e.target.value);
        console.log(e.target.value)
      }} className="flex-none rounded-lg p-3">
        <option disabled value="sort">Sort</option>
        <option value="Male">Gender</option>
        <option value="PaymentMethod">Payment Method</option>
      </select>
    </div>
  )
}

export default ProfileSearch;
