import React from 'react'
import Article from './Article'
import User from './User'

const Page = () => {
  return (
    <div>
        <header><h1>React Skeletons</h1></header>
        <div className="content">
            <Article />
            <User />
        </div>
    </div>
  )
}

export default Page