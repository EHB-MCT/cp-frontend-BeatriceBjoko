import { useNavigate } from "react-router-dom";
import { withBase } from "../../utils/helpers";

const RetourKnop = () => {
	const navigate = useNavigate();

	return (
		<button className="retour-knop" onClick={() => navigate("/")}>
			<img src={withBase("assets/arrow-left.svg")} alt="Terug" className="retour-pijl" />
			Terug naar Home
		</button>
	);
};

export default RetourKnop;
