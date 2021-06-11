import Head from 'next/head'
import { consistArr } from "../util";
const arr_data = consistArr();
export default function Home() {
  return (
    <div className="container">
          {arr_data[1].layerc.length}
    </div>
  )
}
