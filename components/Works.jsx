function Works(props) {
    return (
          <>
               <div className="card m-5 w-96 bg-base-100 shadow-xl image-full">
                 <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                 <div className="card-body">
                   <h2 className="card-title">{props.title}</h2>
                   <p>{props.description}</p>
                   <div className="card-actions justify-end">
                     <button className="btn btn-primary"><a href={props.link}>Github Page</a></button>
                   </div>
                 </div>
               </div>
          </>
    );
}

export default Works;
