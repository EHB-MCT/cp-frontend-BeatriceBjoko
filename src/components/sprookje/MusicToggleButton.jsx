import { useEffect, useRef, useState } from "react";
import { withBase } from "../../utils/helpers";
import "../../Sprookje.css";

const playIcon = withBase("assets/icons/play-icon.svg");
const pauseIcon = withBase("assets/icons/pause-icon.svg");

const MusicToggleButton = () => {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(true);

	useEffect(() => {
		const audio = audioRef.current;
		audio.play();
		return () => {
			audio.pause();
		};
	}, []);

	const toggleMusic = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<>
			<audio ref={audioRef} src={withBase("assets/vuurvogel.mp3")} loop preload="auto" />
			<button className="music-toggle-btn" onClick={toggleMusic}>
				<img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? "Pause music" : "Play music"} />
			</button>
		</>
	);
};

export default MusicToggleButton;
