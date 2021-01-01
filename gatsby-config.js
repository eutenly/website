module.exports = {
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-exclude",
			options: { paths: [ "/patreon", "/partners" ] }
		},
		"gatsby-plugin-remove-trailing-slashes",
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: "UA-176088939-1",
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: true,
				// Respect Do-Not-Track requests
				respectDNT: true,
			},
		},
	]
};
