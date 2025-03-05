import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./equitable.png"
								alt="equitable"
								className="work-image"
							/>
							<div className="work-title">Equitable Life of Canada</div>
							<div className="work-subtitle">
								Software Solutions Developer
							</div>
							<div className="work-duration">Jan 2025 - Present</div>
						</div>

						<div className="work">
							<img
								src="./studyforge.jpg"
								alt="studyforge"
								className="work-image"
							/>
							<div className="work-title">StudyForge</div>
							<div className="work-subtitle">
								Developer Intern
							</div>
							<div className="work-duration">Jan 2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./electriummobility.jpg"
								alt="electriummobility"
								className="work-image"
							/>
							<div className="work-title">Electrium Mobility</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">Jan 2024 - Apr 2024</div>
						</div>

						<div className="work">
							<img
								src="./kindencpa.png"
								alt="kindencpa"
								className="work-image"
							/>
							<div className="work-title">Kinden Accounting & Advisory</div>
							<div className="work-subtitle">
								Full Stack Developer
							</div>
							<div className="work-duration">May 2023 - Aug 2023</div>
						</div>

						<div className="work">
							<img
								src="./timhortons.png"
								alt="timhortons"
								className="work-image"
							/>
							<div className="work-title">Tim Hortons</div>
							<div className="work-subtitle">
								Supervisor
							</div>
							<div className="work-duration">June 2021 - Sept 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
