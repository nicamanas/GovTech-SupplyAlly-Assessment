import React from "react"
import { IStatus, ITrackingResult } from "../types/trackingTypes"

function convertString(dateObject: Date) {
	const dayArray = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	]

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

	const returnArray = [
		dayArray[dateObject.getDay()] +
			", " +
			dateObject.getDate() +
			" " +
			monthArray[dateObject.getMonth()],
		timeStr,
	]
	return returnArray
}

function Status(props: {
	trackingId: string
	trackingResults: ITrackingResult
}): JSX.Element {
	return (
		<>
			{props.trackingResults[props.trackingId].map((status: IStatus) => {
				const dateObject = new Date(status.datetime * 1000)
				const datetimeArr = convertString(dateObject)
				return (
					<div className="my-4">
						<div className="track-date mx-3 mb-2">
							{datetimeArr[0]}
						</div>
						<div className="track-status inline-flex mx-3">
							<div>{datetimeArr[1]}</div>
							<div className="mx-3">{status.status}</div>
						</div>
					</div>
				)
			})}
		</>
	)
}

export default Status
