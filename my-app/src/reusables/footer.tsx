import React from "react"

function Footer() {
	return (
		<div className="footer">
			<div className="footer-top w-full">
				<p className="footer-top-text">SupplyAlly</p>
			</div>
			<div className="md:inline footer-bottom flex w-full justify-between">
				<div className="footer-bottom-text md:mr-3">Version 1.0.0</div>
				<div className="footer-bottom-text md:mx-3">
					Last updated 20 Dec 2021
				</div>
				<div className="footer-bottom-text md:mx-3">
					© 2022 Government of Singapore.
				</div>
			</div>
		</div>
	)
}

export default Footer
