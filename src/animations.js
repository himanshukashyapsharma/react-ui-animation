import { useState, useEffect } from "react";
import { useTransition, useSpring, config } from "react-spring";

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

export function useSearchAnimations() {
	const slideDownSearchBar = useSpring({ from: { transform: "translateY(-60px)" }, to: { transform: "translateY(0px)" } });
	return { slideDownSearchBar };
}

export function useDashboardSpringAnimations() {
	const slideRight = useSpring({ from: { transform: "translateX(-100%)", opacity: 0 }, to: { transform: "translateX(0px)", opacity: 1 }, delay: 500 });
	const slideLeft = useSpring({ from: { transform: "translateX(100%)", opacity: 0 }, to: { transform: "translateX(0px)", opacity: 1 }, delay: 500 });
	const slideUp = useSpring({ from: { transform: "translateY(10px)", opacity: 0 }, to: { transform: "translateY(0px)", opacity: 1 }, delay: 1000 });
	const slideRightText = useSpring({ from: { transform: "translateX(-50px)", opacity: 0, number: 4 }, to: { transform: "translateX(0px)", opacity: 1, number: 8 }, delay: 1500 });
	const slideLeftText = useSpring({ from: { transform: "translateX(50px)", opacity: 0, number: 4 }, to: { transform: "translateX(0px)", opacity: 1, number: 8 }, delay: 1500 });

	return { slideRight, slideLeft, slideUp, slideRightText, slideLeftText };
}
