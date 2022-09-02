import { useDispatch, useSelector } from "react-redux";
import { getSampleData } from "../store/reducer/sample/sampleAction";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const dispatch = useDispatch();
  const sampleListData = useSelector((state) => state.sampleData);
  const { sample } = sampleListData;
  useEffect(() => {
    dispatch(getSampleData());
  }, [dispatch]);
  // console.log(sample)
  return (
    <>
      <Image layout="fill" src={sample.message} />
    </>
  );
}
