"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import * as z from 'zod'
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import React, { ChangeEvent, useState } from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod"
import { ThreadValidation } from '@/lib/validations/thread'
import {usePathname, useRouter} from 'next/navigation'
import { createThread } from "@/lib/actions/thread.actions"


// import { updateUser } from "@/lib/actions/user.actions"

interface Props {
    user: {
        id: string,
        objectId : string,
        username : string,
        name : string, 
        bio : string, 
        image : string
    },
    btnTitle : string
}




const PostThread = ({userId} : {userId : string}) => {
  const router = useRouter();
  const pathname = usePathname(); 

  const form = useForm({
    resolver : zodResolver(ThreadValidation),
    defaultValues : {
        thread : '',
        accountId : userId
    }
  });
  const onSubmit = async (values : z.infer<typeof ThreadValidation>) => {
     await createThread({
      text : values.thread,
      author : userId, 
      communityId : null,
      path : pathname,
     }); 
     router.push("/")

  }
    return (
        <Form {...form}>
            <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="flex flex-col justify-start gap-10">
                        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="mt-10 flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Content
              </FormLabel>
              <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
                <Textarea
                  rows={15}
                  {...field}
                 />
              
              </FormControl>
              
            </FormItem>
          )}
        />
            <Button type="submit" className ="bg-primary-500">
                Post Thread
            </Button>
            </form>
        </Form>
  )
}

export default PostThread