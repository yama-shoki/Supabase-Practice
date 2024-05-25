import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import BBSCard from "./BBSCard";


export const BBSCardList = ()=> {
return (
  <div　className="grid lg:grid-cols-3 px-4 py-4 gap-4">
    <BBSCard />
    <BBSCard />
    <BBSCard />
    <BBSCard />
    <BBSCard />
    <BBSCard />
  </div>

)
};