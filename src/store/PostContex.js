import { useState } from "react";
import { createContext } from "react/cjs/react.production.min";
export const PostContext=createContext(null)


function Post ({children}){
    const[postDetails,setPostDetalis]=useState()
    return(
        <PostContext.Provider value={{postDetails,setPostDetalis}}>
{children}

</PostContext.Provider>
    )
}

export default Post