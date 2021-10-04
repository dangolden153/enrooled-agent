import Card from "./Card"
import Image from 'next/image'

const ArticleCard = ({ img, title, link }) => {
    return (
        <Card className='card-article'>
            <div className="article-image">
                <Image src={ img } width='300' height='200' />
            </div>
            <div className="card-article-body">
                <span>{ title }</span>
                <a className='btn btn-news' href={ link }> Load More </a>
            </div>
        </Card>
    )
}

export default ArticleCard
