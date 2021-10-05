import Card from "./Card"
import Image from 'next/image'

const NewsCard = ({ img, title, link }) => {
    return (
        <Card className='card-news card-horizontal'>
            <div className="news-image col-4">
                <Image src={ img } width='210' height='140' />
            </div>
            <div className="card-news-body col-8">
                <span>{ title }</span>
                <a className='btn btn-news' href={ link }> Load More </a>
            </div>
        </Card>
    )
}

export default NewsCard
