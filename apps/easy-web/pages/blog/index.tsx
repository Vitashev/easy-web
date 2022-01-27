import MainLayout from 'apps/easy-web/components/main-layout/main-layout'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Parser from 'rss-parser'
import feed from '../../public/data/feed.json'
import Post from 'apps/easy-web/components/post/post'

/* eslint-disable-next-line */
export interface BlogProps {}

export const Blog = (props: BlogProps) => {
  // console.log(feed)
  // useEffect(() => {
  //   const parser = new Parser()
  //   const filterPosts = (items, limit) => {
  //     return items
  //   }
  //   const fetchPosts = async () => {
  //     const url =
  //       'https://cors-anywhere.herokuapp.com/https://medium.com/feed/@easy-web'
  //     const feed = await parser.parseURL(url)
  //     const blogPosts = filterPosts(feed.items, 5)
  //     // setPosts(feed)
  //     console.log(JSON.stringify(feed.items))
  //   }
  //   fetchPosts()
  // }, [])
  return (
    <MainLayout>
      <div className={styles['wrapper']}>
        {feed
          .map((post) => ({
            title: post.title,
            content: post['content:encoded'],
            guid: post.guid,
            pubDate: post.pubDate,
            categories: post.categories,
          }))
          .map((post, index) => (
            <div className={styles['post-card']} key={index + post.title}>
              <Post post={post} />
            </div>
          ))}
      </div>
    </MainLayout>
  )
}

export default Blog
