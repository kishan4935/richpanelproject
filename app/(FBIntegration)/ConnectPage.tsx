'use client'

import Button from '@/components/Button'
import Card from '@/components/Card'
import React, { FunctionComponent } from 'react'

const ConnectPage: FunctionComponent = () => {

  const onClickHandler = () => {

  }

  return (
    <div className="bg-[#1e4d91] h-screen flex justify-center items-center ">
      <Card>
        <h2 className='text-center mb-4'>Facebook Page Integration</h2>
        <Button onClick={onClickHandler} style="bg-[#1e4d91]">Connect Page</Button>
      </Card>
    </div>
  );
}

export default ConnectPage