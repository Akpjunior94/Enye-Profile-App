import React, { useEffect, useState } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import ProfileCard from './components/ProfileCard';
import ProfileSearch from './components/ProfileSearch';


const  App = () => {
  const [userProfiles, setUserProfiles] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [profilePerPage] = useState(20)
  const [isLoading, setIsLoading] = useState(true)
  const [searchProfiles, setSearchProfiles] = useState('');
  const [filter, setFilter] = useState('');

  const fetchProfiles = () => {
    fetch(`https://api.enye.tech/v1/challenge/records?name`)
      .then(res => res.json())
      .then(res => {

        console.log(res.records.profiles);
        setUserProfiles(res.records.profiles);
        setIsLoading(false);
      })
  }

  useEffect(() => {
    fetchProfiles()
  }, []);

  // Get current profile
  const indexOfLastProfile = currentPage * profilePerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilePerPage
  const currentProfile = userProfiles.slice(indexOfFirstProfile, indexOfLastProfile);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  // search through the profile
  const getCurrentProfiles = (search = '') => {
    
    if (search || filter) {
      return currentProfile.filter(v => v.FirstName.toLowerCase().includes(search.toLowerCase()) || v.LastName.toLowerCase().includes(search.toLowerCase()));

    }
    return currentProfile;
  };

  return (
    <div className="bg-gray-300 h-full">
      <div className="container w-3/4 mx-auto">
        <ProfileSearch setSearchProfiles={setSearchProfiles} setFilter = {setFilter} />

        {!isLoading && getCurrentProfiles(searchProfiles, filter).length === 0 && <h1 className="text-6xl text-center mx-auto my-32">No Profiles found</h1> }

        { isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {getCurrentProfiles(searchProfiles, filter).map((userProfile, index) => (
            <ProfileCard key={index} userProfile={userProfile}/>
          ))}
        </div>}
        <Pagination profilePerPage={profilePerPage} totalProfiles ={userProfiles.length} paginate={paginate}/>
      </div>
    </div>
  );
}

export default App;
