import Story from '../Story/Story';
import './Feed.scss';

const Feed = () => {
	return (
		<div className='feed'>
			<div className="feed-top">
				<Story />
				<Story />
				<Story />
				<Story />

			</div>
		</div>
	)
}

export default Feed
