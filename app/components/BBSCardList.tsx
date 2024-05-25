import { BBSData } from "../types/types";
import BBSCard from "./BBSCard";

type BBSAllDataProps = {
  bbsAllData: BBSData[];
};

export const BBSCardList = ({ bbsAllData }: BBSAllDataProps) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((bbsData)=>  <BBSCard key={bbsData.id} bbsData={bbsData}/>)}


    </div>
  );
};
