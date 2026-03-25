import React,{useState} from "react";

import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import ManageExams from "./ManageExams";
import ManageCourses from "./ManageCourses";
import UploadQuestions from "./UploadQuestions";
import ManageUsers from "./ManageUsers";
import Analytics from "./Analytics";

export default function AdminDashboard(){

const [page,setPage] = useState("dashboard")

return(

<div className="flex">

<Sidebar setPage={setPage}/>

<div className="flex-1 p-8 bg-gray-100 min-h-screen">

{page==="dashboard" && <DashboardHome/>}
{page==="courses" && <ManageCourses/>}
{page==="exams" && <ManageExams/>}
{page==="upload" && <UploadQuestions/>}
{page==="users" && <ManageUsers/>}
{page==="analytics" && <Analytics/>}

</div>

</div>

)

}