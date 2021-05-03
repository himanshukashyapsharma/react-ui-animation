import { useState, useEffect } from "react";
import { useTransition, config } from "react-spring";

export function useChartTransition(delay = 1500) {
	const [showChart, SetShowChart] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			SetShowChart(true);
		}, delay);
	}, []);

	///////////////////
	const transitions = useTransition(showChart, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		delay: 2000,
		config: config.molasses,
	});

	return transitions;
}
