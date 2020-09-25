module.exports = {
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: 'gatsby-plugin-exclude',
			options: { paths: ['/patreon', '/partners'] },
		}
	]
};
