function Works(props) {
    return (
          <>
               <div className="card w-96 bg-base-100 shadow-xl image-full md:m-3 m-auto mt-3 mb-3">
                 <figure><img src={"/images/"+props.image} alt="Shoes" /></figure>
                 <div className="card-body">
                   <h2 className="card-title">{props.title}</h2>
                   <p>{props.description}</p>
                   <div className="card-actions justify-end">
                     <button className="btn btn-[#ed333b]"><a href={props.link}>Github Page</a></button>
                   </div>
                 </div>
               </div>
          </>
    );
}

export default Works;
