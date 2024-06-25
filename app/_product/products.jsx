'use client'
import { Divider, Image, Link } from '@nextui-org/react'

export default function Products() {
    const products = [
        {
            image: '/images/warikanbot-line.JPG',
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
            links: [
                {
                    name: 'LINEアカウント',
                    url: 'https://liff.line.me/1645278921-kWRPP32q/?accountId=671hezvm',
                },
            ],
        },
        {
            image: '/images/bonsaience.png',
            name: 'BONSAIENCE',
            // state: 'IPA未踏アドバンスド',
            state: 'チーム開発',
            description: `
                日本の伝統文化である盆栽と最新テクノロジーを掛け合わせ、盆栽の魅力を拡張し「より多くの人が、より身近に、より盆栽を楽しむ」ための開発を九大生をはじめとしたグループで行なっています。こちらはそのグループのホームページです。
            `,
            skills: [
                {
                    name: 'nextjs',
                },
                {
                    name: 'react',
                },
                {
                    name: 'typescript',
                },
                {
                    name: 'tailwindcss',
                },
                {
                    name: 'cloudflare',
                },
            ],
            links: [
                {
                    name: 'BONSAIENCEホームページ',
                    url: 'https://bonsaience.jp/',
                },
            ],
        },
        {
            image: '/images/switchbot_gps.png',
            name: 'swichbotとGPSで玄関ロック解除',
            state: '個人開発',
            description: `
                switchbotを使って家の玄関を自動で開けるシステムです。
                GPSの位置情報を取得し、自宅に近づいたらスマートフォンからswitchbotを操作して玄関を開けます。
                iOSのショートカット、AWSのLambda、APIGatewayなどを利用しました。
            `,
            skills: [
                {
                    name: 'aws',
                },
                {
                    name: 'python',
                },
                {
                    name: 'Lambda',
                    image: (
                        <Image
                            src='svgs/skills/aws-lambda.svg'
                            className='rounded-lg h-12'
                            alt='lambda'
                        />
                    ),
                },
                {
                    name: 'APIGateway',
                    image: (
                        <Image
                            src='svgs/skills/aws-api-gateway.svg'
                            className='rounded-lg h-12'
                            alt='APIGateway'
                        />
                    ),
                },
                {
                    name: 'switchbot',
                    image: (
                        <Image
                            src='images/skills/switchbot.png'
                            className='rounded-lg h-12'
                            alt='switchbot'
                        />
                    ),
                },
                {
                    name: 'ios shortcut',
                    image: (
                        <Image
                            src='images/skills/ios_shortcut.png'
                            className='rounded-lg h-12'
                            alt='ios shortcut'
                        />
                    ),
                },
            ],
            links: [
                {
                    name: 'Zenn',
                    url: 'https://zenn.dev/taisei_ishimaru/articles/b07a4c2f5f7c30',
                },
                {
                    name: 'GitHub',
                    url: 'https://github.com/taiseee/switchbot_operation',
                },
            ],
        },
    ]

    return (
        <div className='pt-20' id='products'>
            <h1 className='text-4xl font-bold'>Products</h1>
            {products.map((product) => (
                <>
                    <Divider className='mb-4' />
                    <div className='flex flex-row mb-4'>
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
                            {product.links && (
                                <div className='pt-4'>
                                    <h3 className='text-lg font-semibold'>Links</h3>
                                    <ul>
                                        {product.links.map((link, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={link.url}
                                                    isExternal
                                                    showAnchorIcon
                                                    className='text-gray-500'
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}
