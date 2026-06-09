import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

interface Props{
    Title:string;
    Desc:string;
    link:string
}

export const BlogComp = ({Title,Desc,link}:Props) => {
  return (
    <div className="max-w-sm hover:translate-y-5">
  <Card>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {Title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {Desc}
    </p>
    <button className="border-2 rounded text-blue-900 border-blue-900 dark:text-blue-400 dark:border-blue-400 hover:text-white dark:hover:text-white hover:bg-blue-900 dark:hover:bg-blue-800 transition-colors duration-150 py-1 font-semibold"><Link to={link} className="block w-full h-full px-4">Read More</Link></button>
  </Card>
</div>
  )
}
