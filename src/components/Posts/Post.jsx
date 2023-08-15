import { MoreHorizOutlined } from '@mui/icons-material';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRounded, BiSave } from 'react-icons/bi';
import { RiSendPlaneLine } from 'react-icons/ri';
import { GrEmoji } from 'react-icons/gr';
import './Post.scss'

const Post = (props) => {
	return (
		<div className="post">
			<div className="post-card">
				<div className="card-top">
					<div className="profile">
						<img src={props.imgProfile} alt="" />
						<span>
							{props.Name} <small>. {props.time}</small>
						</span>
					</div>
					<div className="iconsMore">
						<MoreHorizOutlined style={{ cursor: 'pointer' }} />
					</div>
				</div>
				<div className="post-info">
					<img src={props.imgPost} alt="" />
				</div>
				<div className="post-bottom">
					<div className="post-icons">
						<div className="lefticons">
							<AiOutlineHeart style={{ cursor: 'pointer', fontSize: '25px' }} />
							<BiMessageRounded style={{ cursor: 'pointer', fontSize: '25px' }} />
							<RiSendPlaneLine style={{ cursor: 'pointer', fontSize: '25px' }} />
						</div>
						<div className="righticons">
							<BiSave style={{ cursor: 'pointer', fontSize: '25px' }}/>
						</div>
					</div>
					<div className="post-infos">
						<span className='like'>{props.like} likes</span>
						<div className="post-commente">
							<input type="text" placeholder='Add a comment...'/>
							<GrEmoji style={{ cursor: 'pointer' }}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post
