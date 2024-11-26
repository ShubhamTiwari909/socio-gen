"use client"
import React from 'react'
import { Button } from './ui/button'
import { googleSignin } from "@/server/auth"
import { userAuthDetails } from '@/store/auth-store'

const Navbar = () => {
    const userDetails = userAuthDetails(state => state.authDetails)
    const updateAuthDetails = userAuthDetails(state => state.updateAuthDetails)

    console.log(userDetails)
    return (
        <div className='flex justify-between max-w-7xl mx-auto py-5 border-b-2 border-b-slate-300'>
            <h1>Logo</h1>
            <Button onClick={() => googleSignin(updateAuthDetails)}>Login</Button>
        </div>
    )
}

export default Navbar
