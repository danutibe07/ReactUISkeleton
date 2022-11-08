import React from 'react'
import SkeletonElement from './SkeletonElement'

const SkeletonUser = ({type}) => {
  return (
          <div className='skeleton-wrapper'>
        <div className="skeleton-article">
        <SkeletonElement type="avatar" />
        </div>
    </div>
  )
}

export default SkeletonUser