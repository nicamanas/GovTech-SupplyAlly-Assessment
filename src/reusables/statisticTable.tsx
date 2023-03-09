import React from "react"
import { IStatistic, ITrackedPackage } from "../types/statisticsTypes"

function convertString(dateObject: Date) {
	const monthArray = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	]

	const hour = dateObject.getHours()
	const min = dateObject.getMinutes()
	let minStr
	if (min < 10) {
		minStr = "0" + min
	} else {
		minStr = min
	}

	let timeStr
	if (hour == 0) {
		timeStr = hour + ":" + minStr + " AM"
	} else if (hour < 12) {
		timeStr = hour + ":" + minStr + " AM"
	} else if (hour == 12) {
		timeStr = hour + ":" + minStr + " PM"
	} else {
		timeStr = hour - 12 + ":" + minStr + " PM"
	}

	let returnString =
		dateObject.getDate() +
		" " +
		monthArray[dateObject.getMonth()] +
		" " +
		dateObject.getFullYear() +
		", " +
		timeStr
	return returnString
}

function StatisticTable(props: { statistics: IStatistic | null }): JSX.Element {
	return (
		<div className="card-expand mt-6 text-left">
			<table className="table-fixed statistics-table">
				<tr>
					<th className="w-1/2">Tracking ID</th>
					<th className="w-1/2">Last Updated Date</th>
				</tr>
				{props.statistics ? (
					props.statistics.trackedPackages.map(
						(trackedPackage: ITrackedPackage) => {
							return (
								<tr>
									<td>{trackedPackage.trackingId}</td>
									<td>
										{convertString(
											new Date(
												trackedPackage.lastUpdatedDate
											)
										)}
									</td>
								</tr>
							)
						}
					)
				) : (
					<tr>No data found</tr>
				)}
			</table>
		</div>
	)
}

export default StatisticTable
