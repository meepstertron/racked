import React, { useEffect, useState } from 'react'

import './App.css'
import { getNav, getPage } from './lib/docs'
import ReactMarkdown from 'react-markdown'

const getSlugFromPath = () => {
  const path = decodeURIComponent(window.location.pathname).replace(/^\//, '')
  return path || 'index'
}

const toHeadingId = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '')

const getNodeText = (children: React.ReactNode): string =>
  React.Children.toArray(children)
    .map((child) => {
      if (typeof child === 'string' || typeof child === 'number') {
        return String(child)
      }

      if (React.isValidElement<{ children?: React.ReactNode }>(child)) {
        return getNodeText(child.props.children)
      }

      return ''
    })
    .join('')

function App() {

  const [currentSlug, setCurrentSlug] = useState(getSlugFromPath)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentSlug(getSlugFromPath())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (!window.location.hash) {
      return
    }

    const targetId = decodeURIComponent(window.location.hash.slice(1))
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ block: 'start' })
    }
  }, [currentSlug])

  const page = getPage(currentSlug)
  const nav = getNav()

  const navigateTo = (slug: string, heading?: string) => {
    const url = slug === 'index' ? '/' : `/docs/${slug}`
    window.history.pushState(null, '', url)
    setCurrentSlug(slug)
    if (heading) {
      // wait for page to render then scroll
      setTimeout(() => {
        document.getElementById(toHeadingId(heading))?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }


  return (
    <div className="bg-[#1B1B1B] w-screen h-screen">
      <div className='p-2 text-white flex flex-row h-full'>
        {/* sidebar */}
        <div className='h-full'>
          <div className='outline-1 w-64 outline-white rounded text-white p-2 flex flex-col gap-2'>
{nav.map((item, index) => (
              <div key={index} className='flex flex-col gap-0'>
              <button type='button' onClick={() => navigateTo(item.slug)} className='text-left'>
                <span className='text-sm font-bold hover:underline cursor-pointer'>{item.title}</span>
              </button>
              <div className='pl-4 flex flex-col gap-0 '>
                {item.headings.map((heading, idx) => (
                  <span key={idx} onClick={() => navigateTo(item.slug, heading)} className='text-xs hover:underline cursor-pointer'>{heading}</span>
                ))}
                
              </div>
              
            </div>
))}
          </div>
        </div>
        <div className='h-full w-px bg-[#808080] mx-2' />
        <div className='w-full prose-invert p-8 overflow-y-scroll'>
        <ReactMarkdown components={{
          h1: ({children}) => {
            const headingText = getNodeText(children)
            return <h1 id={toHeadingId(headingText)} className="text-3xl font-bold">{children}</h1>
          },
          h2: ({children}) => {
            const headingText = getNodeText(children)
            return <h2 id={toHeadingId(headingText)} className="text-xl font-semibold mt-6">{children}</h2>
          },
          p: ({children}) => <p className="text-sm leading-relaxed">{children}</p>,
        }}>
          {page?.content ?? 'Page not found'}
        </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default App
