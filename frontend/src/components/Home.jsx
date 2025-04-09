import { Link } from "react-router-dom";

function Home() {
  return(

    <>

    <section>
      <h1 className="text-center pt-4">
        <strong> <i> <h1 className="text-blue-500 text-2xl "> Hellow this is pixi-fy homepage</h1></i></strong>
      </h1>
    </section>
     <section className=" flex gap-20 justify-between justify-center">
      <div className="">
        <h1>
          <i className="text-xl border">Dashboard</i>
        </h1>
      </div>
      <Link to="/Profile" className="text-blue-500 ">Profile</Link>
      <Link to="/comment" className="text-blue-500  ">Comment</Link>
      <Link to="/Likkes" className="text-blue-500  "> <img src="/like.png" alt="Like" className="rounded-xl" /></Link>
      <Link to="/Posts" className="text-blue-500  ">Posts</Link>
      <Link to="/comments" className="text-blue-500 ">Comments</Link>

        <div className="">
          
        </div>

        <div className="">
          <h1>
            
          </h1>
        </div>
      
     </section>

     

    </>
  );
}

export default Home;
