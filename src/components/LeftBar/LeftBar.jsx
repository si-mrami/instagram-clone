import { ExploreOutlined, HomeOutlined, NotificationsOutlined, SearchOutlined } from '@mui/icons-material';
import './LeftBar.scss';
import { GoVideo } from 'react-icons/go'
import { FiMessageSquare } from 'react-icons/fi';
import { IoCreateOutline } from 'react-icons/io5';

const LeftBar = () => {
	return (
		<div className='leftbar'>
			<h1>Instagram</h1>
			<ul>
				<li>
					<HomeOutlined />
					Home
				</li>
				<li>
					<SearchOutlined />
					Search
				</li>
				<li>
					<ExploreOutlined />
					Explore
				</li>
				<li>
					<GoVideo />
					Reels
				</li>
				<li>
					<FiMessageSquare />
					Messages
				</li>
				<li>
					<NotificationsOutlined />
					Notifications
				</li>
				<li>
					<IoCreateOutline />
					Create
				</li>
				<li>
					<img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
					Profile
				</li>
			</ul>
		</div>
	)
}

export default LeftBar
