import React from 'react'
import { currentUser } from "@clerk/nextjs/server";
import { fetchUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import PostThread from '@/components/forms/PostThread';
const Page = async () => {
    const user = await currentUser();
    
    if(user === null){
      return null
    }
    const userInfo = await fetchUser(user.id)
    // console.log(userInfo)
    if(!userInfo?.onboarded){
      redirect('/onboarding')
    } 


    const userID = userInfo._id.toString();
    return (
    <>
        <h1 className='head-text'>Create Thread</h1>
        <PostThread userId={userID}/>
    </>
  )
}

export default Page