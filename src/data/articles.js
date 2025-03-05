import React from "react";

function article_3() {
	return {
		date: "January 6, 2025",
		title: "Starting My Journey at Equitable Life of Canada",
		description: `
			I’m thrilled to embark on my journey as a Software Solutions Developer Intern at Equitable Life of Canada! 
			I’ll be working on developing innovative applications to streamline insurance policy and claims processes, 
			to make these workflows faster, more efficient, and user-friendly. 
			I’m eager to expand my knowledge and elevate my skills as a software developer!
		`,
		keywords: [
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "December 1, 2024",
		title: "A Milestone Achievement: My Third-Place Finish in the Market Simulation Competition",
		description: `
			I’m delighted to have earned third place in a program-wide competition with my investment strategy algorithm!
			The algorithm uses dynamic analysis to adjust portfolio 
			allocations based on market trends and simulated scenarios. It was a rewarding experience to 
			see my approach recognized and to compete alongside so many talented participants, including my classmates.
			`,
		style: ``,
		keywords: [
		],
		body: (
			<React.Fragment>
				<h1>Content of article 3</h1>
			</React.Fragment>
		),
	};
}

function article_1() {
	return {
		date: "October 12, 2024",
		title: "New Achievement: Transferring to Computing and Financial Management",
		description: `
			Officially transferring to the Computing and Financial Management program 
			at the University of Waterloo marks an exciting new chapter for me. 
			This unique double major in Computer Science and Finance allows me to dive into both my passions, 
			combining technology and finance to explore a world of possibilities.
			`,
		style: ``,
		keywords: [
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

// Newest to oldest
const myArticles = [article_3, article_2, article_1];

export default myArticles;
