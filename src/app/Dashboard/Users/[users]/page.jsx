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

async function Page({params}) {
  const { users } = await params
  
  return (
    <div>
    </div>
  )
}

export default Page 