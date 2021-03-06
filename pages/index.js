import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import YtCard from "../components/YtCard";

const YOUTUBE_CHANNEL_API = `https://youtube.googleapis.com/youtube/v3/search`;

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_CHANNEL_API}?type=video&part=snippet&channelId=UCsPdgUIoOBTBI1UmulW1pdw&maxResults=50&order=date&key=${process.env.NEXT_PUBLIC_YT_API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  let titleText = "Sanskar Tiwari Youtube Video's";

  return (
    <div className=''>
      <Head>
        <title>{titleText}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='p-10'>
        <h1 className='m-4 font-extrabold text-4xl'>{titleText}</h1>
        <p className='m-4'>I teach what i learn and explore.</p>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-4'>
            {data &&
              data.items.map((item) => {
                return (
                  <YtCard
                    key={item["id"]["videoId"]}
                    title={item["snippet"]["title"]}
                    desc={item["snippet"]["description"]}
                    link={
                      `https://www.youtube.com/watch?v=` + item["id"]["videoId"]
                    }
                    imgUrl={item["snippet"]["thumbnails"]["medium"]["url"]}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
