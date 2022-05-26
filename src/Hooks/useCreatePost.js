
const useCreatePost = () => {

  const createApi = (api, data) =>{
    fetch(api, {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
       .then(res =>res.json())
       .then(result =>{
           console.log(result)
           window.location.reload();
       }) 
  }

    return {createApi};
};

export default useCreatePost;