'use client'
import {Divider} from "@nextui-org/react";
import Image from "next/image";

export default function Products() {
  return (
    <div className='px-20 pt-20'>
      <h1 className='text-4xl font-bold'>制作物</h1>
      <Divider className="my-4" />
      <div className="flex flex-row">
        <div className="basis-1/3 flex justify-center items-center">
          <Image
            alt='linebot_chat'
            className='rounded-none'
            src='/images/warikan_bot_chat.JPG'
            width={300}
            height={600}
          />
        </div>
        <div className="basis-2/3 ml-6">
          <h2 className="text-2xl font-semibold">LINE Bot「割り勘会計士　愛衣」</h2>
          <p className="text-sm mt-4">2023/8/13</p>
          <p className="text-lg mt-4">
            「割り勘会計士　愛衣」は友達や同僚とのお会計を簡単に割り勘してくれるLINE Botです。<br />
            ユーザーがLINE上で「割り勘会計士　愛衣」と友達になり、グループに招待することで準備完了です。<br />
            実装にはchatGPTの関数呼び出しを利用しており、特に決まった言い方をしなくともこちらの意図を読み取って立て替えの登録や支払いの計算を行ってくれます。<br /><br />

            それぞれが支払った額から最も少ない回数で済むような精算方法を教えてくれます。<br />
            これで割り勘で揉めることもなくなります。<br /><br />

            夏休みに時間がありchatGPTの関数呼び出し機能を使ってみたかったので作成しました。<br />
            LambdaやAPI Gateway、FastAPIの使い方も学べてよかったです。<br />
          </p>
          <div className='pt-4 gap-4 grid grid-cols-8 sm:grid-cols-12'>
            <Image
              alt={'fastapi'}
              className='rounded-none'
              src='/svgs/skils/fastapi.svg'
              width={50}
              height={50}
            />
            {/* {studyings.map((studying, index) => (
              
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
