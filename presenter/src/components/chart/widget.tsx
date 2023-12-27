"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { format } from "@/app/utils/number";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

interface IChartProps {
	data: number[];
}
export function Chart({ data }: IChartProps) {
	const values = {
		series: [
			{
				data: data ?? [],
			},
		],
		options: {
			tooltip: {
				theme: "dark",
				hideEmptySeries: true,
				enabled: true,
				marker: {
					fillColors: ["#7c3aed"],
				},
				y: {
					formatter(val) {
						return format.format(val);
					},
					title: {
						formatter() {
							return "Total:";
						},
					},
				},
			},
			colors: ["#7c3aed"],
			chart: {
				height: 350,
				type: "bar",
				toolbar: {
					show: false,
				},
			},
			plotOptions: {
				bar: {
					columnWidth: "45%",
					distributed: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			legend: {
				show: false,
			},
			yaxis: {
				labels: {
					style: {
						fontSize: "12px",
						colors: "#c4c4c4",
					},
				},
			},
			xaxis: {
				tooltip: {
					offsetY: 10,
				},
				categories: [
					["Energia", "Elétrica"],
					["Energia", "SCEE", "s/ ICMS"],
					["Energia", "compensada"],
					["Contrib", "Ilum", "Publica"],
				],
				labels: {
					style: {
						fontSize: "12px",
						colors: "#c4c4c4",
					},
				},
			},
		} as ApexOptions,
	};

	return (
		<div className="mt-6 overflow-auto">
			<ReactApexChart
				options={values.options}
				type="bar"
				series={values.series}
				width={521}
				height={450}
			/>
		</div>
	);
}
