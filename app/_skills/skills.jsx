import { Card, CardHeader, CardBody, CardFooter, Image, Button } from '@nextui-org/react';

export default function Skils() {
  const skills = [
    {
      name: 'Python',
      svg: 'python',
      content: '',
      product: true,
      sub: [
        {
          name: 'FastAPI',
          svg: 'https://skillicons.dev/icons?i=fastapi&theme=light'
        },
        {
          name: 'Selenium',
          svg: 'https://skillicons.dev/icons?i=selenium&theme=light'
        }
      ]
    },
    {
      name: 'TypeScript',
      svg: 'typescript',
      content: '',
      product: true,
      sub: [
        {
          name: 'React',
          svg: 'https://skillicons.dev/icons?i=react&theme=light'
        },
        {
          name: 'Next.js',
          svg: 'https://skillicons.dev/icons?i=nextjs&theme=light'
        },
        {
          name: 'Node.js',
          svg: 'https://skillicons.dev/icons?i=nodejs&theme=light'
        }
      ]
    },
    {
      name: 'Firebase',
      svg: 'firebase',
      content: '',
      product: true,
      sub: []
    },
    {
      name: 'PHP',
      svg: 'php',
      content: '',
      product: false,
      sub: [
        {
          name: 'Laravel',
          svg: 'https://skillicons.dev/icons?i=laravel&theme=light'
        }
      ]
    },
    {
      name: 'Docker',
      svg: 'docker',
      content: '',
      product: false,
      sub: []
    },
    {
      name: 'MySQL',
      svg: 'mysql',
      content: '',
      product: false,
      sub: []
    },
    {
      name: 'Git',
      svg: 'git',
      content: '',
      product: false,
      sub: []
    },
    {
      name: 'AWS',
      svg: 'aws',
      content: '',
      product: false,
      sub: [
        {
          name: 'Lambda',
          svg: 'svgs/skills/aws-lambda.svg'
        },
        {
          name: 'CodeCommit',
          svg: 'svgs/skills/aws-codecommit.svg'
        },
        {
          name: 'API Gateway',
          svg: 'svgs/skills/aws-api-gateway.svg'
        },
        {
          name: 'S3',
          svg: 'svgs/skills/aws-s3.svg'
        },
        {
          name: 'Serverless',
          svg: 'svgs/skills/serverless.svg'
        }
      ]
    },
    {
      name: 'HTML',
      svg: 'html',
      content: '',
      product: false,
      sub: []
    },
    {
      name: 'CSS',
      svg: 'css',
      content: '',
      product: false,
      sub: []
    },
    {
      name: 'TailwindCSS',
      svg: 'tailwindcss',
      content: '',
      product: false,
      sub: []
    },
    {
      name: 'Bootstrap',
      svg: 'bootstrap',
      content: '',
      product: false,
      sub: []
    }
  ]
  const studyings = [
    {
      name: 'Go',
      svg: 'go',
    },
    {
      name: 'c',
      svg: 'c',
    },
    {
      name: 'c++',
      svg: 'cpp',
    }
  ]
  return (
    <div className='px-20'>
      <h1 className='pt-20 text-4xl font-bold'>Skills</h1>
      <div className='pt-4 gap-4 grid grid-cols-2 sm:grid-cols-3'>
        {skills.map((skill, index) => (
          <Card className='py-4 hover:-translate-y-2 shadow-none' key={index}>
            <CardHeader className='pb-0 pt-0 px-4'>
              <Image
                alt={skill.name}
                className='p-2'
                src={`https://skillicons.dev/icons?i=${skill.svg}&theme=light`}
                width={50}
              />
              <p className='font-bold text-xl'>{skill.name}</p>
            </CardHeader>
            {skill.sub.length > 0 && (
              <CardBody className='overflow-visible py-2 gap-2 grid grid-cols-6 items-center'>
                {skill.sub.map((sub, index) => (
                  <Image
                  className='rounded-md p-2'
                    alt={sub.name}
                    src={sub.svg}
                    width={50}
                    key={index}
                  />
                ))}
              </CardBody>
            )}
            {skill.product && (
              <CardFooter>
                <Button color="secondary" variant="flat">
                  制作物
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
      <h1 className='pt-4 text-xl'>勉強中・興味のあるもの</h1>
      <div className='pt-4 gap-4 grid grid-cols-8 sm:grid-cols-12'>
        {studyings.map((studying, index) => (
          <Image
            key={index}
            alt={studying.name}
            className='rounded-none'
            src={studying.svg}
            width={50}
          />
        ))}
      </div>
    </div>
  )
}
