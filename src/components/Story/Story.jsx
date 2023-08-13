import './Story.scss';

const Story = (props) => {
	return (
		<div className="story">
			<div className="story-item">
				<img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" />
			</div>
			<span>{props.title}</span>
		</div>
	)
}

export default Story
