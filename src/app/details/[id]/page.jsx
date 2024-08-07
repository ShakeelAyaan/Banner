"use client"

import DetailsChildTwo from '@/app/components/DetailsChildTwo';
import style from "../../page.module.css"

const Page = ({ params }) => <div className={style.main}><DetailsChildTwo id={params.id} /> </div>
export default Page;

