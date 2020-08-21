import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), '/pages/blog')

export function getAllPosts() {
    const fileNames = fs.readdirSync(postsDir)
    const allPosts = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')

        const fullPath = path.join(postsDir, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const resMatter = matter(fileContents)

        return {
            id,
            ...resMatter.data
        }
    })

    return allPosts.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDir)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDir, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const resMatter = matter(fileContents)

    const processedContent = await remark()
    .use(html)
    .process(resMatter.content)
    const htmlContent = processedContent.toString()

    return {
        id, 
        htmlContent,
        ...resMatter.data
    }
}