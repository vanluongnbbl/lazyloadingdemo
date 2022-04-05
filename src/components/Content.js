import React, {useState, useEffect} from 'react'
import LazyLoad from 'react-lazyload'
import Loading from './Loading'
import defaultImage from '../images/rose2.jpeg'

function Content() {
    const [datas, setDatas] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

  return (
    <div>
        <h1>Posts</h1>
        <ol>
            {datas && datas.map((data, index) => (
                <LazyLoad 
                    key={index} 
                    placeholder={<Loading />}
                    offset={0}
                >
                    <li>
                   
                        <h3>{data.title}</h3>
                        {/* <p>{data.body}</p> */}
                        <LazyLoad
                        once={true}
                        height={100}
                        placeholder={<img src={defaultImage} alt="..." />}
                        >
                        <div className="post-img">
                            <img src={data.url} alt="...." />
                        </div>
                        </LazyLoad>
                    </li>
                </LazyLoad>
            ))}
        </ol>
    </div>
  )
}

export default Content