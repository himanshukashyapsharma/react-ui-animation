export const contacts = [
	{
		name: "Lindsey Stroud",
		email: "indsey.stroud@gmail.com",
		company: "Hatchbuck",
		role: "manager",
		forecast: "50%",
		recentActivity: "5 Minutes ago",
		image: "/images/tasks-card/3.png",
	},
	{
		name: "Rebecca Moore",
		email: "indsey.stroud@gmail.com",
		company: "Upwork",
		role: "CEO",
		forecast: "10%",
		recentActivity: "15 Minutes ago",
		image: "/images/tasks-card/2.png",
	},
	{
		name: "Lindsey Stroud",
		email: "indsey.stroud@gmail.com",
		company: "Slack",
		role: "engineer",
		forecast: "20%",
		recentActivity: "50 Minutes ago",
		image: "/images/tasks-card/1.png",
	},
	{
		name: "Lindsey Stroud",
		email: "indsey.stroud@gmail.com",
		company: "Clockify",
		role: "designer",
		forecast: "25%",
		recentActivity: "45 Minutes ago",
		image: "/images/tasks-card/3.png",
	},
	{
		name: "Rebecca Moore",
		email: "indsey.stroud@gmail.com",
		company: "Trello",
		role: "engineer",
		forecast: "35%",
		recentActivity: "20 Minutes ago",
		image: "/images/tasks-card/2.png",
	},
	{
		name: "Lindsey Stroud",
		email: "indsey.stroud@gmail.com",
		company: "Trello",
		role: "CEO",
		forecast: "45%",
		recentActivity: "25 Minutes ago",
		image: "/images/tasks-card/1.png",
	},
	{
		name: "Lindsey Stroud",
		email: "indsey.stroud@gmail.com",
		company: "Upwork",
		role: "designer",
		forecast: "5%",
		recentActivity: "10 Minutes ago",
		image: "/images/tasks-card/3.png",
	},
	{
		name: "Rebecca Moore",
		email: "indsey.stroud@gmail.com",
		company: "Clockify",
		role: "engineer",
		forecast: "10%",
		recentActivity: "20 Minutes ago",
		image: "/images/tasks-card/2.png",
	},
];

////////////////////////////////

export const tasksChartState = {
	series: [26, 59, 15],
	options: {
		chart: {
			type: "donut",
		},
		labels: ["Active", "Completed", "Ended"],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: "bottom",
					},
				},
			},
		],
	},
};

export const dealsChartState = {
	series: [
		{
			name: "Deals",
			data: [50, 155, 55, 150],
		},
	],
	options: {
		chart: {
			// height: 300,
			width: "100%",
			type: "area",
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: "smooth",
		},
		xaxis: {
			type: "datetime",
			categories: ["2018-12-01", "2018-12-08", "2018-12-16", "2018-12-30"],
		},
		tooltip: {
			x: {
				format: "dd/MM/yy",
			},
		},
	},
};
