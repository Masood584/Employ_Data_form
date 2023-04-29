// import axios from "axios";
// import React from "react";

// function PostData() {

//    const handleFormSubmit=(e)=>{
//      e.preventDefault();
//      const name=e.target.name.value
//      const message=e.target.message.value
//      const content=e.target.content.value
//      const data={name,message,content}
     
//      axios.post("https://jsonplaceholder.typicode.com/posts",data)
//      .then((response)=>{
//          console.log(response,"nnnnnnnnnnnnnnn")
//      }).catch((error)=>{
//         console.log(error)
//      })
      
//    }

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <input type={"text"} placeholder="Title Name" name="name"></input>
//         <input type={"text"} placeholder="message" name="message"></input>
//         <input type={"text"} placeholder="content" name="content"></input>
//         <button>submit</button>
//       </form>
//     </div>
//   );
// }

// export default PostData;
import React, { useState } from 'react';
import axios from 'axios';

function PostData() {
  const [image, setImage] = useState(null);

//   const [image, setImage] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);

    axios({
        method: "post",
        url: "https://amberstore.pk/upload.php",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(response => {
        console.log(response);
        // do something with the response
      })
      .catch(error => {
        console.log(error);
        // handle the errors
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label >Upload</label>
      <input type="file"  onChange={(event) => setImage(event.target.files[0])} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default PostData;
