RunningLeeUrl = {
    target: document.createElement('a'),
    params: {},
    query: null,
    url: null,
    parse: function (url) {
        var split = null;
        this.url = url || window.location.href;
        this.target.href = this.url;
        this.query = this.target.search.replace(/^\?/, '').split('&');
        for (var i = 0; i < this.query.length; i++) {
            split = this.query[i].split('=');
            this.params[split[0]] = split[1];
        }
        return {
            protocol: this.target.protocol,
            host: this.target.host,
            hostname: this.target.hostname,
            port: this.target.port,
            pathname: this.target.pathname,
            search: this.target.search,
            params: this.params,
            hash: this.target.hash
        }
    }
};

console.group("默认当前地址");

console.log(RunningLeeUrl.parse());

console.groupEnd();

console.group("带参数指定地址");

console.log(RunningLeeUrl.parse('https://www.google.com.hk/#newwindow=1&safe=strict&q=vue.js'));

console.groupEnd();