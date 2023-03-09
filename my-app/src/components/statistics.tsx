import React, { useEffect, useState } from "react"
import StatisticTable from "../reusables/statisticTable"
import axios from "axios"
import { IStatistic } from "../types/statisticsTypes"

function Statistics() {
	const [selectDate, setSelectDate] = useState(new Date(Date.now()))
	const [statisticsData, setStatisticsData] = useState<null | IStatistic>(
		null
	)

	const monthArray = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	]

	function adjustDateLess() {
		setSelectDate(new Date(selectDate.valueOf() - 24 * 60 * 60 * 1000))
	}

	function adjustDateMore() {
		setSelectDate(new Date(selectDate.valueOf() + 24 * 60 * 60 * 1000))
	}

	async function getStatisticsData() {
		const result = await axios.get(
			process.env.PUBLIC_URL + "/mockStatisticsData.json"
		)
		setStatisticsData(result.data)
	}

	useEffect(() => {
		getStatisticsData()
	})

	return (
		<div className="background flex flex-col items-center justify-start py-4">
			<div className="my-4 track-expand">
				<div className="statistics-title mb-10">Statistics</div>
				<div className="statistics-summary">
					<div className="statistics-summary-text">You tracked</div>
					<div className="statistics-summary-number">211</div>
					<div className="statistics-summary-text">
						Last tracked at 6:30PM
					</div>
				</div>
				<div className="statistics-date-selector mt-4 justify-between">
					<button
						className="mr-4"
						onClick={adjustDateLess}>
						&#60;
					</button>
					{selectDate.getDate() +
						" " +
						monthArray[selectDate.getMonth()] +
						" " +
						selectDate.getFullYear()}
					<button
						className="ml-4"
						onClick={adjustDateMore}>
						&#62;
					</button>
				</div>

				<StatisticTable statistics={statisticsData} />

				<div className="my-4">
					<div className="inline-flex w-full my-3 justify-center">
						<button className="track-submit-button">Submit</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Statistics
