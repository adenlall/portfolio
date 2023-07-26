
export async function generateMetadata({params}) {
     return {
          title: params.userId +" - allacc",
     }
}

function Page({params}) {
    return (
          <>
               <main className="flex min-h-screen flex-col items-center justify-between p-24">
                    <h1 className="text-2xl font-extrabold text-blue-800">{params.userId} - allacc profiler</h1>
                    <h2>welcome to {params.userId} Public Page.</h2>
               </main>
          </>
    );
}

export default Page;
