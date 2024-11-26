import React from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const Suggestions = ({ list }: { list: { name: string; username: string }[] }) => {
    return (
        <Card>
            {
                list.map((item) => (
                    <CardHeader key={item.username}>
                        <CardTitle className='text-2xl font-bold text-center'>{item.name}</CardTitle>
                        <CardDescription className='text-center'>{item.username}</CardDescription>
                    </CardHeader>
                ))
            }

        </Card>
    )
}

export default Suggestions
