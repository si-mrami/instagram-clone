import './Story.scss';

const Story = (props) => {
	return (
		<div className="story">
			<div className="story-item" key={props.id}>
				<img src={props.img} alt="" />
			</div>
			<span>{props.Name}</span>
		</div>
	)
}

export default Story
