import React, { useState } from "react"
import axios from "axios"
import { ITrackingResult } from "../types/trackingTypes"
import Status from "../reusables/status"

function Track() {
	const [trackingId, setTrackingId] = useState<string>("")
	const [trackingData, setTrackingData] = useState<null | ITrackingResult>(
		null
	)

	async function getTrackingData(e: any) {
		e.preventDefault()

		setTrackingId(e.target.trackingId.value)

		const trackingResult = await axios.get(
			process.env.PUBLIC_URL + "/mockTrackingData.json"
		)
		setTrackingData(trackingResult.data)
	}

	return (
		<div className="background flex flex-col items-center justify-center">
			{trackingData ? (
				<div className="card-expand">
					<div className="card-expand-top">
						<div className="card-expand-top-boxemoji">
							&#x1F381;
						</div>
						<div className="px-3">
							<p className="card-expand-top-label">Tracking ID</p>
							<p className="card-expand-top-id">{trackingId}</p>
						</div>
					</div>
					<div>
						<Status
							trackingId={trackingId}
							trackingResults={trackingData}
						/>
					</div>
				</div>
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
