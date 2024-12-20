import React from 'react'
import Spinner from "@/components/common/ui/Spinner";
import Title from "@/components/dashboard/common/Title";

const Loading = () => {
  return (
    <div className="p-4 bg-white border-border border border-solid rounded-md h-[calc(100vh_-_100px)]">
      <Title>All Users</Title>
      <div className="mt-6 flex items-center justify-center h-full">
        <Spinner />
      </div>
    </div>
  )
}

export default Loading