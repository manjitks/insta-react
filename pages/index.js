import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Feed from "../component/feed/feed";
import Header from "../component/header/header";
import Modal from "../component/modal/modal";

export default function Home() {
  const [addPostModal, setAddPostModal] = useState(false);
  console.log(addPostModal);
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-none">
      <Head>
        <title>Intsa clone</title>
      </Head>
      <Modal />
      <Header />
      <Feed />
    </div>
  );
}
