function Hero() {
    return (
          <>
               <div className="m-0 p-0">
                 <div className="flex h-screen w-screen items-center justify-center">
                   <img
                     src="/images/170.jpg"
                     className="h-full w-full object-cover"
                   />
                   <div className="absolute left-0 right-0 m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
                     <h2 className="text-2xl font-extrabold text-green-300">Who I'am ?</h2>
                     <p style={{"border-raduis": "18px"}} className="font-sans font-bold text-lg text-green-300">
                       Welcome to my public portfolio, I'm aden, full-stack Javascript developer.
                       I used to use React & Next (javascript) for front-end.
                       for the back-end I'm mastering Laravel (php), and I can use Nextjs as full-stack also with expressjs.
                       In addition to the web dev, I have a long experience with cross platform Desktop app with GTK toolkit.
                     </p>
                   </div>
                 </div>
                 
               </div>

          </>
    );
}

export default Hero;
