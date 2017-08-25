x5engine.settings.imBlog = {
	root: 'https://vannalux.github.io/blog/',
	home_posts_number: 10,
	file_prefix: 'x5_',
	comments: false,
	comments_source: 'wsx5',
	email: '',
	comment_type: 'both',
	approve_comments: 0,
	post_type: 'firstshown',
	categories: ['Ммм'],
	posts: [],
	posts_cat: [],
	posts_month: [],
	posts_ids: []
};

var post = null;

// Post titled "ЛАМИНАТ"
x5engine.settings.imBlog.posts['i5l6yc5t'] = {
	id: 'i5l6yc5t',
	title: 'ЛАМИНАТ',
	author: '',
	category: 'Ммм',
	summary: '',
	sources: [],
	body: '<div id="imBlogPost_i5l6yc5t">Когда Вам нужно выбрать и купить ламинат в Одессе, то стоит обратить пристальное внимание на его характеристики. То же самое можно сказать и про паркет. Одесса - один из тех городов, где есть большой выбор продукции самого разного качества. И чтобы купить паркет в Одессе, который будет Вам идеально подходить, стоит учесть некоторые ключевые моменты.<div style="clear: both;"><!-- clear floated images --></div></div>',
	timestamp: '25/8/2017 12:55:00',
	utc_time: new Date(2017,7,25,9,55,0),
	month: '201708',
	comments: false,
	tag: []
};
if (x5engine.settings.imBlog.posts_cat['Ммм'] == null) x5engine.settings.imBlog.posts_cat['Ммм'] = [];
x5engine.settings.imBlog.posts_cat['Ммм'][x5engine.settings.imBlog.posts_cat['Ммм'].length] = 'i5l6yc5t';
if (x5engine.settings.imBlog.posts_month['201708'] == null) x5engine.settings.imBlog.posts_month['201708'] = [];
x5engine.settings.imBlog.posts_month['201708'][x5engine.settings.imBlog.posts_month['201708'].length] = 'i5l6yc5t';

// IDs summary
x5engine.settings.imBlog.posts_ids = ['i5l6yc5t'];

x5engine.boot.push("x5engine.imBlog.show()");
x5engine.boot.push("x5engine.imForm.initForm('#blogComment')");

// End of file x5blog.js