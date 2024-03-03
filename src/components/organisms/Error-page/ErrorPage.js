import { useRouteError,Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
    <p style={{textAlign:"center",padding:"80px"}}>
      <Link to="/">Go to Home </Link>
    </p>
  </div>
  )
}


      
    
