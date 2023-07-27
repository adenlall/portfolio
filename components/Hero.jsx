function Hero() {
    return (
          <>
               <div className="m-0 p-0">
                 <div className="flex h-screen w-screen items-center justify-center">
                   <img
                     src="https://www.stockvault.net/data/2012/10/29/137060/preview16.jpg"
                     className="h-full w-full object-cover"
                   />
                   <div className="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
                     <h2 className="text-2xl font-bold">First Section</h2>
                     <p className="font-sans text-lg text-white">
                       Lorem Ipsum is simply dummy text of the printing and typesetting
                       industry. Lorem Ipsum has been the industry's standard dummy text ever
                       since the 1500s,
                     </p>
                   </div>
                 </div>
                 
               </div>

          </>
    );
}

export default Hero;
