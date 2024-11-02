'use client'
import React from 'react'
import { useCtx } from "@/context/ContextProvider";

const UserInfo = () => {

  const { user } = useCtx()

  return (
    <div className="text-center mb-6 hidden md:block">
      <h2 className="text-dark-1 text-2xl font-[500]">{`${user?.firstName} ${user?.lastName}`}</h2>
      <p className='text-dark-1'>{user?.email}</p>
    </div>
  )
}

export default UserInfo