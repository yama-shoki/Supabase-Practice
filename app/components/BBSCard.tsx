import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { BBSData } from "../types/types";

type BBSDataProps = {
  bbsData: BBSData;
};

const BBSCard = ({ bbsData }: BBSDataProps) => {
  const { title, content, createdAt, id, username } = bbsData;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/bbs-posts/${id}`} className="text-blue-600">
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
