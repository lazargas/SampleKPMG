import * as React from 'react';
import "../../styles/drawer.css";
import {drawerData} from '../../data/DrawerData';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


export default function PersistentDrawerLeft() {
  
  
  return (
    <div className="app">
  <div className="drawer">
    <ul>
      <span className='text-l text-[rgb(0,0,0,0.5)] ' >General</span>
      {
        drawerData.General.map((data,index)=>{
          return (
           <li>
             <span>{data}</span>
           </li>
          );
       })
      }
      <span className='text-l text-[rgb(0,0,0,0.5)] ' >Admin Workspace</span>
       {
        drawerData.AdminWorkspace.map((data,index)=>{
           return (
            <li>
              <span>{data}</span>
            </li>
           );
        })
       }
       <span className='text-l text-[rgb(0,0,0,0.5)] ' >User Workspace</span>
       {
        drawerData.UserWorkspace.map((data,index)=>{
           return (
            <li>
              <span>{data}</span>
            </li>
           );
        })
       }
    </ul>
  </div>
  <div className="main-content"></div>
</div>

  );
}
