import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
const BBSCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis minus, in, ad id eveniet eaque dolorum iste provident, vel nostrum dolor error iure libero quibusdam rem architecto! Magnam, explicabo sint?
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/bbs-posts/1"} className="text-blue-600">Read More</Link>
      </CardFooter>
    </Card>
  )
}

export default BBSCard