import { Card, CardHeader, Image, Tooltip, Divider } from '@nextui-org/react'

export default function Skils() {
    const skills = [
        {
            name: 'Python',
            svg: 'python',
            product: true,
            sub: [
                {
                    name: 'FastAPI',
                    svg: 'https://skillicons.dev/icons?i=fastapi&theme=light',
                },
                {
                    name: 'Selenium',
                    svg: 'https://skillicons.dev/icons?i=selenium&theme=light',
                },
            ],
        },
        {
            name: 'TypeScript',
            svg: 'typescript',
            product: true,
            sub: [
                {
                    name: 'React',
                    svg: 'https://skillicons.dev/icons?i=react&theme=light',
                },
                {
                    name: 'Next.js',
                    svg: 'https://skillicons.dev/icons?i=nextjs&theme=light',
                },
                {
                    name: 'Node.js',
                    svg: 'https://skillicons.dev/icons?i=nodejs&theme=light',
                },
            ],
        },
        {
            name: 'Firebase',
            svg: 'firebase',
            product: true,
        },
        {
            name: 'PHP',
            svg: 'php',
            product: false,
            sub: [
                {
                    name: 'Laravel',
                    svg: 'https://skillicons.dev/icons?i=laravel&theme=light',
                },
            ],
        },
        {
            name: 'Docker',
            svg: 'docker',
            product: false,
        },
        {
            name: 'MySQL',
            svg: 'mysql',
            product: false,
        },
        {
            name: 'Git',
            svg: 'git',
            product: false,
        },
        {
            name: 'AWS',
            svg: 'aws',
            product: false,
            sub: [
                {
                    name: 'Lambda',
                    svg: 'svgs/skills/aws-lambda.svg',
                },
                {
                    name: 'CodeCommit',
                    svg: 'svgs/skills/aws-codecommit.svg',
                },
                {
                    name: 'API Gateway',
                    svg: 'svgs/skills/aws-api-gateway.svg',
                },
                {
                    name: 'S3',
                    svg: 'svgs/skills/aws-s3.svg',
                },
                {
                    name: 'Serverless',
                    svg: 'svgs/skills/serverless.svg',
                },
            ],
        },
        {
            name: 'HTML',
            svg: 'html',
            product: false,
        },
        {
            name: 'CSS',
            svg: 'css',
            product: false,
        },
        {
            name: 'TailwindCSS',
            svg: 'tailwindcss',
            product: false,
        },
        {
            name: 'Bootstrap',
            svg: 'bootstrap',
            product: false,
        },
        {
            name: 'Linux',
            svg: 'linux',
            product: false,
        },
    ]
    return (
        <div id='skills'>
            <h1 className='pt-20 text-4xl font-bold'>Skills</h1>
            <Divider />
            <div className='pt-4 gap-4 grid grid-cols-2 sm:grid-cols-4'>
                {skills.map((skill, index) => (
                    <Tooltip
                        isDisabled={!skill.sub}
                        showArrow={true}
                        content={
                            <div className='flex'>
                                {skill.sub &&
                                    skill.sub.map((sub, index) => (
                                        <Image
                                            key={index}
                                            alt={sub.name}
                                            className='p-2'
                                            src={sub.svg}
                                            width={50}
                                        />
                                    ))}
                            </div>
                        }
                        key={index}
                    >
                        <Card className='py-4 hover:-translate-y-2 shadow-none'>
                            <CardHeader className='pb-0 pt-0 px-4'>
                                <Image
                                    alt={skill.name}
                                    className='p-2'
                                    src={`https://skillicons.dev/icons?i=${skill.svg}&theme=light`}
                                    width={50}
                                />
                                <p className='font-bold text-xl'>{skill.name}</p>
                            </CardHeader>
                        </Card>
                    </Tooltip>
                ))}
            </div>
            <h1 className='pt-4 text-xl font-bold'>Interests</h1>
            <div className='pt-2'>
                <Image
                    src='https://skillicons.dev/icons?i=go,supabase,anaconda,pytorch&theme=light'
                    className='rounded-none'
                    alt='go,supabase,anaconda,pytorch'
                />
            </div>
        </div>
    )
}
