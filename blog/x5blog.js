x5engine.settings.imBlog = {
	root: 'http://vannalux.github.io/blog/',
	home_posts_number: 10,
	file_prefix: 'x5_',
	comments: false,
	comments_source: 'wsx5',
	email: '',
	comment_type: 'both',
	approve_comments: 0,
	post_type: 'firstshown',
	categories: ['22'],
	posts: [],
	posts_cat: [],
	posts_month: [],
	posts_ids: []
};

var post = null;

// Post titled "ЛАМИНАТ"
x5engine.settings.imBlog.posts['78g2ptmf'] = {
	id: '78g2ptmf',
	title: 'ЛАМИНАТ',
	author: '',
	category: '22',
	summary: '',
	sources: [],
	body: '<div id="imBlogPost_78g2ptmf">Когда Вам нужно выбрать и купить ламинат в Одессе, то стоит обратить пристальное внимание на его характеристики. То же самое можно сказать и про паркет. Одесса - один из тех городов, где есть большой выбор продукции самого разного качества. И чтобы купить паркет в Одессе, который будет Вам идеально подходить, стоит учесть некоторые ключевые моменты.<div style="clear: both;"><!-- clear floated images --></div></div>',
	timestamp: '25/8/2017 12:07:00',
	utc_time: new Date(2017,7,25,9,7,0),
	month: '201708',
	comments: false,
	tag: []
};
if (x5engine.settings.imBlog.posts_cat['22'] == null) x5engine.settings.imBlog.posts_cat['22'] = [];
x5engine.settings.imBlog.posts_cat['22'][x5engine.settings.imBlog.posts_cat['22'].length] = '78g2ptmf';
if (x5engine.settings.imBlog.posts_month['201708'] == null) x5engine.settings.imBlog.posts_month['201708'] = [];
x5engine.settings.imBlog.posts_month['201708'][x5engine.settings.imBlog.posts_month['201708'].length] = '78g2ptmf';

// IDs summary
x5engine.settings.imBlog.posts_ids = ['78g2ptmf'];

x5engine.boot.push("x5engine.imBlog.show()");
x5engine.boot.push("x5engine.imForm.initForm('#blogComment')");

// End of file x5blog.js