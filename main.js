function buscarPosts() {
    var contents = document.getElementById("contents");
    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
	    var todosPosts = '';

	    json.forEach(post => {
		var postHtml = '<div class="painel" id="post_' + post.id + '">' +
		    '<div class="titulo"><h3>' + post.title + '</h3></div>' +
		    '<div class="texto">' + post.body + '</div></div>\n';
		todosPosts += postHtml;
	    });

	    contents.innerHTML = todosPosts;
	});
}


function buscarAlbuns() {
    var contents = document.getElementById("contents");
    
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => {
	    var todosAlbuns = '';

	    json.forEach(album => {
		var albumHtml = '<div class="painel" id="album_' + album.id + '">' +
		    '<div class="titulo"><h3>' + album.title + '</h3></div>' +
		    '</div>\n';
		todosAlbuns += albumHtml;
	    });

	    contents.innerHTML = todosAlbuns;
	});
}

function buscarToDos() {
    var contents = document.getElementById("contents");
    
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
	    var todosToDos = '';

	    json.forEach(todo => {
			var todoHtml = '<li id="todo_' + todo.id + '">' + todo.title  + '</li>\n';
			if (todo.completed) {
				var todoHtml = '<li class="checked" id="todo_' + todo.id + '">' + todo.title  + '</li>\n';
			}
			todosToDos += todoHtml;
	    });

	    contents.innerHTML = todosToDos;
	});
}