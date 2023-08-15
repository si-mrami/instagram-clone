import { MoreHorizOutlined } from '@mui/icons-material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { BiMessageRounded, BiSave } from 'react-icons/bi';
import { RiSendPlaneLine } from 'react-icons/ri';
import { GrEmoji } from 'react-icons/gr';
import './Post.scss'
import { useState } from 'react';

const Post = (props) => {

	const [colorLike, setColorLike] = useState('#fff');
	const [isLiked, setisLiked] = useState(false);
	const [likeed, setLikeed] = useState(props.like);

	const handleColor = () => {
		const newColor = colorLike === '#fff' ? 'red' : '#fff';
		setColorLike(newColor);
	}

	const handleUnlike = () => {
		setLikeed(isLiked ? likeed - 1 : likeed + 1);
		setisLiked(!isLiked);
		console.log(likeed);
		handleColor();
	};

	return (
		<div className="post">
			<div className="post-card">
				<div className="card-top">
					<div className="profile" key={props.id}>
						<img src={props.imgProfile} alt="" />
						<span style={{ color: '#fff' }}>
							{props.Name} <small>. {props.time}</small>
						</span>
					</div>
					<div className="iconsMore">
						<MoreHorizOutlined style={{ cursor: 'pointer', color:'#fff' }} />
					</div>
				</div>
				<div className="post-info">
					<img src={props.imgPost} alt="" />
				</div>
				<div className="post-bottom">
					<div className="post-icons">
						<div className="lefticons">
							<FavoriteBorderOutlinedIcon onClick={handleUnlike} className='likebotton' style={{ cursor: 'pointer', fontSize: '25px', color: colorLike }} />
							<BiMessageRounded style={{ cursor: 'pointer', fontSize: '25px' }} />
							<RiSendPlaneLine style={{ cursor: 'pointer', fontSize: '25px' }} />
						</div>
						<div className="righticons">
							<BiSave style={{ cursor: 'pointer', fontSize: '25px' }} />
							{/* <LikeButt /> */}
						</div>
					</div>
					<div className="post-infos">
						<span className='like'>{likeed} likes</span>
						<div className="post-commente">
							<input type="text" placeholder='Add a comment...' />
							<GrEmoji style={{ cursor: 'pointer' }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post
