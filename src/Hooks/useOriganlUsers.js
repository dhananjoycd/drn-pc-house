import React from 'react';

const useOriganlUsers = () => {
    //make unique User

function makeOrginalUsers(array, users){
    const newOrginalUID = [];
    const orginalUsers = [];
    for(let i = 0; i<array.length; i++){
        
        if(newOrginalUID.indexOf(users[i].uid) === -1){
            newOrginalUID.push(users[i].uid);
            orginalUsers.push(users[i])
        }
       
    }

    return orginalUsers;
  }

  
    return {makeOrginalUsers};
};

export default useOriganlUsers;