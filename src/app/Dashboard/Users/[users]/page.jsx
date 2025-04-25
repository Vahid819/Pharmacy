import Link from 'next/link'
import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormTrigger,
  useForm,
} from '@/components/ui/form'
import { Separator } from "@/components/ui/separator"


async function Page({params}) {
  const { users } = await params
  
  return (
    <div className='flex flex-col h-auto w-auto border-2 mx-6 rounded-lg shadow-lg p-4'>
      <div className='flex w-full items-center justify-around'>
        <div></div>
      </div>
      <Separator className='my-2 w-full mx-0' />

    </div>
  )
}

export default Page 