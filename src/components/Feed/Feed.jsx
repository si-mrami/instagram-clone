import { Storys } from '../../Data/Data';
import Post from '../Posts/Post';
import Story from '../Story/Story';
import './Feed.scss';

const Feed = () => {


	return (
		<div className='feed'>
			<div className="feed-top">
				{Storys.map((item) => (
				<Story Name={item.Name} img={item.img} key={item.id}/>
					))}

			</div>
			<Post/>
			<Post/>
			<Post/>
		</div>
	)
}

export default Feed
