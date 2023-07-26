import "@styles/me.css";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-extrabold text-blue-800">
        Wlcome to your profile manager
      </h1>
      <ul>
        <li>
          <Link href="/u/me/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/u/me/profile">Profile</Link>
        </li>
        <li>
          <Link href="/u/me/skins">Skins</Link>
        </li>
        <li>
          <Link href="/u/me/advanced">Advanced</Link>
        </li>
      </ul>
    </>
  );
}
