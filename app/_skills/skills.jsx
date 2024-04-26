import { Card, CardHeader, CardBody, CardFooter, Image, Button } from '@nextui-org/react';

export default function Skils() {
  const skills = [
    {
      name: 'Python',
      svg: '/svgs/skils/python.svg',
      content: '',
      product: true,
      sub: [
        {
          name: 'FastAPI',
          svg: '/svgs/skils/fastapi.svg'
        },
        {
          name: 'Selenium',
          svg: '/svgs/skils/selenium.svg'
        }
      ]
    },
    {
      name: 'TypeScript',
      svg: '/svgs/skils/typescript.svg',
      content: '',
      product: true,
      sub: [
        {
          name: 'React',
          svg: '/svgs/skils/react.svg'
        },
        {
          name: 'Next.js',
          svg: '/svgs/skils/nextjs.svg'
        },
        {
          name: 'Node.js',
          svg: '/svgs/skils/nodejs.svg'
        },
        {
          name: 'chrome',
          svg: '/svgs/skils/chrome.svg'
        }
      ]
    },
    {
      name: 'Firebase',
      svg: '/svgs/skils/firebase.svg',
      content: '',
      product: true,
      sub: []
    },
    {
      name: 'PHP',
      svg: '/svgs/skils/php.svg',
      content: '',
      product: false,
      sub: [
        {
          name: 'Laravel',
          svg: '/svgs/skils/laravel.svg'
        }
      ]
    },
    {
      name: 'Docker',
      svg: '/svgs/skils/docker.svg',
      content: '',
      product: false,
      sub: []
    },
    {
      name: 'MySQL',
      svg: '/svgs/skils/mysql.svg',
      content: '',
      product: false,
      sub: []
    },
    {
      name: 'Git',
      svg: '/svgs/skils/git.svg',
      content: '',
      product: false,
      sub: []
    },
    {
      name: 'AWS',
      svg: '/svgs/skils/aws.svg',
      content: '',
      product: false,
      sub: [
        {
          name: 'Lambda',
          svg: '/svgs/skils/aws-lambda.svg'
        },
        {
          name: 'CodeCommit',
          svg: '/svgs/skils/aws-codecommit.svg'
        },
        {
          name: 'API Gateway',
          svg: '/svgs/skils/aws-api-gateway.svg'
        },
        {
          name: 'S3',
          svg: '/svgs/skils/aws-s3.svg'
        },
        {
          name: 'Serverless',
          svg: '/svgs/skils/serverless.svg'
        }
      ]
    },
    {
      name: 'HTML',
      svg: '/svgs/skils/html-5.svg',
      content: '',
      product: false,
      sub: []
    },
    {
      name: 'CSS',
      svg: '/svgs/skils/css-3.svg',
      content: '',
      product: false,
      sub: []
    },
    {
      name: 'TailwindCSS',
      svg: '/svgs/skils/tailwindcss.svg',
      content: '',
      product: false,
      sub: []
    },
    {
      name: 'Bootstrap',
      svg: '/svgs/skils/bootstrap.svg',
      content: '',
      product: false,
      sub: []
    }
  ]
  const studyings = [
    {
      name: 'Go',
      svg: '/svgs/studyings/go.svg',
    },
    {
      name: 'c',
      svg: '/svgs/studyings/c.svg',
    },
    {
      name: 'c++',
      svg: '/svgs/studyings/cpp.svg',
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
                className='rounded-none p-2'
                src={skill.svg}
                width={50}
              />
              <p className='font-bold text-xl'>{skill.name}</p>
            </CardHeader>
            {skill.sub.length > 0 && (
              <CardBody className='overflow-visible py-2 gap-2 grid grid-cols-6 items-center'>
                {skill.sub.map((sub, index) => (
                  <Image
                    alt={sub.name}
                    className='rounded-none'
                    src={sub.svg}
                    width={40}
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
