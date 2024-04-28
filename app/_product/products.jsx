'use client'
import { Divider, Image} from '@nextui-org/react'

export default function Products() {
    return (
        <div className='pt-20' id='products'>
            <h1 className='text-4xl font-bold'>Products</h1>
            <Divider className='my-4' />
            <div className='flex flex-row'>
                <div className='basis-1/3 flex justify-center items-center'>
                    <Image
                        alt='linebot_line'
                        className='rounded-none'
                        src='/images/warikanbot-line.JPG'
                        width={300}
                        height={600}
                    />
                </div>
                <div className='basis-2/3 ml-6'>
                    <h2 className='text-2xl font-semibold'>LINE Bot「割り勘会計士　愛衣」</h2>
                    <div className='flex mt-4 justify-between'>
                        <p className='text-sm'>2023/8/13</p>
                        <span class='bg-gray-300 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                            個人開発
                        </span>
                    </div>
                    <p className='text-lg mt-4'>
                        「割り勘会計士　愛衣」は友達や同僚とのお会計を簡単に割り勘してくれるLINE
                        Botです。
                        <br />
                        ユーザーがLINE上で「割り勘会計士　愛衣」と友達になり、グループに招待することで準備完了です。
                        <br />
                        実装にはgptの関数呼び出しを利用しており、特に決まった言い方をしなくともこちらの意図を読み取って立て替えの登録や支払いの計算を行ってくれます。
                        <br />
                        <br />
                        それぞれが支払った額から最も少ない回数で済むような精算方法を教えてくれます。
                        <br />
                        これで割り勘で揉めることもなくなります。
                        <br />
                        <br />
                        夏休みに時間がありgptの関数呼び出し機能を使ってみたかったので作成しました。
                        <br />
                        バックエンドはFirebaseです。
                        <br />
                    </p>
                    <div className='pt-4 gap-4 grid grid-cols-8 sm:grid-cols-12'>
                        <Image
                            src='https://skillicons.dev/icons?i=firebase&theme=light'
                            className='rounded-none h-12'
                            alt='firebase'
                        />
                        <Image
                            src='https://skillicons.dev/icons?i=python&theme=light'
                            className='rounded-none h-12'
                            alt='python'
                        />
                        <Image
                            src='svgs/skills/openai.svg'
                            className='rounded-lg h-12 p-1 bg-stone-100'
                            alt='openai'
                        />
                        <Image
                            src='svgs/skills/line.svg'
                            className='rounded-none h-12'
                            alt='line'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
