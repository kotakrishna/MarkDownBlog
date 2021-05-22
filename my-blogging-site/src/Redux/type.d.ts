interface IBlog {
    _id: string
    author: string
    title:string
    content:string
    description: string
    tags: string[]
    date?: string
    updatedAt?: string
  }
  
  interface BlogProps {
    blog: IBlog
  }
  
  type ApiDataType = {
    message: string
    status: string
    blogs: IBlog[]
    blog?: IBlog
  }
  