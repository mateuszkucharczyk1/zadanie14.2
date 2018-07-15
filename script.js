var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		src: 'https://www.harrypottermovieposters.com/wp-content/uploads/2013/08/harry-potter-and-the-order-of-the-phoenix-movie-poster-style-h.jpg'
	},
	{
		id: 2,
		title: 'Król lew',
		desc: 'film o królu sawanny',
		src: 'https://movieposters2.com/images/731769-b.jpg'
	},
	{
		id: 3,
		title: 'Matrix',
		desc: 'Film o wojnie maszyn z ludźmi',
		src: 'http://www.impawards.com/1999/posters/matrix_ver1_xlg.jpg'
	},
	{
		id: 4,
		title: 'Fog',
		desc: 'Film o tajemniczej mgle',
		src: 'http://www.impawards.com/2005/posters/fog.jpg'
	},
	{
		id: 5,
		title: 'Frozen',
		desc: 'Bajka o królowej śniegu',
		src: 'http://www.impawards.com/2013/posters/frozen.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.src})
	);
});


var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
		);

ReactDOM.render(element, document.getElementById('app'));
