import { VideoPage } from "@/features/video";
import ServerSideRenderedComponent from "@/libs/utils";
export default async function Video() {
  const data = await ServerSideRenderedComponent("Konsep Struktur Bangunan");


  return <VideoPage datas={data} />;
}
