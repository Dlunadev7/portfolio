import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<img
									src="./ambopu.svg"
									alt="facebook"
									className="work-image"
								/>
								<div className="work-title">Ambopu</div>
								<div className="work-subtitle">
									Software Developer
								</div>
							</div>
							<div className="work-duration">2021 - 2 Months</div>
						</div>

						<div className="work">
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<img
									src="./novateva_logo.jpeg"
									alt="twitter"
									className="work-image"
								/>
								<div className="work-title">Novateva</div>
								<div className="work-subtitle">
									Software Developer
								</div>
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>

						<div className="work">
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<img
									src="./api4chat.webp"
									alt="twitter"
									className="work-image"
								/>
								<div className="work-title">Api4Chat</div>
								<div className="work-subtitle">
									Software Developer
								</div>
							</div>
							<div className="work-duration">2023 - 3 months</div>
						</div>

						<div className="work">
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<img
									src="./ecosystem.png"
									alt="twitter"
									className="work-image"
									width={25}
								/>
								<div className="work-title">Ecosystem</div>
								<div className="work-subtitle">
									Software Developer
								</div>
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
