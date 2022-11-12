import React from 'react'

const PostCard = ({post : {title, excerpt}}) => {
  return (
    <div>
        {title}
        {excerpt}
    </div>
  )
}

export default PostCard