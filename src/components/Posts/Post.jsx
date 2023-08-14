import { MoreHorizOutlined } from '@mui/icons-material';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRounded, BiSave } from 'react-icons/bi';
import { RiSendPlaneLine } from 'react-icons/ri';
import { GrEmoji } from 'react-icons/gr';
import './Post.scss'

const Post = () => {
	return (
		<div className="post">
			<div className="post-card">
				<div className="card-top">
					<div className="profile">
						<img src="data:image/jpeg;base64,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" alt="" />
						<span>
							Alex <small>2h</small>
						</span>
					</div>
					<div className="iconsMore">
						<MoreHorizOutlined style={{ cursor: 'pointer' }} />
					</div>
				</div>
				<div className="post-info">
					<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRUZGBgYGRgYGhoaGBgaGBgYGBgZGhgYGBgcIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIARMAtwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIEBQYHAwj/xABBEAACAQIDBQUGAwYFAwUAAAABAgADEQQFIQYSMUFRImFxgZEHEzKhscEUQlJicoKS0fAVI6Lh8SRzshYzNDXS/8QAGQEAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAJREAAgICAgICAgMBAAAAAAAAAAECEQMhEjEiUQRBEzJhcYEU/9oADAMBAAIRAxEAPwC22ihEgRe7OdZqCMQwiyIkiJsEItAYCIlhFYwjCp/EPETk7RNF+2viIh0XPDDQR3TjGjVVVG8yr+8QPrHNDEo3wuh8GB+hmzHRnkd34SOb4pIudJGue1JzIoa48RgyyQxwjIzFk/Zl8XoZuIvD84HEVQ5zOuy1vQZOsJzDYRFSTELWKiFMXeNCYg8YoTkTrOoMQxV4IkGCOxUIEWDGxeKWpLLI0dzCM5+8he8gwoWREMJzrYoKLkgecrma56AN3fAJ5Ky39dT8pG/oko/ZKZjjqdMXZ1XxZVHmSZWsftQgNkdfFNbHTXfJHykPmGKR9H15DiT66XlfxuFF7qWt0KG3qTLYY0+xSlXRK4zMAxu12P7TKbfyrc+siMRixystv035eMZbzLyNvHT0nCrXvytNMYJFUpsm8JtJiaVjSxNRLdHfd80uVPmDLPlftQxKECsqVh+odh/9I3T/ACiZuWHSAMOpElxRHkbbQ9ouHqW3iU67wAt5gkf3y5T2HzFH3SrCzfD0bnoec88BzyIPyMfYPNXTRWZdb2BYC9+g0lE8De0yyM4m/VIMMbykbK7YCqu5WNnXQEa76+HHe+suWBJtc6E3NulyTaYpRcZUy27WhywiHEUxiS0kxAUQyIEMURBAN24xYg5zoFggsSphwFYIwOSUhOow4nJH1jtWlioi7OLUQOMgc2z6nSFlG+3S9h9JL5jmNOmpLkjjpY9qwvYTINqc1Sq5ZWVRoAqb1h3cNT393ARxjydDvirY+zvPGc3dgq9FqakdOyBK/Uzfd0RQv+o+N5EvVvzJ8Yg1D3TVHGkimWRtjqvmLtxa/lacBij/AGYlabNwBPlO9LLqjcFMn4oj5M4nEnqfWILyYpbOVCLkETsNm3AuxsO+LnH2PhJ/RAFe6FaPMThgDZTveEFLL2blHyQuDGqi8SfWSOJyxlF4x3OsaaYOLWmPsjxYp1kqMbBTfmdfLWbRs7nyYm+4QSBfS/DgdDqPOYVTbkeBkllWYtQYMpF+XGwub62sRwtp1lGbEp7+yyEq0b8TEuZFbP5n+IopU5kWYaEhhxBI4nvsL9JKNMLTRcGpigYSiGREgE31nUThbWd1jTExJghsIJIVHUZW06pgmEn9yc6iia/wpFPNmdbfUvd4Z2UdpyFZrEkIAWIvxA0t0uZh1Y68J6B9oGHarhmROu837qAtb1C+lucwrGYNlUsQeNuHcCR8xJYqVpDnbSZGsZYMoyffALSGwdHedV6kf1mhYClu6R5p8Volgx8nbEYXLEXgvyklTwwFtJ0RY9pJMEptnQUEjklHukNj8qdySSxHIHgPAWlnRIp00jjNraE4p9lITIbHWPaeXKvKT9RBGdQaxvJJgoxXSIjGYUFCJRsXT3WM0PFmyk90o2Ygb/iZpwSbRk+RFJojDxgUwmFtOn/EIzUZbNH9mGOJZ6ZPLetyuNPW30mksZivs9xW5jaQvo28p8SpK/MTaXM53yI8ZP8Ak0wdxFB4ReIEIzNbJilfWdw0aqdZ3Bji2JoWTBEb0EnYFujTFk20jq8Sy3nTkrVGREC+FZgQRxv85lm2+QGjRNxor2BPO6KFPomt5uPuxKf7UcEHwFQ80ZGH826R6MZV+LjuyxSvRhGzlMNiU/iI8lMvVBJSNmjbFUx1Yj1Vpd6mLpobF1ve3ESr5FtpL0afitJOx/SWPVFpH4fEqbWIN+kkC17THTNlo7AcIGB6xjjM1WkCCt9CfQE/aU/H7YVy3ZUKPC8ujhlLoplljHsu9RRIys+sqi5/iGsWJA8LCSFLNGYdtbdWElLDKIRzRkSOJF1PhKHmhsxHfL1Te8rm1eD0FRRw4y3BKnxZT8mNx5FYqG5vEvyhAw5sMBIbPViuJoMOVWn6FgD8iZvTPPP2Vg++pW4+8S3jvC039pi+WujRh6FK0UIhViwJjSLWJJ1nUTgeM6AxLsYstBOd4JIRb3a0ZVsyRDYm0d1+BmW7b1WDizEeBtOhkk49GaKs0Fs7T9Q9ZC7V5ilbDVKasLsOvQXHzAmT1azn87fzGHhncMCXawN+J1tylblJrssUUmVnAKwr2W4YBrdQ1j/vJClkjsN5mC+PGdsLhymYJ0ZmYeatHVZXZybEJfja9h+yp085bKTtV6CMVTtfZzwTGg3xhhzlsy/G7+olPo4Wo1g7aBiSb9plsNAp7I5nrr3Se2bp7jt0v5eUqzRVcr2aMMnfGtDjN7dLyB/Fbp0VfOwA/wB5Z8cgYnnf6c5FYmgFcOia6EaAgeX3kcc01RLJB2Nf8XQBt/dBWwPYfQtcgX77HlyM6UsdTfiB4g3HnzERicKlVy9RbMQLkK2tgBew0/4jrDZam9vBPMg3MnNxSIQjNv6Ha0woFuHHlGGb09+mw7jJU0wosBpGFUXFv71lEJeVl843GmZyBygEcY2gUqMv7Rt4HhCw2FZzuqLmdG1VnK4u6JHZSjv4ygp4b4P8oLfabkZmfs32dd8YGI0pU98/vPvIg9N4+U1//CT1mbPCU3cV9F0GoqmRqGGTJIZT3xYyrvlCwT9E3kiQ7cYsnSShygdYr/Cl6w/5p+hflQwwuDZuEOTWFpe70B4wTTD40a8it5djuvwMyzbkdsTUq/AzLtuR2xIZu0OBUJ0VBLHkuzu+N5ucnP8A0ovSUuXos/sodLDb1fDsOKOL96WJMkauEDcCV8PvJp8jKVBbQdr5qR94zUXa3fb0kZTeqNWCKadkV/hoGpJMd4GmFGkdY5bLYcTwh0KBIO7rYfTiZCUpNUy+KinaOLcZ1p07iNnpNfSKTEuvYPj5QSG2dvwxvOgpW5TrgcSDxi8VUHKFMLrSGOIYWkUx19Y9q1LyPqjtX6f39hJxRCTGeKwCO6sQONrx1gMGiMHUHnqRYWHADqf6wzqR4iSOMqBF3qnZCi/oJbzfRV+ON2T2wNNx+IqJbV0pnu92gNvV2lwHvuomdezDNH9xXIHGuz2vqN9VP2l0XOH3bkWm6MUkkcycrk2SdqvWH7ur+qRtXNHC7wE4pmlUgGwtJaIkuaFT9cAwz/rkNic3qLwAjZM4rsdAPnDQFj/Cv+swSr1M9rA2IEEdIC+1uBmY7dDtLNOq8DMz26+JfGYc30Xw7J7ZvEqUXwEsXvFmUZVjnSwU+Us1LM3txmRTcXRe8d7JbG1V3xKNv7jODxViPQx1mOOctxkbj7ud4cXHqRx+kcdvZZj8Rvi8U2rDyHdGeHzhwCpUj++sSayro5t/WdMNjqWo687A2l6jX0Scm+mLoPWfVahA6KoJ82a/0kll9Fg2/Ua5tbwHPxjSjmNFLje48bAARZz7Dj859DBpvpDi67Y7xYUdpTun5HxnFMUXuD8Q4xo2JatrTU7nNmFh4AcTHeFp2Uk8eHpIyjSGpNsQBcmcKqx0p4nlGNV7nhElsbYlzax9JUs9xtV23XdmC2IB4a89OMtlc2Ep2eraqfAS/AvIzfIfjo0f2Z0CuFZv1uT4gafYy4/hmqCyrIjZnCGlhkQix3FJHRmFyPUybwOOencAAqeR+xmtp1aMWr2E+HewQjWdaeXVCLAaRFXNHLXCi3T/AHndM/fhugStufolUfZ2GTseInSjk4XnOIzljzA8hOFTHufzn6fSRqY7iJzDLKY1vrDiN0kXOsEsUXXYm1ZbavAzNNvOK+P9ZpdbhMz28Go8ZlzfRZDsruWasJccJQBlIy97OsvuVuLzHNeRrvxInNcKBrEV8lf8Oaqgnc7f8P5j9/C8mcxVSQDwuL+FxeXvD0FChQBa1u60twYube+iiWVxejCMUqPfTQjURgmXIDoBbwls2uyH8LXJXSk92T9n9SX7ifQjvkC1E8pY24ujRjakrRyoYZAwsq693D5SRTA0/iPaPynKnhzzEeUkA5/SRlN+y3Yo8DyEYu54d8eV2AHzke7CJEJOhT1LCcE43nOpUnSgukmlRByOdVbsF6keg1MZ4TI/xOKW5AQWLX/SDwvJBV+J+Viq95/Mft6yb2Lyd3qGqRakoKkm/bb9KeB1J8vCeN+VEci8LZcsSiACxHDkY6TAKyA34jlKtjkKVWS/K4HPdPA2kvgsYy0wATwmzi68WYOSvaEYnClWte8SuDc8FjTEYqpvXsTr0k3gczsBvIZGXKK0rJRcWyMq4N1/KfrOIBHG8tdHEIxvw8RO9aijcgZV+WfTRPjH6ZXsIxK6qfSCWJ1UCwgj/JL0LgvY7q8DM02+PDxmm1eBmZbeLcqB1lOZU0SgUvDOd6WjJ8xYMARInCYLrpHe5ukEHhKZJM0LqiUzTHE205gepmr0BZR4CYbjK5JW2tmB9CJt+ExKuiup0IB9Zo+MkrM2VdETtXgVrUSjc9VPNWHBh/fC8x9t5HKOLMhsw6f7Tb8wTeFpStqtmlxHbQhKqiwb8rgcFcffiI80U3ZPDNx0VF8YBax0iHxacvtILHpVou1NwAymx1v3gjuOh84z9+x/NaVrEi95mTOJxuto39/bjGVK/wCUEnrH2GwN9XknGMUQ5Ni8NSLm/ISVp4bfO6vwj4m6/sj+9IeGob2g7K/MgcgZcMgyLfUM43aY4C1i4+y9/OQqUnUSTairZG5Nsya7BnBSivADQvbkOi9T6dRekoKihEUKqiwAFgAOQE7qoAsBYDQDoIwz3NEw1CpiKnwopNubNwVB3kkDzmuGNRVGXJlc3bMs9qub+7xVFaTWqU03mYct5gUU9RYE26N3y5bHZpSxtAOlldbCol9Ubr3qeIP3BmE5nj3r1XrVDdqjFm6C/ADuAsAOgEc5FnNXC1VrUXKsNDzV15o681PrzFjLE66Kns9Irgl6TquGXpILZPa6jjk7PYqhbvTJ1A0BZD+Zbka8RcXAljvHdioStEdIsIILw7wGEVEEOCACq1SymUTaCmHdR3ydzLMSFFtQZR8fmg3yL66EeuszZsbfRdjkk9ki2GCg6SGxKnpLdleG30BOt5INkyEfDMtNF7kmUGnTUKCeN/vNG2Ye6DpYSp55gwimw0ls2LZWw6MPA+I0lmLHJysjOaUaJzENpIaueJkxjPhMrtXEix85dmj42Uxe6Kp7QstDJSrgdoXRu8fEt/8AVKTRw68l14eE1LaGlv4Rja+52z3AcT5C5mf0aVjp9ZQm1FGiMbE0cMbcLCO6VAHv7uvlO6rfS2t7WHEk8BbrLts5s8KdqlQAvxA5J/Vu+SjFzdDlJQVs47P7PHR662GhWnz7i/8A+fXpLaBCEMzZGCiqRjlNydsIzFPa9tJ72sMIjdiid6pbg1Ujh/CDbxZuk0vbXPxgsLUqi2+exTB51GvY25gC7HuWecKjliWYksxJJOpJJuST1vJMiIihCgkQHmX5i9Gor03ZGW9mRip15XHLumhZN7Ta6WFZVrL1Nkf+ZRY+YmXAzojmAz0fkm12FxNgj7jn8j2Vr9FN91vImWCeXaNe3OWvJ9usXQsBV94g/JUG8LdA3xDyNoWKjd4JSck9pGFqgCt/07W59pD4OB9QPOCStAPse+6tiARMozirvV7g/msPC8umbZqTTIVgb6eUy/NsUwqeBi2kJtN6N62aI92uvISdZxaY7s9tnuKFYHSwlgqbbJbnMD5RdNGpJS2g9tsduiwPEwbEZ+Ke9TY9ljvL48CPpKVn2bGs1+U45fiDfwmzEqjsom/I2vHZyhQ2blKvRrX1vzlew+LcidsNjeR0trDNG46HjfkaDgnG4o0Omo7m01HTQ+kp20WX4XDtYV6VMnte6d1DKDwKDiF42B06HlI7Y7aVqj4+rfglL3QPwqql1BPrvEeMz7Osbv1HYHfZmJZzqzE8yecrjjXFRkTeRqVxNv2UyZAFxDMrllBQqboFI0YHmSOfKWtRMb9mm2X4fdwuJa1Fj/l1Cf8A2mY/Cx/QTz/KT0Omz2l0YKKpFc5uTthQocqHtHz/APDYR9xrO/8AlpbjvMDcjpYXN/Ac5MiZd7TtoTicWyK16VAlE6M40qN6jdHcoPOU2ACAyIAhGJLQohgh3hQ4ALDTvTeNYtWtACTRu6FI8VTBFQGg5JhGemSZW87wNqlrTVtn8sC0yCJUtq8CPfppxcCEpfRFR1ZXsLlTbu9bSKqoRpaX2pgVCADkJBvhVK3A6zPLIltmmMJPSKo7R5gBrEY+huvYR1hKARd9zujkPzN4dB3zTFpqzPJNOidpEbt7gADUngJXs9zUKjqnF+yW52PG3QWv6zjj8zZyETQX0A4eJkBmVS77o4LpfqeZ/vpCwJLIMa1KhiyBo9NEB/aaoo/8S8jqFO+pkgtBkwgBFhUqqeGpAViB3cLxiysPh+kkkFnHEvrabR7LMbixQCYgb1EAe7Jvvop4Kf1LzA4qO4gDP9h9nBi6jM/wU93TkzHUA9R3Tc8HhlpoFUcP7vGCHNaryXnz7u6YB7Rc+/E4tghvTo3pp0Jv23HiQB4KJpftC2h/DYZtxrVKt6adVFu248F4HqyzCZG7G1QImGTBEAVoVoZMTAA4IIIACCCCAClHWFDAhR0B6iy/CixIlG9oeF3ClUcnEu+TYm6ayu7fURUpFe+VyoaTeil1M8upA6SPw2NI0J0veR9ekUa0Z5nid1N0cW08uf2mfjydHaTjixNtdElVzFajl7f5aaIP1t+pv2R0kZjcczEkm94yFWyhRwAiUUsZqUUlSOLKTk7Z3otuqznjYgeHP7DzM45PgGr10pqLljc+F9YnGvpYcOHkvPzP0mjeyzI91TiXGraJfko/N5xiOftJwK4fB4amvH3pLHqVQg+XalDAuJe/bJiNcNT/AO4589xR9DKFSOkcRSNN9keFbcqufg95Yd7BVB9PvNHxD2WVP2a0dzAU+rl3/mdrfICNvafn3uMN7pDZ610FuIT87ehC/wAXdCTJRMy22zz8ViWZTemnYp9CqnVv4jc+FukrxghXi6E9hGCCE0AChwQQAEEEEABDAhRSwAOCCCMR6XyxN24hZzQBQ6R8qANcRnnWJ3UMhSrZZFtyVGPZ8lqlpVcze7gfpA/rLRndTeqEypYpr1HPfb00+0qxryZ0PmvjjjH2GscILDTjwHnONFLxxVbd/hBbz5f33y85Y3pUfeVlpj8zKg8L2J+pm/ZJhwqqiiyoo/oB/fSYtsRQDYkO3Cmpa/edB9TNyy/sUN86Fhva8r/CD5Wkvqhr2Y57UMXv45lHCmiJ52Ln/wA/lK2Hsp7hFZvi/e16lW996o7A/slju/K0cZVQ36tJP1VEXy3gT8gYLsRu+zmGFHDUkOgSmgJOnwqN4n5mYftjnf4vFPVBO4OxTHRFJsfM3bzmk+03O/w+FXDIbPXG6eq0h8Z/i0XwLdJjUj2SfoBhGCFAQDCgggAIIIcACghwQAKKEIwxGgDgggjEejMrzE1aSuD8QBlX2txr/CGNpB+zbaHRsO5uRqngeI/vrLBtDhWfgkzSu6NOFpSTZQara3MrK6knqTLnicrqa9g85U8JSvu98ljVWW/My82v4HWGp2F41xT3DHqQPIf8CP6z7qk90i8RwUdxPqbfaWmEtvs2wBqVWP5AV3u+2tvv5TRPaLmfuMEwBsz9hfFha48Br5SI9leDth1a3xsx8ddT6ACQHtfzLfxKUAdKabx/efh6D6xruxvoz5eMtmwOFD42mWNlpq9VieAVFtc91zKmsm8Hjvc4avunt4grRHUU1G9VP8W8i/zdIgXYjavOTi8S9bXdJ3UB/LTW4QeJ1Y97GQ0OFAQIRghAQGCCHCgAIcEAgAIBBDEACh3iYYjAOCCCAhzlWMNGrTqfpYE+F9flPSOXhK1JHUhgyggixuCJ5jmuex3NiyPh2Y9ghlF/ytfh4G/rIkkWXbFEoYWtV0BCELw+J+yvzMxfCLZb9w+c1T2yvu4OmAfjrqCOoCOfkd31mVof8tB1A+kdDlJs5Yx+yB1MZ4r4rdFUff7zpiXuwnTBqGxNMHgaiA+G8sF2QN42UwYo0ETkiKD42uxmE7Q4/wB/ia1a9w7sR+6DZP8ASBNwzHGe5wGIrXsRTfd/eI3V+ZE8+xsYunxhsYlIIhAgghGAAgks+R1VDb4Cld64JAAK6tduHAHhe505yJii0+mScWuwQQQRiAIIIUYhUJjAIljAYBDhCHAAxBBBAQmXD2YORj0APEMD3js6Q4JFjLT7b3P/AEovpaqbd9qYvM8X4E/dH0ggkhDGr8U7Zd/8in/3E/8AMQoILsH0a/t3/wDVN3vTv3/5i/0mJwQRsYrlBBBIiBOuCP8AmKf2hBBE+hx7LrtBUIwAtpdqJNgBcsrb3DloNOGkoYgglHxf1f8AZf8AI/b/AAOAQQTSZwQGCCABQmgggMEOCCAAEEEEQH//2Q==" alt="" />
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
						<span className='like'>8 likes</span>
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