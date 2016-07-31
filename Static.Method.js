function Article() {
    this.created = new Date();
    // ... ваш код ...
    Article.counter++;
    Article.lastArticle = this.created;
}

Article.counter = 0;

Article.showStats = function () {
    return 'Всего: ' + this.counter + ', Последняя: ' + this.lastArticle;
};

new Article();
new Article();
console.log(Article.showStats()); // Всего: 2, Последняя: (дата));

new Article();
console.log(Article.showStats()); // Всего: 3, Последняя: (дата));