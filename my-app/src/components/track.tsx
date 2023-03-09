import React, { useState } from "react"
import axios from "axios"
import { IStatus } from "../types/trackingTypes"

function Track() {
	const [trackingData, setTrackingData] = useState(null)

	async function getTrackingData(e: any) {
		e.preventDefault()

		const trackingId = e.target.trackingId.value

		const trackingResult = await axios.get(
			process.env.PUBLIC_URL + "/mockTrackingData.json"
		)
		setTrackingData(trackingResult.data[trackingId])
	}

	return (
		<div className="background flex flex-col items-center justify-center">
			{trackingData ? (
				<div className="card"></div>
			) : (
				<div className="card">
					<div className="track-header-text">Track parcel</div>
					<div className="track-text">
						Key in individual package number to track
					</div>
					<form onSubmit={getTrackingData}>
						<label className="track-text track-label">
							Tracking ID
						</label>
						<br />
						<input
							type="text"
							name="trackingId"
							className="login-field my-1"
						/>
						<input
							type="submit"
							value="Track"
							className="login-button justify-center text-white mt-5"
						/>
					</form>
				</div>
			)}
		</div>
	)
}

export default Track
