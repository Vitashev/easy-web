import { Button, Card } from '@momo/shared/ui'
import { useEffect } from 'react'
import styles from './post.module.scss'

export interface PostProps {
  post: {
    categories: string[]
    content: string
    // creator: string
    // 'dc:creator': string
    guid: string
    // isoDate: string
    //link: string
    pubDate: string
    title: string
  }
}

const trimDesc = (content: string) => {
  let shortenStr = content.substring(0, 400)
  shortenStr = shortenStr.replaceAll(/<[^>]*>?/gm, '')
  return shortenStr + '...'
}

const parseImgUrl = (content: string) => {
  const parserElement = (tag, text) => {
    const openTag = `<${tag}>`
    const closeTag = `</${tag}>`

    return text.substring(
      text.indexOf(openTag),
      text.indexOf(closeTag) + closeTag.length,
    )
  }
  const figure = parserElement('figure', content)

  const src = 'src="'
  const srcStart = figure.indexOf(src)
  const srcEnd = figure.indexOf('"', srcStart + src.length)

  const imgUrl = figure.substring(srcStart + src.length, srcEnd)
  return imgUrl
}

export const Post = ({
  post: { title, content, guid, categories },
}: PostProps) => {
  const imgUrl = parseImgUrl(content)

  useEffect(() => {}, [])

  return (
    <Card>
      <>
        <img src={imgUrl} className="card-img-top" alt="..."></img>
        <div className={['card-body'].join(' ')}>
          <div className={[styles['card-title']].join(' ')}>{title}</div>
          {/* <p className={['card-text', styles['trunc']].join(' ')}>{content}</p> */}
          <div className={styles['badge-wrapper']}>
            {categories.map((cat, index) => {
              return (
                <div key={index + cat} className={styles['badge']}>
                  {cat}
                </div>
              )
            })}
          </div>
          <a className={styles['btn-wrapper']} href={guid} target="_blank">
            <Button size="md">Read 🧐</Button>
          </a>
        </div>
      </>
    </Card>
  )
}

export default Post
