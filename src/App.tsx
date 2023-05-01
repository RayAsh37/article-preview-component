// import { useState } from 'react';
import drawers from './assets/images/drawers.jpg';
import avatarMichelle from './assets/images/avatar-michelle.jpg';
import share from './assets/images/icon-share.svg';
// import shareWhite from './assets/images/icon-share-white-arrow.svg';
import './App.css';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<div className='master'>
				<div className='card'>
					{/* <div className='popSocial'>HelloWorld</div> */}
					<div className='left-section'>
						<img
							src={drawers}
							alt=''
						/>
					</div>
					<div className='right-section'>
						<div className='heading'>
							<p>
								Shift the overall look and feel by adding these
								wonderful touches to furniture in your home
							</p>
						</div>
						<div className='description'>
							<p>
								Ever been in a room and felt like something was
								missing? Perhaps it felt slightly bare and
								uninviting. I’ve got some simple tips to help
								you make any room feel complete.
							</p>
						</div>
						<div className='person'>
							<div className='personPhotoAndDescrip'>
								<img
									src={avatarMichelle}
									alt=''
								/>
								<div className='avatarDescription'>
									<p className='personName'>
										Michelle Appleton
									</p>
									<p className='personDob'>28 Jun 2020</p>
								</div>
							</div>
							<div className='share'>
								{/* <div className='popSocial'>HelloWorld</div> */}
								<button>
									<img
										src={share}
										alt=''
									/>
									{/* Share */}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* FOOTER */}
			<div className='footer'>
				Challenge by
				<a
					href='https://www.frontendmentor.io?ref=challenge'
					target='_blank'>
					Frontend Mentor
				</a>
				. Coded by{' '}
				<a href='https://github.com/RayAsh37/article-preview-component'>
					Ashray Shetty
				</a>
				.
			</div>
		</>
	);
}

export default App;
