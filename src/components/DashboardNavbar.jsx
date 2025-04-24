// 'use server'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import Link from 'next/link'
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
} from './ui/menubar'
// import bcrypt from "bcryptjs";
import {
    Home,
} from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'

async function DashboardNavbar() {
    const { userId } = await auth()
    // const bycrept_id = bcrypt.hash(userId,10)
  return (
    <div>
        <div className='flex items-center justify-between p-4 bg-white shadow-md'>
            <div>
                <Link href={`/Dashboard/Users/${userId}`}><Home /></Link>
            </div>

            <div>
            <UserButton />
            </div>
        </div>
    </div>
  )
}

export default DashboardNavbar