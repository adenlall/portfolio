import Link from 'next/link';


export default function Page() {
  return(
     <>
          <h1 className="text-2xl font-extrabold text-blue-800">Wlcome Advanced Page</h1>
          <ul>
               <li><Link href="../">Return Me</Link></li>
          </ul>
     </>
  );
}
