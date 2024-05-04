'use client'
import { Divider, Image } from '@nextui-org/react'

export default function Products() {
    const products = [
        {
            name: 'LINE Bot「割り勘会計士　愛衣」',
            state: '個人開発',
            description: `
                「割り勘会計士 愛衣」は友達や同僚とのお会計を簡単に割り勘してくれるLINE Botです。
                ユーザーがLINE上で「割り勘会計士 愛衣」と友達になり、グループに招待することで準備完了です。

                実装にはgptの関数呼び出しを利用しており、特に決まった言い方をしなくともこちらの意図を読み取って立て替えの登録や支払いの計算を行ってくれます。それぞれが支払った額から最も少ない回数で済むような精算方法を教えてくれます。これで割り勘で揉めることもなくなります。

                夏休みに時間がありgptの関数呼び出し機能を使ってみたかったので作成しました。
                バックエンドはFirebaseです。
                `,
            skills: [
                {
                    name: 'firebase',
                },
                {
                    name: 'python',
                },
                {
                    name: 'openai',
                    image: (
                        <Image
                            src='svgs/skills/openai.svg'
                            className='rounded-lg h-12 p-1 bg-stone-100'
                            alt='openai'
                        />
                    ),
                },
                {
                    name: 'line',
                    image: (
                        <Image
                            src='svgs/skills/line.svg'
                            className='rounded-none h-12'
                            alt='line'
                        />
                    ),
                },
            ],
            image: '/images/warikanbot-line.JPG',
        },
        {
            name: 'BONSAIENCE',
            state: 'IPA未踏アドバンスド',
            description: `
                ITを駆使してイノベーションを創出できる優れたアイディア・技術力をもつ人材
                `,
        }
    ]

    return (
        <div className='pt-20' id='products'>
            <h1 className='text-4xl font-bold'>Products</h1>
            <Divider className='my-4' />
            <div className='flex flex-row'>
                {products.map((product) => (
                    <>
                        <div className='basis-1/3 flex justify-center items-center'>
                            <Image
                                alt='linebot_line'
                                className='rounded-none'
                                src={product.image}
                                width={300}
                                height={600}
                            />
                        </div>
                        <div className='basis-2/3 ml-6'>
                            <div className='flex mt-4 justify-between items-center'>
                                <h2 className='text-2xl font-semibold'>{product.name}</h2>
                                <span class='bg-gray-300 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                                    {product.state}
                                </span>
                            </div>
                            <p className='text-lg mt-4 whitespace-pre-line'>
                                {product.description}
                            </p>
                            <div className='pt-4 gap-4 grid grid-cols-8 sm:grid-cols-12'>
                                {product.skills.map((skill) => (
                                    <>
                                        {skill.image ? (
                                            skill.image
                                        ) : (
                                            <Image
                                                alt={skill.name}
                                                className='rounded-none h-12'
                                                src={`https://skillicons.dev/icons?i=${skill.name}&theme=light`}
                                            />
                                        )}
                                    </>
                                ))}
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}
