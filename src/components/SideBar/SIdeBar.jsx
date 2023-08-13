import Footer from '../Footer/Footer';
import './SideBar.scss';

const SIdeBar = () => {
	return (
		<div className='sidebar'>
			<div className="profileUser">
				<div className="profil-info">
					<img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
					<div className="info">
						<span>si_mohamed-ri</span>
						<small>Mohamed Rami</small>
					</div>
				</div>
				<span>Switch</span>
			</div>
			<div className="botom">
				<div className="top">
					<h1>Suggested for you</h1>
					<span>See All</span>
				</div>
				<div className="follows">
					<div className="follow">
						<div className="profile">
							<div className="profil-info">
								<img src="https://cdn-icons-png.flaticon.com/128/4128/4128176.png" alt="" />
								<div className="info">
									<span>Drisse</span>
									<small>Follows You</small>
								</div>
							</div>
							<span>Follow</span>
						</div>

						<div className="profile">
							<div className="profil-info">
								<img src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png" alt="" />
								<div className="info">
									<span>Anass</span>
									<small>Follows You</small>
								</div>
							</div>
							<span>Follow</span>
						</div>

						<div className="profile">
							<div className="profil-info">
								<img src="https://cdn-icons-png.flaticon.com/128/4140/4140047.png" alt="" />
								<div className="info">
									<span>Fati</span>
									<small>Follows You</small>
								</div>
							</div>
							<span>Follow</span>
						</div>

					</div>
				</div>

			</div>
			<Footer/>
		</div>
	)
}

export default SIdeBar
